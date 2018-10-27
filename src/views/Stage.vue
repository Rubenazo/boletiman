<template>
	<v-stage id="ticktr" class="section center" 
		:rows="height" 
		:columns="width" 
		:elements="elements"
		:selected-element="selectedElement"
		@set="set"
		@clear="clear"
		@reset="reset">
			
	</v-stage>

</template>
<script>
	import StageComponent from '../components/StageComponent'
	export default {
		props : {
			selectedElement : {
				type : Object,
				required : true
			}
		},
		name : 'Stage',
		data : function() {
			return {
				width: 0,
				height: 0,
			    elements: []
			}
		},
		mounted : function() {
			this.checkParams();
		},
		methods : {
			checkParams : function() {
				let size = this.$route.params.size;
				if(size === undefined) {
					this.$router.replace({ name : 'home' });
					return;
				}
				if(size.width*size.height > 1000) {
					this.$router.replace({ name : 'home' });
					return;	
				}
				this.width  = size.width;
				this.height = size.height; 
			},
			checkEmptyElement : function(index) {
				return this.getFilteredElements(index).length > 0;
			},
			getFilteredElements : function(index) {
				return this.elements.filter((element) => element.index == index);
			},
			set : function($event) {
				if(this.checkEmptyElement($event.index)) {
					this.getFilteredElements($event.index)
					.map((el) => {
						el.type = this.selectedElement;
					})
				} else {
					this.elements.push({
						index : $event.index,
						type  : this.selectedElement
					});
				}
			},
			clear : function($event) {
				this.elements = this.elements.filter((el) => {
					return el.index != $event.index;
				});
			},
			reset : function() {
				this.$router.replace({ name : 'home' });
				return;
			}
		},
		components : {
			'v-stage' : StageComponent
		}
	}
</script>