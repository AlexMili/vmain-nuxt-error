import { getCurrentInstance } from "vue";


export const getVuetifyDisplay = () => {
    const vueInstance = getCurrentInstance();
    var vuetify = {
        display: {
            smAndUp: true,
            smAndDown: false,
            mobile: false,
            xs: false,
        }
    };

    if (vueInstance != null && vueInstance.proxy != null && vueInstance.proxy.$vuetify != null) {
        vuetify = vueInstance.proxy.$vuetify;
    }

    return vuetify
};


export const requestAPI = async function(url: string, ssr: boolean = true) {
    // Inspiration:
    // https://github.com/Youxiaaa/Nuxt3-Template/blob/main/api/request.ts#L27
    return await new Promise<any>((resolve: any, reject: any) => {
        $fetch(url, {
            server: ssr,
            headers: {
                "Authorization": "Bearer c6eba7576ec6d2eee4b24e63c8dff9ec18cd513c1d8cd31977f099119bf86b8f"
            },
            onResponseError({ error }) { reject(error); },
            onResponse({ response }) {
                const { status, _data } = response;
                resolve(_data);
            }
        });
    });
};

export const requestAPI2: any = async function(url: string, server: boolean = true) {
    // Inspiration:
    // https://github.com/Youxiaaa/Nuxt3-Template/blob/main/api/request.ts#L27
    const { data } = useFetch(url, {
        server: server,
        headers: {
            "Authorization": "Bearer c6eba7576ec6d2eee4b24e63c8dff9ec18cd513c1d8cd31977f099119bf86b8f"
        },
    });

    return data
};

export const openInNewTab = (url: string) => {
    let newTab = window.open(url, "_blank");
    if (newTab != null) {
        newTab.focus();
    }
};

export const scrollTo = (loc: string) => {
    document.getElementsByName(loc)[0].scrollIntoView();
};
