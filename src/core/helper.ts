export class GeneralHelper{
    public static dateFilename(filename:string, date:Date = new Date()){       
        let dateObj = (!date) ? new Date() : new Date(date)
        const year = dateObj.getFullYear();
        const month = `${dateObj.getMonth() + 1}`.padStart(2, '0');
        const day =`${dateObj.getDate()}`.padStart(2, '0');
        
        return `${filename}_${day}${month}${year}${dateObj.getHours()}${dateObj.getMinutes()}${dateObj.getSeconds()}`
    }
}