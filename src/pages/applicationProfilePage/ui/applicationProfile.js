import {
    ApplicationProfileHeader,
    ApplicationProfileInfo,
    ApplicationProfileInfoDocument, ApplicationProfileInfoEducation, ApplicationProfileUserDocument
} from "../../../entities/applicationProfile";
import cls from "./application.module.sass"

export const ApplicationProfile = () => {
    return (
        <div className={cls.application}>
            <ApplicationProfileHeader/>
            <ApplicationProfileInfo/>
            <ApplicationProfileInfoDocument/>
            <ApplicationProfileUserDocument/>
            <ApplicationProfileInfoEducation/>
        </div>
    );
};

