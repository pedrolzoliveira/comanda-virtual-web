export const Button = (props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  return <button {...props} className={`rounded bg-blue-500 px-3 py-2 text-white ${props.className ?? ''}`}/>
}
