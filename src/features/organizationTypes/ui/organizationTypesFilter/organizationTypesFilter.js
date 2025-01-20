import React, {useRef, useState, useEffect} from 'react';
import cls from "./organizationTypesFilter.module.sass";
import {Button} from "shared/ui/button/button";
import mapIcon from 'shared/assets/icons/map.png'
import {motion} from "framer-motion";
import asset from 'shared/assets/images/SAT.png'
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "../../../../shared/ui/input";
import {useDispatch, useSelector} from "react-redux";
import {organizationTypeCard, organizationTypeFilter} from "../../model/selector/organizationTypesSelector";
import {useForm} from "react-hook-form";
import {addOrganization, onDeleteOrganization, onEditOrganization} from "../../model/slice/organizationTypesSlice";
import {fetchOrganizationTypesCards, fetchOrganizationTypesFilter} from "../../model/thunk/organizationTypesThunk";
import {fetchRegionsData, getRegions} from "../../../../entities/oftenUsed";
import {API_URL, headers, useHttp} from "../../../../shared/api/base";
import {Select} from "../../../../shared/ui/select";
import {ConfirmModal} from "../../../../shared/ui/confirmModal";


export const OrganizationTypesFilter = () => {

    const filter = useSelector(organizationTypeFilter)
    const cards = useSelector(organizationTypeCard)
    const region = useSelector(getRegions)
    const containerRef = useRef(null);
    const [constraint, setConstraint] = useState(0);
    const [category, setCategory] = useState('school')
    const [active, setActive] = useState(filter[0]?.id)
    const [portal, setPortal] = useState(false)
    const [activeConfirm, setActiveConfirm] = useState(false)
    const [changeRegion, setChangeRegion] = useState(false)
    const [selectRegion, setSelectRegion] = useState(false)


    const [activeItem, setActiveItem] = useState(null)

    const [activeEdit, setActiveEdit] = useState(false)

    const dispatch = useDispatch()
    const {register, handleSubmit, setValue} = useForm()

    const {request} = useHttp()

    useEffect(() => {
        setValue("name", activeItem?.name)
        setValue("request", activeItem?.request)
        setValue("phone", activeItem?.phone)
        setChangeRegion(activeItem?.region)
    }, [activeItem])
    useEffect(() => {
        dispatch(fetchOrganizationTypesFilter())
        dispatch(fetchRegionsData())
    }, [])

    useEffect(() => {
        if (active || selectRegion) {
            dispatch(fetchOrganizationTypesCards({id: active, region: selectRegion}))
        }
    }, [active, selectRegion])

    useEffect(() => {
        const updateConstraints = () => {
            const containerWidth = containerRef.current.offsetWidth;
            const childWidth = containerRef.current.scrollWidth;
            const constraint = containerWidth - childWidth;
            setConstraint(constraint);
        };

        updateConstraints();
        window.addEventListener('resize', updateConstraints);
        return () => window.removeEventListener('resize', updateConstraints);


    }, []);


    const renderItem = () => {
        return filter?.map(item => (
            <Button
                extraClass={active === item.id ? cls.active : cls.mainBox__extraBox__typeBox__handlerBox}
                onClick={() => {
                    setCategory(item?.category)
                    setActive(item?.id)
                }}
            >
                <span className={cls.mainBox__extraBox__typeBox__handlerBox__contentBox}>
                            <h1>{item?.name}</h1>
                            <h3>{item?.descr}</h3>
                        </span>

            </Button>
        ))
    }

    const onCreate = (data) => {
        const res = {
            ...data,
            region: +changeRegion,
            organization_type: active
        }
        request(`${API_URL}organizations/organization/crud/create/`, "POST", JSON.stringify(res), headers())
            .then(res => {
                dispatch(addOrganization(res))
                setPortal(false)
            })

    }
    const onDelete = (data) => {

        request(`${API_URL}organizations/organization/crud/delete/${activeItem.id}/`, "PATCH", JSON.stringify({deleted: true}), headers())
            .then(res => {
                dispatch(onDeleteOrganization(activeItem.id))
                setActiveConfirm(false)
                setActiveEdit(false)
            })

    }

    const onEdit = (data) => {
        const res = {
            ...data,
            region: changeRegion,
            organization_type: active
        }
        request(`${API_URL}organizations/organization/crud/update/${activeItem.id}/`, "PUT", JSON.stringify(res), headers())
            .then(res => {
                dispatch(onEditOrganization({id: activeItem.id, data: res}))
                setActiveEdit(false)
            })


    }
    return (
        <div className={cls.box}>
            <h1>Tashkilot turlari</h1>
            <div className={cls.box__btnBox}>
                {renderItem()}
            </div>

            <div className={cls.box__buttonPanel}>
                <h1>Tashkilot turlari</h1>
                <div className={cls.box__buttonPanel__container}>
                    <Select onChangeOption={setSelectRegion} options={region}/>
                    <Button onClick={() => setPortal(!portal)} extraClass={cls.box__buttonPanel__container__btn}>
                        <i className={"fa fa-plus"}/>
                    </Button>

                </div>
            </div>
            <div className={cls.box__spinnerContainer} ref={containerRef}>
                <motion.div
                    drag="x"
                    dragConstraints={{right: 0, left: constraint}}
                    className={cls.box__spinnerContainer__spinBox}
                >
                    {cards?.results?.map(card => (
                        <motion.div
                            className={cls.box__spinnerContainer__spinBox__spinner} key={card.id}>
                            <img src={asset} alt=""/>
                            <div className={cls.box__spinnerContainer__spinBox__spinner__innerBox}>
                                <div className={cls.box__item}>
                                    <h1>{card?.name}</h1>
                                    <i onClick={() => {
                                        setActiveEdit(true)
                                        setActiveItem(card)
                                    }} className={"fa fa-pen"}/>
                                </div>
                                <h2>{card?.location}</h2>
                                <h3>Phone: {card?.phone}</h3>
                                <span>
                                    <h4>Arizalar soni: {card?.application_num}</h4>
                                </span>
                            </div>
                            {/*<h3>{card.title}</h3>*/}
                            {/*<p>{card.content}</p>*/}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Modal extraClass={cls.box__portal} active={portal} setActive={setPortal}>
                <h1>Add</h1>
                <Form onSubmit={handleSubmit(onCreate)} extraClassname={cls.box__portal__form} isChange={false}>
                    <Input register={register} name={"name"} extraClass={cls.box__portal__form__input}
                           placeholder={"Name"}/>
                    <Select options={region} extraClass={cls.select} onChangeOption={setChangeRegion}/>
                    <Input register={register} name={"phone"} type={"number"} extraClass={cls.box__portal__form__input}
                           placeholder={"Phone"}/>
                    <Input register={register} name={"request"} type={"number"}
                           extraClass={cls.box__portal__form__input} placeholder={"Arizalar soni"}/>
                    <Button extraClass={cls.box__portal__form__btn}>Add</Button>
                </Form>
            </Modal>

            <Modal extraClass={cls.box__portal} active={activeEdit} setActive={setActiveEdit}>
                <h1>Add</h1>
                <Form extraClassname={cls.box__portal__form} isChange={false}>
                    <Input register={register} name={"name"} extraClass={cls.box__portal__form__input}
                           placeholder={"Name"}/>
                    <Select options={region} extraClass={cls.select} onChangeOption={setChangeRegion}
                            defaultValue={changeRegion}/>
                    <Input register={register} name={"phone"} type={"number"} extraClass={cls.box__portal__form__input}
                           placeholder={"Phone"}/>
                    <Input register={register} name={"request"} type={"number"}
                           extraClass={cls.box__portal__form__input} placeholder={"Arizalar soni"}/>
                    <div style={{display: "flex", gap: "1rem"}}>
                        <Button onClick={handleSubmit(onEdit)} extraClass={cls.box__portal__form__btn}>Edit</Button>
                        <Button type={"danger"} onClick={handleSubmit(() => setActiveConfirm(true))}
                                extraClass={cls.box__portal__form__btn}>Delete</Button>
                    </div>
                </Form>
            </Modal>

            <ConfirmModal
                onClick={onDelete}
                setActive={setActiveConfirm}
                active={activeConfirm}
            />

        </div>
    );
};

