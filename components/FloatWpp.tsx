import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsApp (){
    return (
        <a
  href="https://api.whatsapp.com/send?phone=5513981339217"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg hover:bg-green-600 transition"
>
  <FaWhatsapp size={34} />
</a>
    )
}