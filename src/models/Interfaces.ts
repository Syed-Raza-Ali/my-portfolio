//Interface for user items

export interface UserItems {
    name: string,
    heading: string,
    about: string,
    skills: Array<string>
}

// Interface for Nav Items

interface headerItem {
    label: string,
    page: string
}

export interface NavItems {
    home: headerItem,
    about: headerItem,
    projects: headerItem
}

// interface for projects 

export interface Projects {
    gmail: object,
    flipkart: object,
    google: object,
    indeed: object
}