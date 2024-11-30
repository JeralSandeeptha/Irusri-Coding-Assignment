import { Dispatch, SetStateAction } from "react"

export type RegisterUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setIsError: Dispatch<SetStateAction<boolean>>
    setIsSuccess: Dispatch<SetStateAction<boolean>>
    values: any
}