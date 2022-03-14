<template>

    <section> 
        <div  class="row justify-content-center">
            <div class="col-8 col-md-6 col-lg-5">

             <form @submit.prevent="createAssets">


                 <div class="form-group">
                     <label>Type:</label>
                     <StringInput v-model="form.type" />
                
                 </div> 

                <div class="form-group">
                    <label>Price:</label>
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
import apiRequest from '../utility/apiRequest'
import StringInput from '@/components/form/StringInput.vue';
export default {
    components:{
        StringInput,
    },
    data(){
        return {
            form: {
                type:'Author',
                price: 'Sheno cmimin e produktit',
                 },
            error: null,
        };
    },
    methods: {


       async createAssets(){
        const newAssets =    await  apiRequest.createAssets({...this.form});
        this.$router.push({name: 'ViewAssets' , params: { id: newAssets._id }});

        },
    },
};
</script>