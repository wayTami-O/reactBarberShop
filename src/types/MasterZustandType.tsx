import MasterSmall from './MasterSmall';

export default interface MasterZus {
    masterName: string,
    masterId: string,
    setMaster: (newMaster: MasterSmall) => void
}