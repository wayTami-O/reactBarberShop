export default interface MasterZus {
    masterName: string,
    masterId: string,
    setMaster: (newMaster: string, newMasterName: string) => void
}