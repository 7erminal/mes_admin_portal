import { Dispatch, SetStateAction } from "react"

export type ApplicationContextProps = {
    showSideNav: ()=>void
    getUsers: ()=>void
    user: User | undefined | null
    userBusiness: Array<UserBusiness> | undefined | null
    username: string
    password: string
    loading: boolean
    successMessage: string
    errorMessage: string
    showSuccessMessage: boolean
    showErrorMessage: boolean
    login: (e: React.FormEvent<HTMLFormElement>)=>Promise<boolean>
    setUsername: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    setSuccessMessage: Dispatch<SetStateAction<string>>
    setErrorMessage: Dispatch<SetStateAction<string>>
    setShowSuccessMessage: Dispatch<SetStateAction<boolean>>
    setShowErrorMessage: Dispatch<SetStateAction<boolean>>
    setLoading: Dispatch<SetStateAction<boolean>>
    fullname: string
    email: string
    gender: string
    dob: string
    phoneNumber: string
    setFullname: Dispatch<SetStateAction<string>>
    setEmail: Dispatch<SetStateAction<string>>
    setGender: Dispatch<SetStateAction<string>>
    setDob: Dispatch<SetStateAction<string>>
    setPhoneNumber: Dispatch<SetStateAction<string>>
    registerUser: (e: React.FormEvent<HTMLFormElement>)=>Promise<boolean>
}

export type User = {
    user_id: number
    username: string
    user_type: number
    phone_number: string
    gender: string
    full_name: string
    email: string
    dob: string
    address: string
    is_verified: number
    active: number
    date_created: string
    date_modified: string
    id_number: string
    id_type: string
    marital_status: string
}

export type UserBusiness = {
    active: number
    alternatePhoneNumber: string
    businessDetailId: number
    businessRegistrationNumber: string
    companyName: string
    created_at: string
    natureOfBusiness: string
    postalAddress: string
    streetAddress: string
    updated_at: string
    created_by: User
    userIdFile: string
}

export type DirectorIDs = {
    businessDetailId: number
    directorIds: string
    directorIdsId: number
}