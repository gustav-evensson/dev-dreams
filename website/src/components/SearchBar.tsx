
import Image from 'next/image'

type Props = {
    icon: any,
    onChange: (value: string) => void,
}

export default function SearchBar({ icon, onChange }: Props) {

    return (
        <div className="cursor-pointer flex border border-border rounded-xl p-3 min-w-[200px] max-w-xs items-center gap-3 relative">
            <Image src={icon} width={20} height={20} alt="dropdown icon"/>
            <input onChange={onChange(e.target.value)} type="text" name="" id="" />
        </div>
    )
}