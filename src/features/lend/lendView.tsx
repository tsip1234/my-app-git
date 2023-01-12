import Category from '../../models/category'
import Lend from '../../models/lend'
import Tool from '../../models/tool'
import User from '../../models/user'
import { getLends } from './lendSlice'
import { LendComponent } from './lendComponent'
import { useEffect } from 'react'
import { AppDispatch, RootState } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux'




export const LendView = () => {
    const dispatch: AppDispatch = useDispatch();
    useEffect(() => {
        dispatch(getLends());
    }, [])
    const lends = useSelector((state: RootState) => state.lendSlice.lends)
    const curUserLends = lends.filter(lend => lend.user.tz === localStorage.getItem('USER'))
    
    return (
        <>
            <p>Active Lends</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {curUserLends.filter(lend => lend.returnDate == null).map(lend => {
                    return <LendComponent key={lend.id} lend={lend} />
                })}
            </div>
            <p>Lend History</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                {curUserLends.filter(lend => lend.returnDate != null).map(lend => {
                    return <LendComponent key={lend.id} lend={lend} />
                })}
            </div>
        </>
    )
}