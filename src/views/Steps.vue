<template>
  <div id="steps">    
    <h2>FACE RECOGNITION SERVICE</h2>
    
    <Steps :model="items" />
    <div class="step-content">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const items = ref([
      {
        label: 'Load video', 
        to: '/steps'
      },
      {
        label: 'Add information',
        to: '/steps/information'
      },
      {
        label: 'Confirmation',
        to: '/steps/confirmation'
      }
    ]);
    const formObject = ref({});

    const nextPage = (event) => {
      for (let field in event.formData) {
        formObject.value[field] = event.formData[field];
      }

      router.push(items.value[event.pageIndex + 1].to);
    };
    const prevPage = (event) => {
      router.push(items.value[event.pageIndex - 1].to);
    };
    const complete = () => {
    };

    return { items, formObject, nextPage, prevPage, complete }
  }
}
</script>

<style scoped >
#steps {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding-left: 5vw;
  padding-right: 5vw;
}

.step-content {
  border: 1px solid blue;
  margin-top: 5vh;

}
</style>