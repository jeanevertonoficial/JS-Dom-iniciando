export const removedataRepeitas = (datas) => {

    const dataUnicas = []
    datas.forEach((data => {
        if(dataUnicas.indexOf(data.dataFormatada) == -1){
            dataUnicas.push(data.dataFormatada)
        }
    }))
    return dataUnicas;
}
// função que ordena as datas
export const ordenaDatas = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, "DD/MM/YYYY").format('YYYYMMDD')
        const segundaData = moment(b, "DD/MM/YYYY").format('YYYYMMDD')
        
        return primeiraData - segundaData
    })
}