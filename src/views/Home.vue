<template>
	<v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Tiles</h3>
            <div></div>
          </div>
        </v-card-title>
        <v-card-text>
        	<v-text-field label="Width" v-model="width"></v-text-field>
	        <v-text-field label="Height" v-model="height"></v-text-field>
        </v-card-text>
        <v-card-actions >
          <v-btn color="success" class="text-center mx-auto" @click="pushToStage">Success</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>
<script>
	export default {
		name : 'Home',
		data : function() {
			return {
				width : 10,
				height: 10
			}
		},
		methods : {
			validate : function() {
				if(this.width > 0 && this.height > 0) {
					return true;
				}
				return false;
			},
			pushToStage : function() {
				if(this.validate()) {
					this.$router.push({ 
						name : 'stage', 
						params: { 
							size: {
								width: parseInt(this.width),
								height: parseInt(this.height)
							} 
						}
					});
				}
			}
		}
	}
</script>