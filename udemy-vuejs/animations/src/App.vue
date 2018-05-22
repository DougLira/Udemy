<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr/>
        <select class="form-control" v-model="alertAnimation">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <hr>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        <br><br>

        <!-- Dynamic Transition Animation -->
        <!-- <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition> -->

        <!-- Multiple Transition Animation -->
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-info" v-if="show" key="info">This is some Info</div>
          <div class="alert alert-warning" v-else key="warning">This is some Warning</div>
        </transition>

        <!-- Simple Transition Animation -->
        <!-- <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition> -->

        <!-- Initialized Animation && Bind Transition to a External Lib by Properties -->
        <!-- <transition appear enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-info" v-show="show">This is some Info</div>
        </transition> -->
        <hr>
        <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
        <br>
        <br>
        <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
          <div class="jumbotron" v-if="load">
            <h1>VueJS is AWESOME!</h1>
            <p>I've already learnt a lot about VueJS.</p>
          </div>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert' ">Toggle Components</button>
        <br>
        <br>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br>
        <br>
        <ul class="list-group">
          <li class="list-group-item" v-for="(item, index) in items" @click="removeItem(index)" style="cursor: pointer">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from './DangerAlert.vue';
import SuccessAlert from './SuccessAlert.vue';

export default {
  data: function() {
    return {
      show: true,
      load: false,
      alertAnimation: 'fade',
      selectedComponent: 'app-success-alert',
      items: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    addItem() {
      const pos =  
      Math.floor(Math.random() * this.items.length);
      this.items.splice(pos, 0, this.items.length + 1);
    },
    removeItem(index){
      this.items.splice(index, 1);
    },
    beforeEnter(el) {
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');
      done(); // Needs to be called when using JS Hooks Transitions to determine the finish.
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },
    beforeLeave(el) {
      console.log('beforeLeave');
    },
    leave(el, done) {
      console.log('leave');
      done();
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    }
  },
  components: {
    'app-danger-alert': DangerAlert,
    'app-success-alert': SuccessAlert
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

/* .fade-leave {
} */

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
  transform: opacity 0.5s;
}

/* .slide-leave {
} */

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateX(-50px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
  }
}
</style>
