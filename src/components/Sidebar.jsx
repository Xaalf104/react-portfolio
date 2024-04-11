import { FaAddressCard, FaAddressBook } from 'react-icons/fa'
import { HiAcademicCap } from 'react-icons/hi'
import { MdOutlineWork } from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0  md:w-10 sm:w-8 flex flex-col bg-pink text-white shadow-lg">
      <SideBarIcon icon={<FaAddressCard size="35" />} text={'About Me'} />
      <SideBarIcon
        icon={<HiAcademicCap size="40" />}
        text={'Educational Background'}
      />
      <SideBarIcon icon={<MdOutlineWork size="40" />} text={'Works'} />
      <SideBarIcon icon={<FaAddressBook size="35" />} text={'Contact'} />
    </div>
  )
}

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
  <div className="sidebar-icon top-4 group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
)

export default Sidebar
