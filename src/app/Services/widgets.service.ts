import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WidgetsService {
	public availableWidgets = [
		{
			id: 1,
			name: 'Campaigns',
			className: 'swell-campaigns',
			configuration: [
				{
					name: "swell-campaign-grid-layout",
					pretty: "Grid Layout",
					selectionType: 'select',
					options: [
						'2',
						'3',
						'4',
					]
				},
				{
					name: "swell-last-campaign-layout",
					pretty: "Last Campaign Layout",
					selectionType: 'select',
					options: [
						'normal',
						'streched',
					]
				},
				{
					name: "swell-creative-layout",
					pretty: "Creative Layout",
					selectionType: 'select',
					options: [
						'icon',
						'background_image',
					]
				},
				{
					name: "swell-login-prompt",
					pretty: "Show Login Prompt",
					selectionType: 'select',
					options: [
						'true',
						'false',
					]
				},
				{
					name: "swell-login-destination",
					pretty: "Login Destination",
					selectionType: 'text',
				},
				{
					name: "swell-signup-destination",
					pretty: "Signup Destination",
					selectionType: 'text',
				},
			]
		},
		{
			id: 2,
			name: 'Redemptions',
			className: 'swell-redemptions',
			configuration: [
			{
				name: "swell-redemption-type",
				pretty: "Redemption Type",
				selectionType: 'select',
				options: [
					'product',
					'fixed',
					'cart'
				]
			},
			]
		},
		{
			id: 3,
			name: 'Referral',
			className: 'swell-referral',
			configuration: [
				{
					name: "swell-referral-form-layout",
					pretty: "Referral Form Layout",
					selectionType: 'select',
					options: [
						'single_row',
						'double_row'
					]
				},
				{
					name: "swell-referral-pre-header",
					pretty: "Pre Header Text",
					selectionType: 'text',
				},
				{
					name: "swell-referral-title",
					pretty: "Title",
					selectionType: 'text',
				},
				{
					name: "swell-referral-desc",
					pretty: "Description",
					selectionType: 'text',
				},
				{
					name: "swell-referral-new-user-submit",
					pretty: "New User Submit Button Text",
					selectionType: 'text',
				},
				{
					name: "swell-referral-new-userplaceholder",
					pretty: "New User Placeholder",
					selectionType: 'text',
				},
				{
					name: "swell-referral-new-usertitle",
					pretty: "New User Title",
					selectionType: 'text',
				},
				{
					name: "swell-referral-exist-user-submit",
					pretty: "Existing User Submit",
					selectionType: 'text',
				},
				{
					name: "swell-referral-exist-userplaceholder",
					pretty: "Existing User Placeholder",
					selectionType: 'text',
				},
				{
					name: "swell-referral-exist-usertitle",
					pretty: "Existing User Title",
					selectionType: 'text',
				},
				{
					name: "swell-referral-shre-links-title",
					pretty: "Share Links Title",
					selectionType: 'text',
				},
				{
					name: "swell-referral-share-links",
					pretty: "Share Links",
					selectionType: 'checkbox',
					options: [
						{
							name: 'facebook',
							value: "Facebook"
						},
						{
							name: 'twitter',
							value: "Twitter"
						},
						{
							name: 'sms',
							value: "SMS"
						},
						{
							name: 'message',
							value: "Messenger"
						},
						{
							name: 'copylink',
							value: "Copy Link"
						},
					]
				},
				{
					name: "swell-referral-popup-copy-link-text",
					pretty: "Popup Copy Link Text",
					selectionType: 'text',
				},
				{
					name: "swell-referral-popup-thank-title",
					pretty: "Popup Thank You Title",
					selectionType: 'text',
				},
				{
					name: "swell-referral-popup-thank-text",
					pretty: "Popup Thank You Text",
					selectionType: 'text',
				},
			]
		},
		{
			id: 4,
			name: 'VIP Tiers',
			className: 'swell-vip-tiers',
			configuration: [
				{
					name: "swell-vip-layout",
					pretty: "Table Layout",
					selectionType: 'select',
					options: [
						'table',
						'cards'
					]
				},
				{
					name: "swell-checked-icon",
					pretty: "Checked Icon (unicode or image url)",
					selectionType: 'text',
				},
				{
					name: "swell-current-status-text",
					pretty: "Current Status Text",
					selectionType: 'text',
				},
				{
					name: "swell-dummy-tier-required",
					pretty: "If dummy tier required",
					selectionType: 'select',
					options: [
						'true',
						'false'
					]
				},
				{
					name: "swell-dummy-tier-name",
					pretty: "Dummy Tier Name (if required)",
					selectionType: 'text',
				},
				{
					name: "swell-tier-condition",
					pretty: "Requirnments to move tiers",
					selectionType: 'select',
					options: [
						'swellrequiredAmountSpentCents',
						'swellrequiredPointsEarned',
						'swellrequiredPurchasesMade',
						'swellrequiredReferralsCompleted'
					]
				},
				{
					name: "swell-customer-currency",
					pretty: "Currency",
					selectionType: 'text',
				},
				{
					name: "swell-benefits-list",
					pretty: "Benefits List (rowName:item1,item2,item3;)",
					selectionType: 'text',
				},
			]
		},
		{
			id: 5,
			name: 'Referral History',
			className: 'swell-referral-history',
			configuration: [
				{
					name: "swell-referral-history-completed",
					pretty: "Completed Label",
					selectionType: 'text',
				},
				{
					name: "swell-referral-history-invited",
					pretty: "Invited Label",
					selectionType: 'text',
				},
			]
		},
	];
	constructor() { }
}
