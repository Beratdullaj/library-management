<template>

    <section> 
        <div  class="row justify-content-center">
            <div class="col-8 col-md-6 col-lg-5">

             <form @submit.prevent="createMenaxhimiLibrarise">
                <div class="form-group">
                    <label >Lloji i librit:</label>
                    <Dropdown
                    v-model="form.type"
                    :options="[
                        { label: 'Roman', value: 'Roman' },
                        { label: 'Book', value: 'Book' }                ]"
                />
                </div>


                 <div class="form-group">
                     <label>Autori:</label>
                     <StringInput v-model="form.author" />
                
                 </div> 

                <div class="form-group">
                    <label>Titulli:</label>
                    <StringInput v-model="form.title" />
                
                 </div>

                <div class="form-group">
                    <label>Nr. i faqeve</label>
                    <input class="form-control" type="number" v-model="form.page" />
                
                </div>

                <div class="form-group">
                    <label>Qmimi i librit:</label>
                    <input class="form-control" type="number" v-model="form.price" />
                
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
import apiRequest from '../utility/apiRequest';
import Dropdown from '@/components/form/Dropdown.vue';
import StringInput from '@/components/form/StringInput.vue';
export default {
    components:{
        Dropdown,
        StringInput,
    },
    data(){
        return {
            form: {
                type: 'Book',
                author:'Filan Fisteku',
                title: 'Lulet e veres',
                page: 0,
                price: 0,
            },
            error: null,
        };
    },
    methods: {


       async createMenaxhimiLibrarise(){
        const newMenaxhimiLibrarise =    await  apiRequest.createMenaxhimiLibrarise({...this.form});
        this.$router.push({name: 'View' , params: { id: newMenaxhimiLibrarise._id }});

        },
    },
};
</script>