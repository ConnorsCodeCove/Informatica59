export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "How are you different from your competitors?",
                answer: "We stand out by offering personalized, proactive IT solutions tailored specifically to your business. Our focus is on building long-term partnerships, providing responsive support, and ensuring your technology aligns with your growth goals. We don’t just fix problems—we prevent them, helping you stay ahead of IT challenges."
            },
            {
                question: "What industries do you serve?",
                answer: "We serve clients across various industries, including medical aesthetics, dermatology, environmental abatement, and consulting, among others."
            },
            {
                question: "How much do you charge?",
                answer: "This depends on if we're discussing project work or managed services. For project work, our proposals are based on time and materials. For managed services, we implement a Monthly Recurring Revenue (MRR) model that provides flexibility in services we provide you at a predictable monthly rate."
            },
            {
                question: "Is there a monthly minimum charge?",
                answer: `
                    Yes. The minimum monthly charge starts at $500 per month for just starting businesses. For businesses with more than 10 employees, we calculate the monthly charges based on your business complexity and number of devices (or number of users, depending on preference) as a baseline requirement for us to properly maintain your IT. This monthly recurring charge covers consulting time or advice you may seek from us, so you will not have to be worried about being billed extra for time. For special projects, we will provide a separate estimate based on labor hours that would be spent. 
                `
            }
            ,
            {
                question: "Do you only work with large businesses?",
                answer: "No, we don’t have a strict minimum size or complexity requirement. That said, we’re best equipped to support businesses with up to 150 employees. We focus on working with clients who value a proactive IT approach and long-term partnerships. If that sounds like a fit, we’ll collaborate closely to help you meet your business goals."
            }
            ,
            {
                question: "Is a signed contract required?",
                answer: "We don't ask for a contract for every customer. We've designed our process to be hassle-free and collaborative. This does not apply to situations where regulations require a contract, such as with a HIPAA covered entity. In this type of situation, a business associate agreement is required, but the requirement of a written commercial contract is negotiable."
            }
        ]
    }
};
