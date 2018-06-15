class Service {
    getDataFromUrl(url, getdata) {
        var self = this;
        fetch(url).then((response) => {
            if (response.status !== 200) {
                console.warn("Something goes wrong: " + response.status);
            }
            else {
                var contentType = response.headers.get("Content-Type") || '';
                if (contentType.includes("application/json")) {
                    return response.json();
                }
                else {
                    console.warn("Invalid JSON");
                }
            }
        }).then((json) => {
            return getdata !== undefined ? getdata.call(self.App, json) : json;
        })
    };
}

export default Service;