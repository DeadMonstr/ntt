export const menuConfig = [
    {
        to: "dashboard",
        label: "Dashboard",
        icon: "fas fa-th"
    }, {
        to: "applications",
        label: "Arizalar",
        icon: "fas fa-book-open",
        isMultiLink: true,
        types: [
            {
                label: "Barcha arizalar",
                to: "all"
            },{
                label: "Yangi arizalar",
                to: "new"
            },{
                label: "Qabul qilinganlar",
                to: "accepted"
            },{
                label: "Rad etilganlar",
                to: "canceled"
            },{
                label: "Tahrirlashga qaytarilganlar",
                to: "returned"
            },{
                label: "Imtihonga chaqirilganlar",
                to: "examInvited"
            },{
                label: "Imtihonga kelganlar",
                to: "examCame"
            },{
                label: "Baholanganlar",
                to: "rated"
            },{
                label: "Shartnoma berilganlar",
                to: "contracted"
            },{
                label: "To'lov qilganlar",
                to: "paid"
            },{
                label: "Talabalikka tavsiya\n qilinganlar",
                to: "recommended"
            },
        ]
    }, {
        to: "courseApplications",
        label: "Kurs arizalari",
        icon: "far fa-file-alt"
    }, {
        to: "settings",
        label: "Sozlamalar",
        icon: "fas fa-cog"
    },
]
