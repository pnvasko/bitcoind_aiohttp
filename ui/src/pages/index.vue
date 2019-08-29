<template>
  <div class="flex flex-center" style="padding-top: 150px">
    <div class="q-pa-md q-gutter-md">
      <q-card class="login">
        <q-card-section>
          <div class="form-group top-right-control" >
            <q-icon v-if="!isConnected" class="disconnected" name="error" style="font-size: 22px"/>
            <q-icon v-if="isConnected" class="connected" name="swap_vertical_circle" style="font-size: 22px"/>
          </div>
        </q-card-section>
        <q-card-section v-if="!showMsgLog">
          <q-splitter
            v-model="splitterModel"
            :limits="[50, 50]"
            style="height: 500px">
            <template v-slot:before>
              <div class="q-pa-md">
                <div class="text-h4 q-mb-md">Wallet info</div>
                <div class="q-my-md">
                  <pre>{{ wallet }}</pre>
                </div>
              </div>
            </template>
            <template v-slot:after>
              <div class="q-pa-md">
                <div class="text-h4 q-mb-md">Network stats</div>
                <div class="q-my-md">{{network}}</div>
              </div>
            </template>
          </q-splitter>
        </q-card-section>
        <q-card-section v-if="showMsgLog">
          <q-virtual-scroll style="max-height: 500px;" :items="messages" separator>
            <template v-slot="{ item, index }">
              <q-item :key="index" dense >
                <q-item-section>
                  <q-item-label>
                    {{ item.date }} - {{ item.message }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-virtual-scroll>
        </q-card-section>
        <q-card-actions>
          <q-btn flat @click="showlog">Show log</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      showMsgLog: false,
      splitterModel: 50
    }
  },
  computed: {
    isConnected () {
      return this.$store.getters['Socket/getConnectedStatus']
    },
    wallet () {
      return this.$store.getters['Socket/getWallet']
    },
    network () {
      return this.$store.getters['Socket/getNetwork']
    },
    messages () {
      return this.$store.getters['Socket/getMessages']
    }
  },
  methods: {
    showlog () {
      console.log('showlog.')
      this.showMsgLog = !this.showMsgLog
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  width: 830px
  padding: 20px
  .top-right-control
    position absolute
    top -10px
    right 0px
    .q-icon .q-btn .q-icon, .q-btn .q-spinner
      font-size: 16px!important
.connected
  color: #00e676
.disconnected
  color: red
</style>
