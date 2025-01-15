import React, {useRef, useState, useEffect} from 'react';
import cls from "./organizationTypesFilter.module.sass";
import {Button} from "shared/ui/button/button";
import mapIcon from 'shared/assets/icons/map.png'
import {motion} from "framer-motion";
import asset from 'shared/assets/images/SAT.png'
import {Modal} from "shared/ui/modal";
import {Form} from "shared/ui/form";
import {Input} from "../../../../shared/ui/input";

const filter = [
    {
        id: 1,
        name: "Maktablar",
        descr: "Ro'yxati",
        icon: <i className="fas fa-school"></i>,
        category: "school"

    },
    {
        id: 2,
        name: "Institutlar",
        descr: "Ro'yxati",
        icon: <i className="fas fa-graduation-cap"></i>,
        category: "univer"
    }
]

const cards = [
    {
        id: 1,
        name: "University of Business and Science",
        location: "Chirchiq",
        phone: "+99899111111",
        application_num: "11"
    },
    {
        id: 2,
        name: "University of Business and Science",
        location: "Chirchiq",
        phone: "+99899111111",
        application_num: "11",
        category: "school"
    },{
        id: 3,
        name: "University of Business and Science",
        location: "Chirchiq",
        phone: "+99899111111",
        application_num: "11",
        category: "univer"
    },{
        id: 4,
        name: "University of Business and Science",
        location: "Chirchiq",
        phone: "+99899111111",
        application_num: "11",
        category: "univer"
    },

];
export const OrganizationTypesFilter = () => {
    const containerRef = useRef(null);
    const [constraint, setConstraint] = useState(0);
    const [category, setCategory] = useState('school')
    const [filtered, setFiltered] = useState([])
    const [active, setActive] = useState(filter[0].id)
    const [portal, setPortal] = useState(false)

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
    useEffect(() => {
        const filteredCards = cards.filter(card => card.category === category);
        setFiltered(filteredCards);
    }, [category]);

    console.log(category)

    const renderItem = () => {
        return filter.map(item => (
            <Button
                extraClass={active === item.id ? cls.active : cls.mainBox__extraBox__typeBox__handlerBox}
                onClick={() =>
                    {
                        setCategory(item.category)
                        setActive(item.id)
                    }

            }

            >
                        <span className={cls.mainBox__extraBox__typeBox__handlerBox__iconBox}>
                            {item.icon}
                        </span>
                <span className={cls.mainBox__extraBox__typeBox__handlerBox__contentBox}>
                            <h1>{item.name}</h1>
                            <h3>{item.descr}</h3>
                        </span>

            </Button>
        ))
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
                    <Button onClick={() => setPortal(!portal)} extraClass={cls.box__buttonPanel__container__btn}>
                        <i className={"fa fa-plus"}/>
                    </Button>
                    <Button extraClass={cls.box__buttonPanel__container__btn}>
                        <img src={mapIcon} alt=""/>
                    </Button>
                </div>
            </div>
            <div className={cls.box__spinnerContainer} ref={containerRef}>
                <motion.div
                    drag="x"
                    dragConstraints={{right: 0, left: constraint}}
                    className={cls.box__spinnerContainer__spinBox}
                >
                    {filtered?.map(card => (
                        <motion.div
                            className={cls.box__spinnerContainer__spinBox__spinner} key={card.id}>
                            <img src={asset} alt=""/>
                            <div className={cls.box__spinnerContainer__spinBox__spinner__innerBox}>
                                <h1>{card.name}</h1>
                                <h2>{card.location}</h2>
                                <h3>Phone: {card.phone}</h3>
                                <span>
                                    <h4>Arizalar soni: {card.application_num}</h4>
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
                <Form extraClassname={cls.box__portal__form}>
                    <Input extraClass={cls.box__portal__form__input} placeholder={"Name"}/>
                    <Input extraClass={cls.box__portal__form__input} placeholder={"Region"}/>
                    <Input extraClass={cls.box__portal__form__input} placeholder={"Phone"}/>
                    <Input extraClass={cls.box__portal__form__input} placeholder={"Arizalar soni"}/>
                    <Button extraClass={cls.box__portal__form__btn}>Add</Button>
                </Form>
            </Modal>
        </div>
    );
};

