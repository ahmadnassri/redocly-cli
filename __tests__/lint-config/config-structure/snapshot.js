// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint-config test with option: { dirName: 'config-structure', option: 'error' } 1`] = `

[1] .redocly.yaml:1:13 at #/licenseKey

Expected type \`string\` but got \`integer\`.

1 | licenseKey: 123 # Must be a string
  |             ^^^
2 |
3 | apis:

Error was generated by the configuration spec rule.


[2] .redocly.yaml:95:5 at #/sso/0

\`sso\` can be one of the following only: "REDOCLY", "CORPORATE", "GUEST".

93 |
94 | sso:
95 |   - WRONG # Does not match allowed options
   |     ^^^^^
96 |
97 | developerOnboarding:

Error was generated by the configuration spec rule.


[3] .redocly.yaml:128:1 at #/not-listed-filed

Property \`not-listed-filed\` is not expected here.

126 |   test: anything
127 |
128 | not-listed-filed: Must be reported as not expected
    | ^^^^^^^^^^^^^^^^
129 |
130 | env:

Error was generated by the configuration spec rule.


[4] .redocly.yaml:20:5 at #/redirects/some-redirect/t1o

Property \`t1o\` is not expected here.

Did you mean:
  - to
  - type

18 | redirects:
19 |   some-redirect:
20 |     t1o: Wrong name, should be 'two'
   |     ^^^
21 |     type: wrong type, must be a number
22 |

Error was generated by the configuration spec rule.


[5] .redocly.yaml:21:11 at #/redirects/some-redirect/type

Expected type \`number\` but got \`string\`.

19 |   some-redirect:
20 |     t1o: Wrong name, should be 'two'
21 |     type: wrong type, must be a number
   |           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
22 |
23 | rbac:

Error was generated by the configuration spec rule.


[6] .redocly.yaml:16:13 at #/seo/keywords

Expected type \`array\` but got \`integer\`.

14 |
15 | seo:
16 |   keywords: 789 # Must be an array
   |             ^^^
17 |
18 | redirects:

Error was generated by the configuration spec rule.


[7] .redocly.yaml:54:23 at #/rbac/content/**/additionalProp

Expected type \`string\` but got \`integer\`.

52 | content:
53 |   '**':
54 |     additionalProp: 456 # Must be a stirng
   |                     ^^^
55 |   foo:
56 |     additionalProp2: 789 # Must be a stirng

Error was generated by the configuration spec rule.


[8] .redocly.yaml:56:24 at #/rbac/content/foo/additionalProp2

Expected type \`string\` but got \`integer\`.

54 |       additionalProp: 456 # Must be a stirng
55 |     foo:
56 |       additionalProp2: 789 # Must be a stirng
   |                        ^^^
57 |
58 | responseHeaders:

Error was generated by the configuration spec rule.


[9] .redocly.yaml:51:16 at #/rbac/additional-property/something

Expected type \`string\` but got \`integer\`.

49 |   anonymous: read
50 | additional-property:
51 |   something: 123 # Must be a string
   |              ^^^
52 | content:
53 |   '**':

Error was generated by the configuration spec rule.


[10] .redocly.yaml:59:16 at #/responseHeaders/some-header

Expected type \`rootRedoclyConfigSchema.responseHeaders_additionalProperties\` (array) but got \`string\`

57 |
58 | responseHeaders:
59 |   some-header: wrong, must be an array
   |                ^^^^^^^^^^^^^^^^^^^^^^^
60 |   some-header2:
61 |     - wrong, must be an object

Error was generated by the configuration spec rule.


[11] .redocly.yaml:61:7 at #/responseHeaders/some-header2/0

Expected type \`rootRedoclyConfigSchema.responseHeaders_additionalProperties_items\` (object) but got \`string\`

59 | some-header: wrong, must be an array
60 | some-header2:
61 |   - wrong, must be an object
   |     ^^^^^^^^^^^^^^^^^^^^^^^^
62 |   - unexpected-property: Should fail
63 |     # name: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[12] .redocly.yaml:62:7 at #/responseHeaders/some-header2/1

The field \`name\` must be present on this level.

60 |   some-header2:
61 |     - wrong, must be an object
62 |     - unexpected-property: Should fail
   |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
63 |       # name: Must be reported as a missing required prop
   |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
64 |       value: 123 # Must be a string
   |       ^^^^^^^^^^
65 |
66 | ssoOnPrem:

Error was generated by the configuration spec rule.


[13] .redocly.yaml:62:7 at #/responseHeaders/some-header2/1/unexpected-property

Property \`unexpected-property\` is not expected here.

60 | some-header2:
61 |   - wrong, must be an object
62 |   - unexpected-property: Should fail
   |     ^^^^^^^^^^^^^^^^^^^
63 |     # name: Must be reported as a missing required prop
64 |     value: 123 # Must be a string

Error was generated by the configuration spec rule.


[14] .redocly.yaml:64:14 at #/responseHeaders/some-header2/1/value

Expected type \`string\` but got \`integer\`.

62 |     - unexpected-property: Should fail
63 |       # name: Must be reported as a missing required prop
64 |       value: 123 # Must be a string
   |              ^^^
65 |
66 | ssoOnPrem:

Error was generated by the configuration spec rule.


[15] .redocly.yaml:4:3 at #/apis/without-root

The field \`root\` must be present on this level.

2 |
3 | apis:
4 |   without-root:
  |   ^^^^^^^^^^^^
5 |     foo: Not expected!
6 |     output: file.json

Error was generated by the configuration spec rule.


[16] .redocly.yaml:5:5 at #/apis/without-root/foo

Property \`foo\` is not expected here.

Did you mean: root ?

3 | apis:
4 |   without-root:
5 |     foo: Not expected!
  |     ^^^
6 |     output: file.json
7 |   with-wrong-root:

Error was generated by the configuration spec rule.


[17] .redocly.yaml:8:11 at #/apis/with-wrong-root/root

Expected type \`string\` but got \`integer\`.

 6 |   output: file.json
 7 | with-wrong-root:
 8 |   root: 456 # Must be a string
   |         ^^^
 9 | with-theme:
10 |   root: ./openapi.yaml

Error was generated by the configuration spec rule.


[18] .redocly.yaml:13:7 at #/apis/with-theme/theme/not-expected

Property \`not-expected\` is not expected here.

11 |     theme:
12 |       openapi: wrong, must be an object
13 |       not-expected: Must fail
   |       ^^^^^^^^^^^^
14 |
15 | seo:

Error was generated by the configuration spec rule.


[19] .redocly.yaml:12:16 at #/apis/with-theme/theme/openapi

Expected type \`rootRedoclyConfigSchema.apis_additionalProperties.theme.openapi\` (object) but got \`string\`

10 | root: ./openapi.yaml
11 | theme:
12 |   openapi: wrong, must be an object
   |            ^^^^^^^^^^^^^^^^^^^^^^^^
13 |   not-expected: Must fail
14 |

Error was generated by the configuration spec rule.


[20] .redocly.yaml:68:12 at #/ssoOnPrem/oidc/title

Expected type \`string\` but got \`integer\`.

66 | ssoOnPrem:
67 |   oidc:
68 |     title: 456 # Must be a string
   |            ^^^
69 |     type: OIDC
70 |     configurationUrl: http://localhost/oidc/.well-known/openid-configuration

Error was generated by the configuration spec rule.


[21] .redocly.yaml:86:9 at #/ssoOnPrem/oidc/defaultTeams/0

Expected type \`string\` but got \`integer\`.

84 |     additional-propery: Must be allowed
85 |   defaultTeams:
86 |     - 456 # Must be a string
   |       ^^^
87 |
88 | sso-config-schema-without-configurationUrl:

Error was generated by the configuration spec rule.


[22] .redocly.yaml:81:5 at #/ssoOnPrem/oidc/configuration

The field \`authorization_endpoint\` must be present on this level.

79 |   login_hint: 789 # Must be a string
80 |   prompt: login
81 | configuration:
   | ^^^^^^^^^^^^^
82 |   token_endpoint: 123 # Must be a string
83 |   # authorization_endpoint: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[23] .redocly.yaml:82:23 at #/ssoOnPrem/oidc/configuration/token_endpoint

Expected type \`string\` but got \`integer\`.

80 |   prompt: login
81 | configuration:
82 |   token_endpoint: 123 # Must be a string
   |                   ^^^
83 |   # authorization_endpoint: Must be reported as a missing required prop
84 |   additional-propery: Must be allowed

Error was generated by the configuration spec rule.


[24] .redocly.yaml:79:19 at #/ssoOnPrem/oidc/authorizationRequestCustomParams/login_hint

Expected type \`string\` but got \`integer\`.

77 |   - default
78 | authorizationRequestCustomParams:
79 |   login_hint: 789 # Must be a string
   |               ^^^
80 |   prompt: login
81 | configuration:

Error was generated by the configuration spec rule.


[25] .redocly.yaml:88:3 at #/ssoOnPrem/sso-config-schema-without-configurationUrl

The field \`clientId\` must be present on this level.

86 |     - 456 # Must be a string
87 |
88 | sso-config-schema-without-configurationUrl:
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
89 |   type: OIDC
90 |   # clientId: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[26] .redocly.yaml:88:3 at #/ssoOnPrem/sso-config-schema-without-configurationUrl

The field \`configurationUrl\` must be present on this level.

86 |     - 456 # Must be a string
87 |
88 | sso-config-schema-without-configurationUrl:
   | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
89 |   type: OIDC
90 |   # clientId: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[27] .redocly.yaml:98:3 at #/developerOnboarding/wrong

Property \`wrong\` is not expected here.

 96 |
 97 | developerOnboarding:
 98 |   wrong: A not allowed field
    |   ^^^^^
 99 |   adapters:
100 |     - should be object

Error was generated by the configuration spec rule.


[28] .redocly.yaml:100:7 at #/developerOnboarding/adapters/0

Expected type \`APIGEE_X\` (object) but got \`string\`

 98 | wrong: A not allowed field
 99 | adapters:
100 |   - should be object
    |     ^^^^^^^^^^^^^^^^
101 |   - type: 123 # Must be a string
102 |   - type: APIGEE_X

Error was generated by the configuration spec rule.


[29] .redocly.yaml:101:7 at #/developerOnboarding/adapters/1

The field \`organizationName\` must be present on this level.

 99 | adapters:
100 |   - should be object
101 |   - type: 123 # Must be a string
    |     ^^^^^^^^^
102 |   - type: APIGEE_X
103 |     # organizationName: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[30] .redocly.yaml:101:7 at #/developerOnboarding/adapters/1

The field \`auth\` must be present on this level.

 99 | adapters:
100 |   - should be object
101 |   - type: 123 # Must be a string
    |     ^^^^^^^^^
102 |   - type: APIGEE_X
103 |     # organizationName: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[31] .redocly.yaml:101:13 at #/developerOnboarding/adapters/1/type

Expected type \`string\` but got \`integer\`.

 99 | adapters:
100 |   - should be object
101 |   - type: 123 # Must be a string
    |           ^^^
102 |   - type: APIGEE_X
103 |     # organizationName: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[32] .redocly.yaml:102:7 at #/developerOnboarding/adapters/2

The field \`organizationName\` must be present on this level.

100 | - should be object
101 | - type: 123 # Must be a string
102 | - type: APIGEE_X
    |   ^^^^^^^^^^^^^^
103 |   # organizationName: Must be reported as a missing required prop
    |   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  … |   < 5 more lines >
109 |     not-expected: Must fail
    |     ^^^^^^^^^^^^^^^^^^^^^^^
110 | - type: APIGEE_X
111 |   organizationName: Test

Error was generated by the configuration spec rule.


[33] .redocly.yaml:104:7 at #/developerOnboarding/adapters/2/auth

The field \`tokenEndpoint\` must be present on this level.

102 | - type: APIGEE_X
103 |   # organizationName: Must be reported as a missing required prop
104 |   auth:
    |   ^^^^
105 |     type: OAUTH2
106 |     # tokenEndpoint: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[34] .redocly.yaml:107:19 at #/developerOnboarding/adapters/2/auth/clientId

Expected type \`string\` but got \`integer\`.

105 | type: OAUTH2
106 | # tokenEndpoint: Must be reported as a missing required prop
107 | clientId: 456 # Must be a string
    |           ^^^
108 | clientSecret: '{{ process.env.secret }}'
109 | not-expected: Must fail

Error was generated by the configuration spec rule.


[35] .redocly.yaml:109:9 at #/developerOnboarding/adapters/2/auth/not-expected

Property \`not-expected\` is not expected here.

107 |     clientId: 456 # Must be a string
108 |     clientSecret: '{{ process.env.secret }}'
109 |     not-expected: Must fail
    |     ^^^^^^^^^^^^
110 | - type: APIGEE_X
111 |   organizationName: Test

Error was generated by the configuration spec rule.


[36] .redocly.yaml:112:7 at #/developerOnboarding/adapters/3/auth

The field \`serviceAccountPrivateKey\` must be present on this level.

110 | - type: APIGEE_X
111 |   organizationName: Test
112 |   auth:
    |   ^^^^
113 |     type: SERVICE_ACCOUNT
114 |     # serviceAccountPrivateKey: Must be reported as a missing required prop

Error was generated by the configuration spec rule.


[37] .redocly.yaml:115:30 at #/developerOnboarding/adapters/3/auth/serviceAccountEmail

Expected type \`string\` but got \`integer\`.

113 |         type: SERVICE_ACCOUNT
114 |         # serviceAccountPrivateKey: Must be reported as a missing required prop
115 |         serviceAccountEmail: 789 # Must be a string
    |                              ^^^
116 |
117 | l10n:

Error was generated by the configuration spec rule.


[38] .redocly.yaml:120:13 at #/l10n/locales/0/code

Expected type \`string\` but got \`integer\`.

118 | defaultLocale: en-US
119 | locales:
120 |   - code: 123 # Must be a string
    |           ^^^
121 |     name: English
122 |   - code: es-ES

Error was generated by the configuration spec rule.


[39] .redocly.yaml:133:12 at #/env/some-env/mockServer/off

Expected type \`boolean\` but got \`string\`.

131 | some-env:
132 |   mockServer:
133 |     off: must be boolean
    |          ^^^^^^^^^^^^^^^
134 |     not-expected: Must fail
135 |   apis:

Error was generated by the configuration spec rule.


[40] .redocly.yaml:134:7 at #/env/some-env/mockServer/not-expected

Property \`not-expected\` is not expected here.

132 | mockServer:
133 |   off: must be boolean
134 |   not-expected: Must fail
    |   ^^^^^^^^^^^^
135 | apis:
136 |   no-root:

Error was generated by the configuration spec rule.


[41] .redocly.yaml:136:7 at #/env/some-env/apis/no-root

The field \`root\` must be present on this level.

134 |   not-expected: Must fail
135 | apis:
136 |   no-root:
    |   ^^^^^^^
137 |     # root: Must be defined
138 |     rules: {}

Error was generated by the configuration spec rule.


[42] .redocly.yaml:140:15 at #/env/some-env/apis/wrong-root/root

Expected type \`string\` but got \`integer\`.

138 |       rules: {}
139 |     wrong-root:
140 |       root: 789 # Must be a string
    |             ^^^
141 |
142 | referenced-env:

Error was generated by the configuration spec rule.


[43] env.yaml:2:5 at #/ignore/0

Expected type \`string\` but got \`integer\`.

1 | ignore:
2 |   - 123 # Must be an string
  |     ^^^
3 |   - correct
4 |

referenced from .redocly.yaml:143:5 at #/env/referenced-env 

Error was generated by the configuration spec rule.


❌ Your config has 43 errors.


`;
