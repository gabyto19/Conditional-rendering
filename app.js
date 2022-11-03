Vue.createApp({
  data() {
    return {
        enteredValue:'',
        listValues:[],
        switcher: true,
        butName:'Hide'
    };
  },
  methods:{
    addValue()
    {
        this.listValues.push(this.enteredValue);
    },
    toggle()
    {
        this.switcher = !this.switcher;
        if(this.switcher == true)
        {
            this.butName = "Hide";
        }
        else{
            this.butName = "Show list";
        }
    }
  }
}).mount("#assignment");
