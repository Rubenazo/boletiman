<template>
	<div>
		<div class="d-flex ticktr-row" v-for="(row, rowIndex) in rows" :key="rowIndex">
			<div class="ticktr-column" v-for="(column, columnIndex) in columns" :key="columnIndex">
				<v-stage-element 
					:element="getElement(`${rowIndex}-${columnIndex}`)"
					:index="`${rowIndex}-${columnIndex}`"
					:selected-element="selectedElement"
					@setelement="set"
					@clearelement="clear">
				</v-stage-element>
			</div>
		</div>
		<div class="footer">
			<v-btn class="d-block mx-auto" color="warning" @click="reset">
				Reset
			</v-btn>
		</div>
		<v-speed-dial
		v-model="fab"
		:absolute="true"
		:top="false"
		:left="false"
		:bottom="true"
		:right="true"
		:direction="'top'"
		:transition="'scale-transition'">
			<v-btn
				slot="activator"
				v-model="fab"
				color="blue darken-2"
				dark
				fab>
				<v-icon>account_circle</v-icon>
				<v-icon>close</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				small
				color="red"
				@click="$root.$emit('optclear')">
				<v-icon>block</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				small
				color="green"
				@click="$root.$emit('optchoosed', { id : 3 })">
				<v-icon>line_weight</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				small
				color="indigo"
				@click="$root.$emit('optchoosed', { id : 2 })">
				<v-icon>fullscreen</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				small
				color="blue"
				@click="$root.$emit('optchoosed', { id : 1 })">
				<v-icon>event_seat</v-icon>
			</v-btn>
		</v-speed-dial>
    </div>
</template>
<script>
	const StageElementComponent = () => import('./StageElementComponent')
	export default {
		props : {
			rows : {
				type : Number,
				required: true
			},
			columns : {
				type : Number,
				required : true
			},
			elements : {
				type : Array,
				required : true
			},
			selectedElement : {
				type : Object,
				required : true
			}
		},
		data : function() {
			return {
				fab : false
			}
		},
		methods : {
			hasElement : function(index) {
				return this.filterElement(index).length > 0;
			},
			filterElement : function(index) {
				return this.elements.filter((element) => { return element.index == index });
			},
			getElement : function(index) {
				return this.hasElement(index) ? this.filterElement(index)[0] : {};
			},
			set : function($event) {
				this.$emit('set', {
					index : $event.index
				});
			},
			clear : function($event) {
				this.$emit('clear', {
					index : $event.index
				})
			},
			reset : function() {
				this.$emit('reset');
			}
		},
		components : {
			'v-stage-element' : StageElementComponent
		}
	}
</script>
<style lang="scss">
	.ticktr-column {
		height: 36px;
		max-width: 36px;
		border: 1px solid #ddd;
		&:hover {
			border: 1px solid #333;
		}
	}
</style>