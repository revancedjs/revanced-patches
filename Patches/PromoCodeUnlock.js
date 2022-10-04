export default {
	name: 'promo-code-unlock',
	description: 'Unlocks premium for WarnWetter',
	fingerprint: {
		classDexNumber: 0,
		path: 'de/dwd/warnapp/model/PromoTokenVerification.smali',
		find: (instructions) =>
			instructions.findIndex(
				(ins) => ins.type === 'type' && ins.types[2] === 'isValid()Z'
			)
	},
	patch: (patch) => {
		patch.insertInstructions(1, [
			patch.instructions.Constant4Bit('v0', '0x1'),
			patch.instructions.Return('v0')
		]);

		patch.save();
	}
};
