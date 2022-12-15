import INotifyProviderDTO from "./dtos/INotifyProviderDTO";

interface INotifyProvider {
    notify(data: INotifyProviderDTO): Promise<void>;
}

export { INotifyProvider };