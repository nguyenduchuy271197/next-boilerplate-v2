import { FC } from 'react'

type Props = {
  name: string
  domId: string
  type?: string
  placeholder?: string
}

const FormRow: FC<Props> = ({ name, domId, type, placeholder }) => {
  return (
    <div className="mt-4">
      <label className="block" htmlFor={domId}>
        {name}
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          id={domId}
        />
      </label>
    </div>
  )
}

FormRow.defaultProps = {
  type: 'text',
  placeholder: '',
}

export default FormRow
