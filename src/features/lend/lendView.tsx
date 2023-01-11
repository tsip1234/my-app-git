import Category from '../../models/category'
import Lend from '../../models/lend'
import Tool from '../../models/tool'
import User from '../../models/user'
import { getLends } from './lendSlice'
import { LendComponent } from './lendComponent'
//tmp
const categories: Category[] = [
    { id: 1, name: 'tools' },
    { id: 2, name: 'not-tools' }
]
const tools: Tool[] = [
    {
        id: 1,
        image: 'https://th.bing.com/th/id/OIP.vnQBDUUgkx2xrC-ohhUhVwHaHa?pid=ImgDet&rs=1',
        manufacturingCompany: 'vizel',
        description: 'hammer',
        numOfTool: 5,
        category: categories[0]
    },
    {
        id: 2,
        image: 'https://extremehowto.com/wp-content/uploads/2011/11/tools.jpg',
        manufacturingCompany: 'marvel',
        description: 'thor',
        numOfTool: 5,
        category: categories[1]
    },
    {
        id: 3,
        image: 'https://extremehowto.com/wp-content/uploads/2011/11/tools.jpg',
        manufacturingCompany: 'marvel',
        description: 'thor',
        numOfTool: 5,
        category: categories[1]
    }
]
const users: User[] = [
    { id: 1, tz: '', creditCard: 1, firstName: '', lastName: '', mail: '', password: '', phoneNumber: '', status: 0 }
]
const lends: Lend[] = [
    {
        id: 1,
        lendingDate: new Date(),
        returnDate: null,
        tool: tools[0],
        user: users[0]
    }
]
const curUser = users[0]
//end tmp
export const LendView = () => {

    return (
        <>
            {lends.filter(lend => lend.user.id === curUser.id).map(lend => {
                return <LendComponent lend={lend} />

            })}
        </>
    )
}