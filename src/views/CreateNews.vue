<template>

    <section> 
        <div  class="row justify-content-center">
            <div class="col-8 col-md-6 col-lg-5">

             <form @submit.prevent="createNews">


                 <div class="form-group">
                     <label>Autori:</label>
                     <StringInput v-model="form.author" />
                
                 </div> 

                <div class="form-group">
                    <label>Titulli:</label>
                    <StringInput v-model="form.title" />
                
                 </div>

                <div class="form-group">
                    <label>Trupi i lajmit:</label>
                    <StringInput v-model="form.description" />
                
                 </div>

                <div class="form-group">
                  <button class="btn btn-primary" type="submit"> Publish </button>
                </div>

            
        </form>


            </div>


        </div>
    </section>
    
</template>

<script>
import apiRequest from '../utility/apiRequest'
import StringInput from '@/components/form/StringInput.vue';
export default {
    components:{
        StringInput,
    },
    data(){
        return {
            form: {
                author:'Author',
                title: 'Titulli i lajmit!',
                description: 'Shkruaj per lajmin',
            },
            error: null,
        };
    },
    methods: {


       async createNews(){
        const newNews =    await  apiRequest.createNews({...this.form});
        this.$router.push({name: 'ViewNews' , params: { id: newNews._id }});

        },
    },
};
</script>