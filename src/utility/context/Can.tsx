// @ts-nocheck 
// ** Imports createContext function
import { createContext } from 'react'

// ** Imports createContextualCan function
import { createContextualCan } from '@casl/react'

// ** Create Context
export const AbilityCtx = createContext(undefined)

// ** Init Can Context
export const Can = createContextualCan(AbilityCtx.Consumer)
