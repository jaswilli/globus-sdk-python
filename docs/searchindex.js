Search.setIndex({envversion:47,filenames:["authorization","clients","clients/auth","clients/base","clients/transfer","config","deprecations","exceptions","index","installation","oauth","oauth/flows","oauth/resource_servers","oauth/tutorial","optional_dependencies","responses","tutorial"],objects:{"globus_sdk.AccessTokenAuthorizer":{set_authorization_header:[0,1,1,""]},"globus_sdk.AuthClient":{get_identities:[2,1,1,""],oauth2_exchange_code_for_tokens:[2,1,1,""],oauth2_get_authorize_url:[2,1,1,""],oauth2_refresh_token:[2,1,1,""],oauth2_revoke_token:[2,1,1,""],oauth2_token:[2,1,1,""]},"globus_sdk.BasicAuthorizer":{set_authorization_header:[0,1,1,""]},"globus_sdk.ConfidentialAppAuthClient":{oauth2_client_credentials_tokens:[2,1,1,""],oauth2_get_dependent_tokens:[2,1,1,""],oauth2_start_flow:[2,1,1,""],oauth2_start_flow_authorization_code:[2,1,1,""],oauth2_token_introspect:[2,1,1,""]},"globus_sdk.DeleteData":{add_item:[4,1,1,""]},"globus_sdk.NativeAppAuthClient":{oauth2_refresh_token:[2,1,1,""],oauth2_start_flow:[2,1,1,""],oauth2_start_flow_native_app:[2,1,1,""]},"globus_sdk.NullAuthorizer":{set_authorization_header:[0,1,1,""]},"globus_sdk.RefreshTokenAuthorizer":{handle_missing_authorization:[0,1,1,""],set_authorization_header:[0,1,1,""]},"globus_sdk.TransferClient":{add_endpoint_acl_rule:[4,1,1,""],add_endpoint_role:[4,1,1,""],add_endpoint_server:[4,1,1,""],bookmark_list:[4,1,1,""],cancel_task:[4,1,1,""],create_bookmark:[4,1,1,""],create_endpoint:[4,1,1,""],create_shared_endpoint:[4,1,1,""],delete_bookmark:[4,1,1,""],delete_endpoint:[4,1,1,""],delete_endpoint_acl_rule:[4,1,1,""],delete_endpoint_role:[4,1,1,""],delete_endpoint_server:[4,1,1,""],endpoint_acl_list:[4,1,1,""],endpoint_activate:[4,1,1,""],endpoint_autoactivate:[4,1,1,""],endpoint_deactivate:[4,1,1,""],endpoint_get_activation_requirements:[4,1,1,""],endpoint_manager_monitored_endpoints:[4,1,1,""],endpoint_manager_task_list:[4,1,1,""],endpoint_role_list:[4,1,1,""],endpoint_search:[4,1,1,""],endpoint_server_list:[4,1,1,""],get_bookmark:[4,1,1,""],get_endpoint:[4,1,1,""],get_endpoint_acl_rule:[4,1,1,""],get_endpoint_role:[4,1,1,""],get_endpoint_server:[4,1,1,""],get_submission_id:[4,1,1,""],get_task:[4,1,1,""],my_effective_pause_rule_list:[4,1,1,""],my_shared_endpoint_list:[4,1,1,""],operation_ls:[4,1,1,""],operation_mkdir:[4,1,1,""],operation_rename:[4,1,1,""],submit_delete:[4,1,1,""],submit_transfer:[4,1,1,""],task_event_list:[4,1,1,""],task_list:[4,1,1,""],task_pause_info:[4,1,1,""],task_wait:[4,1,1,""],update_bookmark:[4,1,1,""],update_endpoint:[4,1,1,""],update_endpoint_acl_rule:[4,1,1,""],update_endpoint_server:[4,1,1,""],update_task:[4,1,1,""]},"globus_sdk.TransferData":{add_item:[4,1,1,""]},"globus_sdk.auth":{GlobusAuthorizationCodeFlowManager:[11,0,1,""],GlobusNativeAppFlowManager:[11,0,1,""]},"globus_sdk.auth.GlobusAuthorizationCodeFlowManager":{exchange_code_for_tokens:[11,1,1,""],get_authorize_url:[11,1,1,""]},"globus_sdk.auth.GlobusNativeAppFlowManager":{exchange_code_for_tokens:[11,1,1,""],get_authorize_url:[11,1,1,""]},"globus_sdk.auth.oauth_flow_manager":{GlobusOAuthFlowManager:[11,0,1,""]},"globus_sdk.auth.oauth_flow_manager.GlobusOAuthFlowManager":{exchange_code_for_tokens:[11,1,1,""],get_authorize_url:[11,1,1,""]},"globus_sdk.auth.token_response":{OAuthDependentTokenResponse:[15,0,1,""],OAuthTokenResponse:[15,0,1,""]},"globus_sdk.auth.token_response.OAuthDependentTokenResponse":{by_resource_server:[15,3,1,""]},"globus_sdk.auth.token_response.OAuthTokenResponse":{access_token:[15,3,1,""],by_resource_server:[15,3,1,""],decode_id_token:[15,1,1,""],expires_at_seconds:[15,3,1,""],expires_in:[15,3,1,""],other_tokens:[15,3,1,""],refresh_token:[15,3,1,""],resource_server:[15,3,1,""]},"globus_sdk.authorizers.base":{GlobusAuthorizer:[0,0,1,""]},"globus_sdk.authorizers.base.GlobusAuthorizer":{handle_missing_authorization:[0,1,1,""],set_authorization_header:[0,1,1,""]},"globus_sdk.base":{BaseClient:[3,0,1,""]},"globus_sdk.base.BaseClient":{"delete":[3,1,1,""],get:[3,1,1,""],post:[3,1,1,""],put:[3,1,1,""],set_app_name:[3,1,1,""]},"globus_sdk.exc":{GlobusAPIError:[7,0,1,""],GlobusConnectionError:[7,0,1,""],GlobusError:[7,0,1,""],GlobusTimeoutError:[7,0,1,""],NetworkError:[7,0,1,""],PaginationOverrunError:[7,0,1,""],TransferAPIError:[4,0,1,""]},"globus_sdk.response":{GlobusHTTPResponse:[15,0,1,""],GlobusResponse:[15,0,1,""]},"globus_sdk.response.GlobusHTTPResponse":{text:[15,3,1,""]},"globus_sdk.response.GlobusResponse":{data:[15,3,1,""],get:[15,1,1,""]},"globus_sdk.transfer":{response:[15,2,0,"-"]},"globus_sdk.transfer.response":{ActivationRequirementsResponse:[15,0,1,""],IterableTransferResponse:[15,0,1,""],TransferResponse:[15,0,1,""]},"globus_sdk.transfer.response.ActivationRequirementsResponse":{active_until:[15,1,1,""],always_activated:[15,3,1,""],supports_auto_activation:[15,3,1,""],supports_web_activation:[15,3,1,""]},globus_sdk:{AccessTokenAuthorizer:[0,0,1,""],AuthClient:[2,0,1,""],BasicAuthorizer:[0,0,1,""],ConfidentialAppAuthClient:[2,0,1,""],DeleteData:[4,0,1,""],NativeAppAuthClient:[2,0,1,""],NullAuthorizer:[0,0,1,""],RefreshTokenAuthorizer:[0,0,1,""],TransferClient:[4,0,1,""],TransferData:[4,0,1,""],auth:[2,2,0,"-"],transfer:[4,2,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","module","Python module"],"3":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:module","3":"py:attribute"},terms:{"11e5":2,"131bef46955c":2,"168edc3d":2,"18th":15,"45ee":2,"46bd0f56":2,"478c":2,"541ff5ebdc1c":2,"70c5":2,"7244fe7c8707":2,"7daddf46":2,"9cf8":2,"9f0f":2,"__builtins__":16,"__future__":15,"_default":[2,11],"abstract":[0,11],"boolean":13,"break":13,"case":[0,2,7,11,13,15,16],"catch":15,"class":[0,1,2,3,4,6],"default":[0,1,2,4,5,11,12,13,15],"final":16,"function":2,"import":[0,1,2,4,5,7,10,13,15,16],"int":[0,4,7,15],"long":[0,2,11,13,15],"new":[0,2,4,12,13,16],"null":16,"public":1,"return":[0,2,3,4,7,11,15],"short":[0,2],"super":13,"throw":7,"true":[0,3,4,11,13,15,16],"try":[0,3,4,7,15,16],"while":[0,2,4,7,12,14],a510:2,abbr:16,abc123:[0,5],about:[2,4,7,13,16],abov:[0,13,16],absenc:[2,11],absolut:15,accept:16,access_id:4,access_list:4,access_token:[0,2,13,15,16],accesstokenauthor:[0,2,4,13,16],accommod:2,account:[13,16],acl:4,acquir:15,act:[2,10,11,16],action:[0,3,10,15],activ:[2,4,15,16],activation_requir:4,activationrequirementsrespons:[4,15],active_until:15,actual:[0,16],add:[0,3,4,16],add_endpoint_acl_rul:4,add_endpoint_rol:4,add_endpoint_serv:4,add_item:4,addit:[2,4,11,15],addition:[2,5,13],additional_param:[2,11],address:12,administr:16,advanc:8,after:[2,4,11,13,16],afterward:0,against:[0,2,13,16],agent:3,agre:8,alia:15,all:[0,2,3,4,5,7,11,12,13,15,16],allow:[0,2,4,10,13,15],along:11,alreadi:[0,4,9,13],also:[0,2,4,5,10,11,13,15,16],altern:[5,15],although:[0,10,15],alwai:0,always_activ:15,ambigu:5,amount:11,ani:[0,2,4,6,8,11,13],anoth:[4,12,13],anymor:16,anyth:[0,3],anywai:[4,11,15],apach:8,app:[2,3,4,11],app_nam:3,appear:12,append:4,applic:[0,2,3,4,8,10,11,12,13,15,16],aqbx8yvvaaaaaaadxg:16,aqbx8yvvaaaaaaadxhatf46rxjcfuoxn1osomek:16,arbitrari:[4,11],aren:[0,12],arg:[0,2,7,15],argument:[0,2,4,11,16],argv:6,around:3,arrai:[15,16],associ:11,assum:[5,13,16],attach:[0,15],attempt:[4,5,11,13,14],attribut:[11,15,16],auth_access_token:0,auth_author:0,auth_client:[0,11,15],auth_cod:[2,11,13,16],auth_refresh_token:0,auth_token:[0,5,16],authent:[0,1,2,4,10,11,13,16],authorize_url:[11,13,16],auto:[4,15],autoactiv:4,autoactivatefail:4,automat:[0,4],auxiliari:16,avail:[2,4,5,8,13,15,16],awai:11,awar:4,awkward:0,back:[0,11,13,16],background:10,bake:0,band:13,bar:10,base64:0,base:[0,2,3,4,7,11,13,15],base_path:3,basecli:[0,2,3,4],basi:8,basicauthor:[0,2],bear:3,bearer:[0,2,16],becaus:[0,2,4,5,11],been:[2,13],befor:[15,16],behalf:[2,10],behavior:[4,6,15],belong:[10,12],benefici:13,best:[5,7],beta:5,better:[4,12,15,16],between:[4,7],bit:13,blank:16,bleed:9,bodi:[2,3],bookmark:4,bookmark_data:4,bookmark_id:4,bookmark_list:4,bool:[3,11,15],bootstrap:16,both:15,box:16,brief:[12,13],browser:[4,11,13],bunch:16,bundl:11,burden:16,by_resource_serv:[2,12,13,15,16],c6ba:2,call:[0,1,2,4,7,10,11,13,15,16],callabl:0,can:[0,2,4,5,7,9,11,12,13,15,16],cancel:4,cancel_task:4,cannot:[0,2,11,13,15],canon:5,canonical_nam:4,cap:4,capabl:0,captur:7,care:0,carri:[10,13],certain:[13,14],cfg:5,chang:0,check:[0,2,4,7,9,15,16],checksum:4,chicago:8,choos:13,cid1001:2,clariti:4,clean:11,cli:2,click:16,client:0,client_id:[0,2,13,16],client_secret:[0,2],client_typ:2,clone:9,code:[2,4,7,8,11,13,15,16],collect:[13,16],com:[8,9,10,12,16],combin:[10,11],come:[0,16],comfort:13,comma:2,command:13,common:[2,4,8,15],commonli:[2,11],commun:[2,7],compat:4,complet:[4,11,13,15,16],complex:[0,10,13],complianc:8,compon:[0,11,13],condens:13,condit:[7,8,16],confidenti:2,confidentialappauthcli:[0,2,11],config:[0,1,4],confirm:2,conform:14,confus:[0,12],connect:[7,12,13,14,15],consid:[4,11,12],consist:12,constraint:11,construct:4,constructor:2,consum:11,contact:4,contain:[2,11,16],contend:0,content:4,content_typ:15,continu:16,control:12,conveni:[4,8,15],copi:[8,11,13],copyright:8,correct:7,correctli:16,correspond:12,could:[0,1,2,4],coupl:[0,16],cours:[2,5,7,11],courtesi:3,cousin:16,cover:[10,13],creat:[0,4,5,13,16],create_bookmark:4,create_endpoint:4,create_result:4,create_shared_endpoint:4,credenti:[0,1,2,4,10,11,13,16],cron:16,current:[0,5],custom:[13,15],dai:16,data:[2,3,4,12,15,16],data_typ:4,databas:16,dataset1:4,date:0,ddata:4,deactiv:4,debug:3,decod:14,decode_id_token:[14,15],deeper:16,def456:5,default_response_class:3,defin:[0,5,11,16],definit:[11,13,16],delet:[1,2,3,4,8],delete_bookmark:4,delete_endpoint:4,delete_endpoint_acl_rul:4,delete_endpoint_rol:4,delete_endpoint_serv:4,delete_item:4,delete_result:4,deletedata:4,delic:16,delimit:2,depend:[0,2,8,9],deprec:2,deprecationwarn:6,depth:16,describ:[4,13],descript:[4,12],design:[11,13],desir:[2,11,15],dest:4,destination_endpoint:4,destination_endpoint_id:4,destination_path:4,detail:[2,4,7],detect:2,determin:13,develop:[3,5,7,16],dict:[0,2,3,4,11,15],dictionari:[4,15],did:16,didn:[4,16],differ:[0,2,5,12],dig:16,dir:4,direct:[4,11,13,15],directli:[0,2,3,4,13,15],directori:4,displai:[7,11,13],display_nam:[4,7,16],distinct:[0,12],distinguish:[2,7],distribut:8,dive:16,django:11,doc:[8,15],document:[0,2,4,5,8,10,13,15],doe:[2,3],doesn:[0,4,5,11,13],don:[0,5,12,16],done:[0,4,15],dot:4,down:13,downstream:2,dramat:2,dropdown:16,dualiti:0,e24f:2,each:[0,1,2,16],earlier:13,easi:16,easiest:13,edg:9,edu:4,effect:4,either:[2,3,8,11],element:[4,10],els:[4,7],email:[2,12,16],emb:11,embed:11,enabl:13,encod:[0,2,3,11,13],encourag:3,encrypt_data:4,end:[2,4,7,13],endpoint:[1,2,4,15,16],endpoint_acl_list:4,endpoint_activ:4,endpoint_autoactiv:4,endpoint_deactiv:4,endpoint_get_activation_requir:[4,15],endpoint_id:[4,15],endpoint_manag:4,endpoint_manager_monitored_endpoint:4,endpoint_manager_task_list:4,endpoint_role_list:4,endpoint_search:[4,7,16],endpoint_server_list:4,enforc:16,engag:13,enough:[15,16],ensur:0,enter:[4,13,15,16],entri:4,environ:[1,3,5,11],ep_data:4,ep_id:4,epoch:[0,15],epup:4,equal:4,equival:[5,15],error:3,especi:12,establish:2,etc:[5,7],evalu:2,even:16,event:0,event_list:4,ever:[13,16],everi:[0,1,4],everyth:16,evil:16,exc:[4,7],exce:[4,13],exceed:7,except:5,exchang:[2,11,13,15],exchange_code_for_token:11,exclus:[2,15],exist:[4,16],expand:16,expect:0,expir:[0,4,13,15,16],expires_at:[0,16],expires_at_:16,expires_at_second:[15,16],expires_in:15,explicit:16,explicitli:13,expos:[3,11,13],exposur:12,express:[0,8,16],extens:15,extern:[2,4,15],extra:[2,4],extract:11,fact:16,fail:[4,16],failur:[4,7],fairli:15,fals:[0,2,4,11,13,15],far:[0,16],fast:16,featur:[5,14,16],fed:6,feel:16,fetch:[0,4],few:[0,16],field:[4,13,15,16],file1:4,file:[0,1,4,5,8,15,16],filter:1,filter_fulltext:[4,7],filter_scop:[4,16],find:13,firewal:7,first:[0,11,12,13,16],flag:6,flow:[0,2,4,8,10],focu:16,follow:[2,4,5,13,16],foo:[4,10],forbidden:0,forese:16,form:[2,3,5],form_data:2,formal:13,format:4,former:0,forward:[13,16],found:[2,13],four:12,free:[13,16],fresh:3,freshli:11,from:[0,1,2,3,4,5,7,10,11,13,15,16],full:[0,13,16],fulltext:4,funki:13,further:2,furthermor:2,futur:[0,11,15,16],gave:16,gener:[0,2,3,5,7,8,11,12,13],get:[0,1,2,3,4,5,8,10,11,12],get_authorize_url:11,get_bookmark:4,get_endpoint:4,get_endpoint_acl_rul:4,get_endpoint_rol:4,get_endpoint_serv:4,get_ident:2,get_input:16,get_submission_id:4,get_task:4,getattr:16,git:9,github:[8,9],give:[1,2,4,16],given:[0,2,4,11,13,15],globu:[0,1,2,3,4],globus_auth_data:[13,16],globus_auth_token:13,globus_sdk:[0,1,2,3,4,7,11,13,15,16],globus_sdk_:5,globus_sdk_auth_token:5,globus_sdk_environ:5,globus_transfer_data:[13,16],globus_transfer_token:13,globusapierror:[4,7],globusauthor:[0,1,3,4,16],globusauthorizationcodeflowmanag:[2,11],globusconnectionerror:7,globuserror:7,globushttprespons:[3,15],globusnativeappflowmanag:[2,11],globusoauthflowmanag:[2,11],globusoptionaldependencyerror:14,globusrespons:[4,15],globustimeouterror:7,goal:[10,13],good:[13,15,16],googl:13,got:[7,16],govern:8,grant:[2,11],grant_typ:2,grasp:0,great:16,greater:4,gridftp:4,guid:9,hand:[0,16],handl:[0,2,3,13,15,16],handle_missing_author:0,handler:0,happen:0,hard:0,hardcod:16,hash:13,have:[0,1,2,5,11,13,15,16],hbqvoejy4immbzlc0b8thfofuok9rshn6tv7i0uwf0hb:16,header:[0,3,5,15,16],header_dict:0,help:[0,2],helper:2,here:[0,4,13,15,16],hierarchi:7,high:[1,8,16],highli:15,histori:1,hit:15,hocu:16,hood:0,host_endpoint:4,host_endpoint_id:4,host_path:4,hostnam:4,hour:4,how:[10,12,16],howev:[0,5,11,12],http:[0,3,4,7,8,9,11,15,16],http_respons:15,http_statu:[7,15],ident:[2,4,10,16],identifi:4,identities_set:2,identity_id:4,identity_provid:2,if_expires_in:4,ignor:3,immedi:0,implement:[0,2,3,11,14],impli:[8,15],implicitli:[0,4,15],importantli:[0,16],imposs:12,includ:[0,2,8,9,11,12,13,14,16],incorpor:2,indefinit:13,independ:2,index:15,indic:[0,6],inert:2,infinit:[13,16],info:16,inform:[2,4,7,11,12,15,16],inherit:[0,4,7,11],ini:5,initi:[0,2,13],input:[4,13,15,16],insid:6,inspect:[4,5,7,15],inspir:11,instal:8,instanc:[0,4,7,11],instanti:[0,1,2,3,4,5],instead:[0,4,11,15],institut:13,integ:15,intend:[2,5],interact:[2,3,10,12],interest:16,intern:[2,3,11],internal_auth_cli:0,interpret:15,introspect:2,invalid:[0,5],isn:4,isol:12,issu:[2,3,7,16],item:[4,15],iter:[2,4,15,16],iterabletransferrespons:[4,15],itself:[11,16],job:16,join:2,jose:14,json:[3,15],json_bodi:3,just:[0,1,3,11],keep:[2,11],kei:[4,11,13,15,16],key1:5,key2:5,keyword:[2,4,11],kind:[2,8,16],know:[1,13,15,16],knowledg:4,known:[11,13,15],kwarg:[0,2,4,15],label:4,languag:8,larg:4,last:[1,12],law:8,lead:3,learn:7,least:[0,4,13],leav:[13,16],left:5,leg:[11,13,15],let:[0,5,11,13,16],level:[1,2],leverag:11,librari:15,lifetim:[0,13,16],like:[0,2,4,13,16],limit:[0,4,7,8,12,13,16],line:13,link:[4,10,11,13],list:[1,2,4,15,16],live:[0,2,13],load:[0,4,5],local:13,locat:[2,5,11,16],log:[7,13,16],logfil:2,login:[13,15],logout:2,longer:16,look:[0,2,7,12,13,16],lot:16,low:[1,2],made:[0,4],mai:[0,2,3,7,8,11,13,14],maintain:14,make:[0,1,2,3,4,7,11,12,15,16],malform:7,manag:[0,9],mani:[4,7],manual:[4,9],map:[0,12],margin:15,matter:5,maximum:7,mayb:13,mean:[12,15,16],meaning:11,mechan:11,member:15,menu:16,messag:[4,7],method:[0,2,4,7,8,11,13,15,16],minimum:4,minut:4,mkdir:4,model:11,modifi:5,modul:6,monitored_endpoint:4,month:16,more:[0,4,7,10,11,13,15,16],most:[0,2,4,7,9,11,15,16],motiv:12,move:[13,16],mtime:4,much:[0,16],multipl:[2,4],must:[1,2,4,6,11,13,14,15,16],my_effective_pause_rule_list:4,my_shared_endpoint_list:4,myendpointsearch:7,myproxi:4,name:[2,3,4,5,12,15,16],nativ:[2,11],nativeappauthcli:[2,11,13,16],natur:2,navig:[11,16],necessari:[2,5,10,13],need:[0,1,2,4,13,15,16],network:7,networkerror:7,never:[3,13,15],newdir:4,newpath:4,next:[0,16],nice:3,non:[15,16],none:[0,2,3,4,11,15,16],normal:[2,4,10,15],notabl:2,note:[0,6,13,15,16],notic:12,notthreadsaf:2,now:[0,5,13,16],nullauthor:0,num:4,num_result:[1,4],num_secs_allow:15,number:[4,13,15],oauth2:[0,2,8],oauth2_:11,oauth2_client_credentials_token:2,oauth2_exchange_code_for_token:[2,13,16],oauth2_get_authorize_url:[2,13,16],oauth2_get_dependent_token:[2,15],oauth2_refresh_token:2,oauth2_revoke_token:2,oauth2_start_flow:2,oauth2_start_flow_:2,oauth2_start_flow_authorization_cod:2,oauth2_start_flow_native_app:[2,13,16],oauth2_token:2,oauth2_token_introspect:2,oauth2client:11,oauth:[2,4,8,10],oauth_flow_manag:11,oauthdependenttokenrespons:15,oauthtokenrespons:[2,11,12,13,14,15],object:[0,1,3],obtain:[2,8],occur:7,oct18_2016:15,octob:15,off:0,offer:10,offici:4,often:16,oidc:8,okai:13,old:16,older:4,oldpath:4,omit:2,on_refresh:0,onc:[0,1],onli:[0,2,4,5,8,11,12,13,16],onto:12,open:[4,14],openid:[12,13,16],oper:[0,4,8],operation_l:4,operation_mkdir:4,operation_renam:4,oppos:12,option:[3,4,8,12],order:[2,5,6,11,12,13,14,16],ordinari:15,org:[2,4,8,9,11,12,13,15,16],organ:[2,12,13],orient:15,origin:[2,15],other:[0,2,3,13,15,16],other_token:15,otherwis:[0,4,15],our:[7,10,11,12,16],out:[2,4,7,9,10,13,16],over:[4,11,15],overrid:[3,5],overwrit:0,own:[2,4,10,11,16],packag:[9,14],page:[7,11,13,15,16],pagin:7,paginationoverrunerror:[4,7],painless:16,param:[2,3,4],paramet:[0,1,2,3,4],parameter:11,pars:[5,15],part:[0,3,5],particular:[0,16],pass:[0,2,3,4,6,11,13],passthrough:2,password:[0,16],past:[11,13],path:[3,4,15],paus:4,pause_info:4,peek:16,pendingdeprecationwarn:6,per:[0,12],perform:[2,4,10,13],perhap:[0,4,16],period:[0,13],permiss:[4,5,8,10,16],person:[5,15],piec:[13,16],pip:9,plai:[2,16],plan:5,pleas:[4,13,15,16],plu:2,pocu:16,point:5,polici:16,polling_interv:4,portabl:14,portal:2,posix:[0,15,16],possess:2,possibl:[7,15],post:[2,3,4,8],potenti:[3,4],power:16,precend:5,precis:13,prefer:0,present:0,preserve_timestamp:4,press:4,pretti:16,preview:5,primarili:[2,11],princip:4,principal_typ:4,print:[1,4,7,13,15,16],print_funct:15,privaci:16,probabl:16,problem:[0,16],proce:16,procedur:13,proceed:15,process:[0,2,11,13],procur:[13,16],produc:[10,11],product:16,profil:[12,16],programmat:1,progress:11,project1:4,project1data:4,project:16,prompt:16,protect:[11,13,16],prove:[11,16],provid:[0,1,2,3,4,5,8,10,11,13,15,16],pull:4,purpos:2,put:[2,3,4,8,16],py2:15,py3:15,pypi:9,python2:16,python3:[13,16],python:[4,5,6,7],queri:[2,3,4,11,15],race:0,rais:[7,15],rand2002:2,random:11,rang:[10,15],rare:5,rather:[10,11],raw:[2,3,15],raw_input:[4,13,15,16],read:[0,11,13,16],readabl:2,readi:16,realli:[0,11],reason:12,receiv:13,recommend:[4,13],recurs:4,redirect:[11,16],redirect_uri:[2,11,13],refer:[0,15],reformat:13,refresh_token:[0,2,11,13,15,16],refreshtokenauthor:[0,2,16],regist:[12,13,16],rel:15,relationship:2,relative_tim:15,relev:[12,13,14,16],reli:[11,14],remedi:0,rememb:16,remov:0,renam:4,render:2,renew:0,replac:16,repositori:9,repres:[0,2,10,11],represent:[4,15],reqs_doc:15,request:[0,2,3,4,7,11,12,13,16],request_id:4,requested_scop:[2,11,13],requir:[0,2,4,8,9,11,13,14,15,16],requirements_data:4,rescu:16,resolut:3,resouc:[8,10],resourc:[2,4,8,12,13,15,16],resource_serv:15,respond:0,respons:[0,2,3,7,8,11,12,13],response_class:[2,3],response_typ:2,rest:[3,4,7,8,16],result:[0,4,7,10,11,12,13,15],retri:[3,4,16],retriev:15,retry_401:3,revoc:2,revok:[2,16],right:10,robust:14,role:4,role_data:4,role_id:4,role_list:4,root:7,rt_author:0,rule:[4,5],rule_data:4,rule_id:4,run:[0,2,4,6,11,13,16],safe:15,safeti:15,sai:16,same:[0,4,5],sampl:[2,5,16],save:8,scenario:[2,16],scope:[2,5,8,10,11],screen:16,script:16,sdk:[0,1,2,4],search:[4,5,7],second:[0,4,11,15,16],secret:[0,2,11,13],section:[0,5,10],sectionname1:5,secur:16,see:[0,2,4,6,8,9,12,15,16],seemless:15,select:16,self:[2,3],semant:3,send:[2,3,11,13,15],sens:12,sent:[0,2,11,13,16],separ:[2,11,12,16],serv:[3,12],server:[2,4,5,7,8,10,11],server_data:4,server_id:4,server_list:4,servic:0,session:3,set:[0,2,3,4,5,7,11,12,13,14],set_app_nam:3,set_authorization_head:0,setup:9,sever:[2,13],share:[4,5,15,16],shared_endpoint:4,shared_ep_data:4,shell:5,shortest:13,should:[0,2,3,4,5,7,11,12,13,15,16],shouldn:[4,12],side:[2,11],sign:4,significantli:10,simpl:[0,3,4,5,11,13,16],simplest:[9,13],simpli:1,simplifi:3,sinc:[0,15],singl:[0,4,12,13,15],site:16,size:4,slash:3,small:11,softwar:[8,13],sole:11,solv:0,some:[0,2,8,10,11,15],someth:[0,13,16],soon:[6,16],sophist:[0,11],sourc:[0,2,3,4,7,8,11,15],source_endpoint:4,source_endpoint_id:4,source_path:4,space:[2,11],special:2,specif:[5,7,8,11,13,14,15,16],specifi:[0,2,3,4,5,11,13,16],speed:[2,3],stage:13,standard:[5,7,13,15],start:[0,2,11,13,16],state:[0,2,11],statu:[1,2,4,7,15],stderr:15,step:[8,11,13],still:15,store:[2,11,16],str:[7,15,16],stress:16,string:[0,2,3,4,11,15,16],strip:[13,16],structur:[15,16],stub:7,stuff:16,sub:15,subclass:[0,7,15],submiss:4,submission_id:4,submit:4,submit_delet:4,submit_transf:4,success:13,successfulli:4,suffici:11,suitabl:[7,11],support:[0,2,3,4,8,9,10,13,14,15],supports_auto_activ:15,supports_web_activ:15,surfac:11,sync_level:4,system:[5,9,10,11,13],take:[0,1,2,5,11,15,16],talk:[0,8],task:[1,4,15],task_event_list:4,task_id:[1,4],task_list:[1,4,13],task_pause_info:4,task_wait:4,tdata:4,team:[3,13],techniqu:13,tell:[0,13],temporari:[11,13],term:[0,16],termin:[4,13],test:4,text:15,text_bodi:3,than:[4,7,12,15],thei:[0,2,5,11,12,13,15,16],them:[2,10,13,16],theoret:13,therebi:11,therefor:[2,7,10,13],thi:[0,1,2,4,5,7,8,9,10,11,12,13,14,15,16],thick:4,thing:16,think:[0,16],those:[0,2,4,11,12,13,15,16],though:[13,16],three:[5,12],through:[2,10,11,15,16],thrown:7,time:[0,4,7,13,15,16],time_second:15,timeout:4,timestamp:[0,15,16],todai:0,togeth:10,token_respons:[2,12,13,15,16],token_str:2,token_typ:16,tokenrespons:0,too:[4,7,13],top:[4,15],total:[0,4,7],track:11,transfer:[1,2],transfer_access_token:0,transfer_at:16,transfer_author:0,transfer_cli:[0,4,13],transfer_item:4,transfer_refresh_token:0,transfer_result:4,transfer_rt:16,transfer_token:[0,1,2,4,5,16],transfer_token_info:2,transferapierror:4,transferdata:4,transferrespons:[4,15],treat:[15,16],trigger:4,turn:16,tutori:[8,10,11],tweak:16,two:[2,4,5,8,12,16],txt:4,typeerror:15,typic:[2,11,13,15],u9uulmytklw4_15reo_f2e056wlqjawelp51pgaklxymyudfgtd4snycirjfq3mnj:16,ultim:16,unabl:2,unadorn:0,unauthor:0,uncertain:11,uncheck:16,unclassifi:7,under:[0,8,12],underli:[13,15],understand:16,unexpect:7,unfortun:0,unhash:13,uniqu:4,univers:8,unless:[0,2,8,13,15,16],unsaf:2,unset:5,until:[4,13,15],unus:[2,13],unusu:15,upcom:5,updat:[0,4],update_bookmark:4,update_endpoint:4,update_endpoint_acl_rul:4,update_endpoint_serv:4,update_result:4,update_task:4,upon:[11,14],uppercase_keynam:5,uri:[11,13],url:[2,4,11,13,16],urn:[12,16],usabl:2,usag:[0,4,7,16],user:[0,2,3,4,5,7,10,11,13,15,16],usernam:[0,2,16],usual:[11,13,15],util:11,valid:[0,15,16],valu:[2,4,5,11,13,15],value1:5,value2:5,valueerror:7,variabl:[1,4,5,7,13,15,16],varieti:13,variou:[1,2,10,13],verbatim:2,veri:[0,1,2,4,5,10],verif:14,verifi:[2,11],verify_checksum:4,version:[8,9],via:[1,4,10,13,14,15],wai:[0,5,9,11,12,13,15,16],wait:4,walkthrough:13,want:[0,2,4,7,11,13,15,16],warn:[4,6],warranti:8,web:[4,11,13,15,16],webactiv:15,webpag:13,webserv:11,websit:4,well:10,went:4,were:[2,7,15],what:[0,5,12,13,15,16],when:[0,3,4,5,11,12,13,15,16],whenc:15,whenev:[0,5,16],where:[7,13],whether:13,which:[0,2,3,4,5,7,9,10,11,12,13,14,16],wide:[10,13,15],wish:[2,11,14,16],within:[0,4],without:[0,1,3,4,8,11,13,14],won:[0,15,16],wonc:6,work:[1,13,16],world:2,worri:16,would:[0,5,7,11,12,13],wrap:[7,11,15,16],wrapper:3,write:[7,8,10,16],wrong:0,www:[4,8,15],xyz456:0,xyz987:5,year:16,yet:5,you:[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15,16],your:[0,1,2,5,8,9,11,12,13],your_id_her:16,yourself:16},titles:["API Authorization","Service Clients","Auth Client","Low Level API","Transfer Client","Globus SDK Configuration","Deprecations","Exceptions","Globus SDK for Python (Beta)","Installation","Globus Auth / OAuth2","OAuth Flows","Resouce Servers and Scopes","OAuth2 SDK Tutorial","Optional Dependencies","Responses","SDK Tutorial"],titleterms:{"class":[7,15],"short":12,access:[0,16],advanc:16,again:16,api:[0,3],app:13,auth:[0,2,10,15],authclient:[0,13],author:0,basic:0,beta:8,client:[1,2,4,13,16],config:5,configur:5,content:8,depend:14,deprec:6,detail:13,error:[4,7],exampl:0,except:7,explain:13,explor:16,flow:[11,13],format:5,gener:15,get:[13,16],globu:[5,8,10],grant:13,greater:13,helper:4,implicit:0,instal:9,interfac:0,just:12,less:12,level:3,licens:8,login:16,low:3,manag:[11,13],nativ:13,never:16,oauth2:[10,13],oauth:11,oauthtokenrespons:16,object:4,oidc:14,option:14,paramet:5,preced:5,python:8,refresh:[0,16],resouc:12,respons:15,save:16,scope:12,sdk:[5,8,13,16],server:12,servic:[1,16],some:16,special:4,step:16,tabl:8,talk:16,token:[0,12,14,16],transfer:[4,15],transfercli:0,tutori:[13,16],type:0,version:12,why:12,your:16}})