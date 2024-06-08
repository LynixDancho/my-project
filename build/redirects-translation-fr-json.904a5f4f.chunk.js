"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2028],{8510:e=>{e.exports=JSON.parse(`{"plugin.name":"Redirections","general.form.errors.url":"Le champs doit \xEAtre une url relative ou absolue.","general.form.errors.relativeUrl":"Le champs doit \xEAtre une url relative.","general.form.errors.required":"Ce champs est requis.","general.form.errors.oneOf":"La valeur s\xE9lectionn\xE9e est invalide.","general.form.errors.duplicate":"Le champs ne peut \xEAtre le m\xEAme que ''{field}''.","overview.header.title":"Redirections","overview.header.subtitle.singular":"{amount} Redirection trouv\xE9e","overview.header.subtitle.plural":"{amount} Redirections trouv\xE9es","overview.header.addButton.title":"Ajouter une redirection","overview.header.importButton.title":"Importer","overview.search.label":"Rechercher","overview.search.placeholder":"Rechercher des redirections","overview.search.clearLabel":"R\xE9initialiser la recherche","overview.table.empty.button.title":"Cr\xE9er votre premi\xE8re redirection","overview.table.empty.message":"Aucune redirection trouv\xE9e.","overview.table.headers.id":"ID","overview.table.headers.from":"Depuis","overview.table.headers.to":"Vers","overview.table.headers.type":"Type","overview.table.headers.status":"Status","overview.table.actions.edit.label":"Editer","overview.table.actions.delete.label":"Supprimer","overview.help.title":"Comment fonctionne l'importation ?","overview.help.description":"Importez un fichier CSV, avec les colonnes suivantes:","overview.help.from":"<strong>from:</strong> l'url \xE0 partir de laquelle rediriger","overview.help.to":"<strong>to:</strong> l'url vers laquelle rediriger","overview.help.type":"<strong>type:</strong> le type de redirection (permanent/temporary)","modal.import.title":"Importer des redirections","modal.import.description":"Ce processus d'importation v\xE9rifie chaque redirection. Si une redirection avec la m\xEAme URL \xAB De \xBB existe, elle sera mise \xE0 jour avec la nouvelle URL \xAB Vers \xBB. Des redirections n'existant pas dans le syst\xE8me seront cr\xE9\xE9es. Les entr\xE9es qui sont des doublons dans le fichier d'importation ou conduisent \xE0 des boucles de redirection potentielles seront ignor\xE9es pour garantir l'int\xE9grit\xE9 des donn\xE9es.","modal.import.dragAndDrop":"Faites glisser et d\xE9posez votre fichier dans cette zone ou recherchez un fichier \xE0 t\xE9l\xE9charger","modal.import.loading":"Importation de donn\xE9es...","modal.import.close":"Fermer","modal.import.partial.title":"Import complete with observations","modal.import.partial.description":"The import has finished, and we've cross-checked your redirects against existing data. Only error-free entries have been added. We identified some redirects with potential issues that were not imported. Please review the flagged redirects for any necessary corrections. Your redirects remains clean and free of duplicates or loops.","modal.import.continue":"Continue","modal.import.empty":"Rien \xE0 importer","modal.import.remove":"Effacer le fichier","modal.import.action":"Importer des redirections","modal.import.partial.response":"\xC9chec partiel de l'importation","modal.import.partial.message":"Echec de l'importation de certaines donn\xE9es. Ceci est s\xFBrement d\xFB \xE0 une duplication de redirection. Veuillez v\xE9rifiez les logs pour plus d'information.","modal.import.success.message":"Vos donn\xE9es ont \xE9t\xE9 import\xE9es avec succ\xE8s.","modal.import.error.message":"Une erreur inatendue est survenue pendant l'importation de vos donn\xE9es.","detail.header.back":"Retour","detail.header.title":"Editer redirection","detail.header.title.new":"Cr\xE9er une redirection","detail.form.from.label":"Depuis","detail.form.to.label":"Vers","detail.form.type.label":"Type","detail.form.type.help":"Que signifient les diff\xE9rents codes de redirection ?","detail.form.submit.title":"Sauvegarder","detail.form.submit.new.title":"Sauvegarder et cr\xE9er une nouvelle redirection","detail.form.type.value.moved_permanently_301":"301 D\xE9plac\xE9 de Mani\xE8re Permanente","detail.form.type.value.found_302":"302 Temporaire","detail.form.type.value.temporary_redirect_307":"307 Trouv\xE9","detail.form.type.value.gone_410":"410 Disparu","detail.form.type.value.unavailable_for_legal_reasons_451":"451 Indisponible pour Raisons L\xE9gales","detail.form.type.value.moved_permanently_301.description":"<strong>301 D\xE9plac\xE9 de Mani\xE8re Permanente</strong>: La ressource a \xE9t\xE9 d\xE9plac\xE9e de mani\xE8re permanente vers une nouvelle URL.","detail.form.type.value.found_302.description":"<strong>302 Temporaire</strong> La ressource est temporairement situ\xE9e \xE0 une autre URL.","detail.form.type.value.temporary_redirect_307.description":"<strong>307 Trouv\xE9</strong> D\xE9plac\xE9e temporairement vers une nouvelle URL avec la m\xEAme m\xE9thode utilis\xE9e.","detail.form.type.value.gone_410.description":"<strong>410 Disparu</strong> La ressource a \xE9t\xE9 supprim\xE9e de mani\xE8re permanente et ne sera plus disponible.","detail.form.type.value.unavailable_for_legal_reasons_451.description":"<strong>451 Indisponible pour Raisons L\xE9gales</strong> L'acc\xE8s \xE0 la ressource est restreint pour des raisons juridiques.","detail.form.save.notify.error.general.message":"Une erreur est survenue pendant la cr\xE9ation de la redirection.","detail.form.save.notify.error.update.message":"Can't update redirect.","detail.form.save.notify.error.DUPLICATE.message":"Redirection dupliqu\xE9e. Une redirection avec le m\xEAme champs 'Depuis' existe d\xE9j\xE0.","detail.form.save.notify.error.LOOP.message":"La redirection causerai une boucle. Le champs 'Vers' sp\xE9cifi\xE9 redirigera vers le champs 'Depuis'.","detail.form.save.notify.success.message":"Redirection mise \xE0 jour.","detail.form.save.notify.success.new.message":"Redirection cr\xE9\xE9e."}`)}}]);