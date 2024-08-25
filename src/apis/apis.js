import axios from 'axios'

class Api{
    // Post
	async post_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("POST Url: ")
        console.log(endpoint)

        const config = {
            method: 'post',
            url: endpoint,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    async get_ (endpoint) {
        console.log("GET url: "+endpoint)

        const config = {
            method: 'get',
            url: `${endpoint}`,
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const response = await axios(config);

        return response
       
	}

    // Put
	async put_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("PUT Url: ")
        console.log(endpoint)

        const config = {
            method: 'put',
            url: endpoint,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    // delete
	async delete_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("PUT Url: ")
        console.log(endpoint)

        const config = {
            method: 'delete',
            url: endpoint,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    // delete
	async delete2_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("PUT Url: ")
        console.log(endpoint)

        const config = {
            method: 'delete',
            url: endpoint,
            // data: formData,
            // data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    // Post 2. Using query params instead of data body
	async post2_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("POST Url: ")
        console.log(endpoint)

        const config = {
            method: 'post',
            url: endpoint,
            // data: formData,
            // data: params,
            // timeout: 500000,
            params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    async downloadFile(params, endpoint){
        try {

            const config = {
                method: 'post',
                url: endpoint,
                // data: formData,
                data: params,
                responseType: 'blob',
                // timeout: 500000,
                // params: params,
                // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
                headers: {
                    // "Access-Control-Allow-Origin":"*",
                    // "AccessCode": merchantName,
                    // "sourceSystem": merchantName,
                    // 'crossDomain': true,
                    // "withCredentials": true,
                    // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                    // "Authorization": "Bearer "+sessionStorage.getItem("token")
                }
            }
    
            const res = await axios(config);
    
            // Create a URL for the file and trigger a download
            let url = window.URL.createObjectURL(new Blob([res.data]));

            console.log(res.headers)

            const contentDisposition = res.headers['content-disposition'];

            let filename = 'downloaded-file.pdf';

            console.log("Is there disposition?? "+contentDisposition)

            if (contentDisposition) {
                console.log("disposition exists")
                const matches = contentDisposition.match(/filename="(.+)"/);
                if (matches.length === 2) {
                    console.log("disposition exists 2")
                    filename = matches[1];
                }
            }

            console.log("File name is ")
            console.log(filename)

            if(res.data.type == "application/pdf"){
                console.log("PDF DOC")
                url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }));
                window.open(url);
            } else if (res.data.type.startsWith('image/')){
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename); // Specify the filename you want to download
                document.body.appendChild(link);
                link.click();

                link.parentNode.removeChild(link);
            } else if (res.data.type === 'application/msword' || res.data.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'){
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename); // Specify the filename you want to download
                document.body.appendChild(link);
                link.click();

                link.parentNode.removeChild(link);
            } else {
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename); // Specify the filename you want to download
                document.body.appendChild(link);
                link.click();

                link.parentNode.removeChild(link);
            }
    
            setTimeout(() => window.URL.revokeObjectURL(url), 1000);
            // Clean up and remove the link

            return res
        } catch (error) {
            console.error('Error downloading the file', error);
        }

        return false
    };
}

export default Api