<template>
<div>
  <b-button size="sm" v-b-modal.modal-create>{{$t('training.createButtonText')}} </b-button>

    <!-- 
        name: 'Glazig 2019', 
        competition: { 
            name: 'Glazig 2019', 
            distance: "28.0", 
            date: '2021-02-03', 
            location: 'Noyal Chatillon Sur Seiche' }, 
        nombre de semaine pour la prépa        
        -->
   <b-modal id="modal-create" v-bind:title="this.$t('training.modalCreateTitle')" 
        size="xl" ok-title="Done" cancel-title="Back"  >
        <div>
            <b-form @submit="onSubmit">

                <b-form-group id="input-name" v-bind:label="this.$t('session.formLabelName')"  label-for="input-name" >
                    <b-form-input id="input-name" v-model="form.name" placeholder="" type="text" maxlength="50" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-date" v-bind:label="this.$t('session.formLabelDate')" label-for="input-date" >
                    <b-form-input id="input-date" v-model="form.competition.date" type="date" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-compet-name" v-bind:label="this.$t('training.formLabelCompetitionName')"  label-for="input-compet-name" >
                    <b-form-input id="input-compet-name" v-model="form.competition.name" placeholder="" type="text" maxlength="50" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-distance" v-bind:label="this.$t('session.formLabelDistance')"  v-bind:description="this.$t('session.formDescriptionDistance') " label-for="input-distance" >
                    <b-form-input id="input-distance" v-model="form.competition.distance" placeholder="12" type="text" pattern="^[0-9]+[.][0-9]*" required></b-form-input>
                </b-form-group>

                <b-form-group id="input-compet-location" v-bind:label="this.$t('training.formLabelCompetitionLocation')"  label-for="input-compet-location" >
                    <b-form-input id="input-compet-location" v-model="form.competition.location" placeholder="" type="text" maxlength="250" ></b-form-input>
                </b-form-group>


                <b-button type="submit" variant="primary">{{$t('session.formSubmitButton')}}</b-button>
                              
            </b-form>
        </div>
            <template v-slot:modal-footer="">
                    {{$t('training.editModalFooterText')}}
            </template>
  </b-modal> 

</div>     
</template>

<script>
export default {
    data() {
      return {
        form: {
            name : '',
            competition : {
                date : '',
                name : '',
                distance : '',
                location : ''
            }
        }
      }
    },
    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            this.$store.dispatch('plans/createPlan', this.form);
            this.$bvModal.hide('modal-create')
        }
    }
}
</script>

<style>

</style>