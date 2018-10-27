<template>
	<div class="element d-flex flex-column justify-content-center"
		@click="set">
		<div v-if="Object.keys(element).length > 0">
			<i class="material-icons" :class="[`bg-${element.type.color}`]">{{ element.type.icon }}</i>
		</div>
	</div>
</template>
<script>
	export default {
		props : {
			element : {
				type : Object,
				required : true
			},
			index : {
				type : String,
				required : true
			},
			selectedElement : {
				type : Object,
				required : true
			}
		},
		methods : {
			set: function() {
				if(this.selectedElement.id == 0) {
					this.clear();
				} else {
					this.$emit('setelement', {
						index: this.index
					});
					
				}
			},
			clear : function() {
				this.$emit('clearelement', {
					index : this.index
				})
			}
		}
	}
</script>
<style scoped lang="scss">
	.element {
		width: 100%;
		height: 100%;
		cursor: pointer;
	}
</style>