import cls from "./dashboard.module.sass"

export const Dashboard = ({data}) => {

    const formatNumber = (number) => {
        return Number(number).toLocaleString();
    };
    const renderTable = () => {
        return data.map(item => (
            <div className={cls.box}>
                <h2>{item.title}</h2>
                <span>{item.span}</span>
                <div style={{color: item.color}} className={cls.div}>
                    {formatNumber(item.number)}
                </div>
            </div>
        ))
    }

    return (
        <div className={cls.dashboard}>
            <h1>Dashboard</h1>
            <div className={cls.wrapper}>
                {renderTable()}

            </div>
        </div>
    );
};

