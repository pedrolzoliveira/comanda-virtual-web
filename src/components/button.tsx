type ButtonProps = {
  loading?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = (props: ButtonProps) => {
  if (props.loading) {
    return <div>Carrengandno</div>
  }
  return <button {...props} className={`rounded bg-blue-500 px-3 py-2 text-white ${props.className ?? ''}`}/>
}
