import {http} from './config'
export default{
    homeLoadData:() => {
        return http.get('Images');
    }
}