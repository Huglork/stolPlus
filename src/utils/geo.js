
const defaultCenter = {
    lat: 42.874260,
    lng: 74.620142
};

export const getBrowserLocation = () => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((pos) => {
                    const {latitude: lat, longitude: lng} = pos.coords;
                    resolve({lat, lng});
                },
                () => {
                    reject(defaultCenter);
                },
            );
        } else{
            reject(defaultCenter);
        }
    })
}