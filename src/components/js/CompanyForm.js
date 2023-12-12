import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const companyNames = ref([]);
    const categories = ref([]);
    const selectedCompany = ref('');
    const selectedCategories = ref([])
    // const show = ref(false);
    const formData = ref({
      companyName: '',
      imageLink: '',
      category: '',
      externalLink: '',
      description:''
    });

    const fetchCompanyNames = async () => {
        
      try {
        const response = await fetch('http://localhost:8082/ad/getAllCompanies');
        const data = await response.json();
        console.log(data);

        companyNames.value = data;
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCategories = async() => {
        try{
            const res = await fetch('http://localhost:8082/ad/categories');
            const data2 = await res.json();
            categories.value = data2;
            // show.value = true;
            console.log("data 2",categories.value)
        }
        catch{
            console.log("error")
        }
    }

    const submitted = async () => {
    if (formData.value.description && formData.value.imageLink && formData.value.externalLink !=''){
      try {
        formData.value.companyName = selectedCompany.value;
        formData.value.category = selectedCategories.value;
        console.log("selectedCategories",formData.value)

        const response = await fetch('http://localhost:8082/ad/addAd', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData.value),
        });

        if (response.ok) {
          console.log('submitted');
        }
      } catch (error) {
        console.error('error');
      }}
    };

    fetchCompanyNames();
    fetchCategories();

    return {
      companyNames,
      selectedCompany,
      formData,
      submitted,
      selectedCategories,
      categories,
    //   show
    };
  },
});