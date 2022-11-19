module.exports = {
	branches: [
		'main',
		{ name: 'beta', prerelease: true },
		{ name: 'alpha', prerelease: true },
	],
	plugins: [
		[
			'@semantic-release/commit-analyzer',
			{
				preset: 'angular',
				releaseRules: [
					{
						type: 'refactor',
						release: 'patch',
					},
					{
						type: 'style',
						release: 'patch',
					},
				],
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
				},
			},
		],
		'@semantic-release/gitlab',
		[
			'@semantic-release/release-notes-generator',
			{
				parserOpts: {
					noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
				},
				preset: 'conventionalcommits',
				presetConfig: {
					types: [
						{
							type: 'ci',
							section: 'Continuous Integration',
							hidden: false,
						},
						{
							type: 'docs',
							section: 'Documentation',
							hidden: false,
						},
						{
							type: 'feat',
							section: 'Features',
							hidden: false,
						},
						{
							type: 'fix',
							section: 'Bug Fixes',
							hidden: false,
						},
						{
							type: 'perf',
							section: 'Performance Improvements',
							hidden: false,
						},
						{
							type: 'refactor',
							section: 'Code Refactoring',
							hidden: false,
						},
						{
							type: 'style',
							section: 'Styles',
							hidden: false,
						},
						{
							type: 'test',
							section: 'Tests',
							hidden: false,
						},
					],
				},
				writerOpts: {
					commitsSort: ['subject', 'scope'],
				},
			},
		],
		'@semantic-release/changelog',
		'@semantic-release/npm',
		'@semantic-release/git',
	],
};
