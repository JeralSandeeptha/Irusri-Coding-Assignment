import { Dispatch, SetStateAction } from "react"
import { NavigateFunction } from "react-router-dom"
import { Product } from "./models"

export type RegisterUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setIsError: Dispatch<SetStateAction<boolean>>
    setIsSuccess: Dispatch<SetStateAction<boolean>>
    values: any
}

export type LoginUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setIsError: Dispatch<SetStateAction<boolean>>
    setIsSuccess: Dispatch<SetStateAction<boolean>>
    values: any,
    navigate: NavigateFunction,
    handleLogIn: () => void,
    handleCreateCart: () => void,
}

export type GetAllProductsFunctionProps = {
    setProducts: Dispatch<SetStateAction<Product[]>>
}