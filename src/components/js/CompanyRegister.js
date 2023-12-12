import { defineComponent } from 'vue'
import { ref } from 'vue';

export default defineComponent({
    setup() {
        const formData = ref({
            companyName: ''
        });
        
        const submitted2 = async () => {
            if (formData.value.companyName != ''){
                const response = await fetch('http://localhost:8082/ad/addCompany', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData.value),
                });

                if (response.ok) {
                    console.log('submitted');
                } 
            }
        };
    
        return {
            formData,
            submitted2,
        };
    },
});