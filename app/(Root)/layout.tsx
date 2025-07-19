import { ReactNode } from 'react'

const RootLayout = ({children} : {children: ReactNode}) => {
  return (
    <div>
      <h1>Root Layout</h1>
      {children}
    </div>
  )
}

export default RootLayout
