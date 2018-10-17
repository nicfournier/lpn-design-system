<template>
    <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
        <mu-card-header title="Myron Avatar" sub-title="sub title">
            <mu-icon value="home"></mu-icon>
        </mu-card-header>
        <mu-card-text>
            <slot></slot>
        </mu-card-text>
        <mu-card-actions>
            <mu-checkbox disabled :id="id" :input-value="true" label="disabled"></mu-checkbox>
        </mu-card-actions>
    </mu-card>
</template>

<script>
	export default {
		name: 'activity-card',
		props: {
			id: {
				type: String,
				default: 'HST2125-S01-A01'
			}
		}
	}
</script>

<style>
.card-header {
    padding: 0;
}
.card-header .badge-icon {
    border-radius: 0.25rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: 100%;
    display: inline-block;
    margin: 0;
    font-weight: 300;
    text-align: left;
    vertical-align: middle;
    /* touch-action: manipulation; */
    cursor: inherit;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    /* padding: 6px 12px; */
    font-size: 14px;
    line-height: 1.644;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding: 0 6px 0 6px;
    padding: 0 0.375rem 0 0.375rem;
}
.card-footer{
    padding: 0 0.375rem 0 0.375rem;
}
.card-body + .carousel {
    padding: 0;
}
</style>

<docs>
```jsx
<ActivityCard></ActivityCard>
```
</docs>