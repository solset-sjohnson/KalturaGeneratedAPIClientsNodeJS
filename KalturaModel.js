// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2016  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================
const kaltura = require('./KalturaClientBase');

/**
 *
 */
class ListResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaListResponse';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getTotalCount() {
	 	return this.totalCount;
	 }
}
module.exports.ListResponse = ListResponse;

/**
 *
 */
class BaseRestriction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseRestriction';
	}
}
module.exports.BaseRestriction = BaseRestriction;

/**
 *
 */
class AccessControl extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControl';
	}
	
	/**
	 * The id of the Access Control Profile
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The name of the Access Control Profile
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The name of the Access Control Profile
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * System name of the Access Control Profile
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string System name of the Access Control Profile
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * The description of the Access Control Profile
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string The description of the Access Control Profile
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * True if this Conversion Profile is the default
	 * @return int
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault int True if this Conversion Profile is the default
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * Array of Access Control Restrictions
	 * @return array
	 */
	 getRestrictions() {
	 	return this.restrictions;
	 }
	
	/**
	 * @param restrictions array Array of Access Control Restrictions
	 */
	 setRestrictions(restrictions) {
	 	this.restrictions = restrictions;
	 }
	
	/**
	 * Indicates that the access control profile is new and should be handled using KalturaAccessControlProfile object and accessControlProfile service
	 * @return bool
	 */
	 getContainsUnsuportedRestrictions() {
	 	return this.containsUnsuportedRestrictions;
	 }
}
module.exports.AccessControl = AccessControl;

/**
 *
 */
class ContextTypeHolder extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContextTypeHolder';
	}
	
	/**
	 * The type of the condition context
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The type of the condition context
	 */
	 setType(type) {
	 	this.type = type;
	 }
}
module.exports.ContextTypeHolder = ContextTypeHolder;

/**
 *
 */
class AccessControlContextTypeHolder extends ContextTypeHolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlContextTypeHolder';
	}
}
module.exports.AccessControlContextTypeHolder = AccessControlContextTypeHolder;

/**
 *
 */
class AccessControlMessage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlMessage';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string 
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string 
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.AccessControlMessage = AccessControlMessage;

/**
 *
 */
class RuleAction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRuleAction';
	}
	
	/**
	 * The type of the action
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
}
module.exports.RuleAction = RuleAction;

/**
 *
 */
class Condition extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCondition';
	}
	
	/**
	 * The type of the access control condition
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getNot() {
	 	return this.not;
	 }
	
	/**
	 * @param not bool 
	 */
	 setNot(not) {
	 	this.not = not;
	 }
}
module.exports.Condition = Condition;

/**
 *
 */
class Rule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRule';
	}
	
	/**
	 * Short Rule Description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Short Rule Description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Rule Custom Data to allow saving rule specific information
	 * @return string
	 */
	 getRuleData() {
	 	return this.ruleData;
	 }
	
	/**
	 * @param ruleData string Rule Custom Data to allow saving rule specific information
	 */
	 setRuleData(ruleData) {
	 	this.ruleData = ruleData;
	 }
	
	/**
	 * Message to be thrown to the player in case the rule is fulfilled
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string Message to be thrown to the player in case the rule is fulfilled
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * Code to be thrown to the player in case the rule is fulfilled
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string Code to be thrown to the player in case the rule is fulfilled
	 */
	 setCode(code) {
	 	this.code = code;
	 }
	
	/**
	 * Actions to be performed by the player in case the rule is fulfilled
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array Actions to be performed by the player in case the rule is fulfilled
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
	
	/**
	 * Conditions to validate the rule
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array Conditions to validate the rule
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
	
	/**
	 * Indicates what contexts should be tested by this rule
	 * @return array
	 */
	 getContexts() {
	 	return this.contexts;
	 }
	
	/**
	 * @param contexts array Indicates what contexts should be tested by this rule
	 */
	 setContexts(contexts) {
	 	this.contexts = contexts;
	 }
	
	/**
	 * Indicates that this rule is enough and no need to continue checking the rest of the rules
	 * @return bool
	 */
	 getStopProcessing() {
	 	return this.stopProcessing;
	 }
	
	/**
	 * @param stopProcessing bool Indicates that this rule is enough and no need to continue checking the rest of the rules
	 */
	 setStopProcessing(stopProcessing) {
	 	this.stopProcessing = stopProcessing;
	 }
	
	/**
	 * Indicates if we should force ks validation for admin ks users as well
	 * @return int
	 */
	 getForceAdminValidation() {
	 	return this.forceAdminValidation;
	 }
	
	/**
	 * @param forceAdminValidation int Indicates if we should force ks validation for admin ks users as well
	 */
	 setForceAdminValidation(forceAdminValidation) {
	 	this.forceAdminValidation = forceAdminValidation;
	 }
}
module.exports.Rule = Rule;

/**
 *
 */
class AccessControlProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlProfile';
	}
	
	/**
	 * The id of the Access Control Profile
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The name of the Access Control Profile
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The name of the Access Control Profile
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * System name of the Access Control Profile
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string System name of the Access Control Profile
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * The description of the Access Control Profile
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string The description of the Access Control Profile
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Creation time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Update time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * True if this access control profile is the partner default
	 * @return int
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault int True if this access control profile is the partner default
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * Array of access control rules
	 * @return array
	 */
	 getRules() {
	 	return this.rules;
	 }
	
	/**
	 * @param rules array Array of access control rules
	 */
	 setRules(rules) {
	 	this.rules = rules;
	 }
}
module.exports.AccessControlProfile = AccessControlProfile;

/**
 *
 */
class KeyValue extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKeyValue';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string 
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.KeyValue = KeyValue;

/**
 *
 */
class AccessControlScope extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlScope';
	}
	
	/**
	 * URL to be used to test domain conditions
	 * @return string
	 */
	 getReferrer() {
	 	return this.referrer;
	 }
	
	/**
	 * @param referrer string URL to be used to test domain conditions
	 */
	 setReferrer(referrer) {
	 	this.referrer = referrer;
	 }
	
	/**
	 * IP to be used to test geographic location conditions
	 * @return string
	 */
	 getIp() {
	 	return this.ip;
	 }
	
	/**
	 * @param ip string IP to be used to test geographic location conditions
	 */
	 setIp(ip) {
	 	this.ip = ip;
	 }
	
	/**
	 * Kaltura session to be used to test session and user conditions
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string Kaltura session to be used to test session and user conditions
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * Browser or client application to be used to test agent conditions
	 * @return string
	 */
	 getUserAgent() {
	 	return this.userAgent;
	 }
	
	/**
	 * @param userAgent string Browser or client application to be used to test agent conditions
	 */
	 setUserAgent(userAgent) {
	 	this.userAgent = userAgent;
	 }
	
	/**
	 * Unix timestamp (In seconds) to be used to test entry scheduling, keep null to use now
	 * @return int
	 */
	 getTime() {
	 	return this.time;
	 }
	
	/**
	 * @param time int Unix timestamp (In seconds) to be used to test entry scheduling, keep null to use now
	 */
	 setTime(time) {
	 	this.time = time;
	 }
	
	/**
	 * Indicates what contexts should be tested. No contexts means any context
	 * @return array
	 */
	 getContexts() {
	 	return this.contexts;
	 }
	
	/**
	 * @param contexts array Indicates what contexts should be tested. No contexts means any context
	 */
	 setContexts(contexts) {
	 	this.contexts = contexts;
	 }
	
	/**
	 * Array of hashes to pass to the access control profile scope
	 * @return array
	 */
	 getHashes() {
	 	return this.hashes;
	 }
	
	/**
	 * @param hashes array Array of hashes to pass to the access control profile scope
	 */
	 setHashes(hashes) {
	 	this.hashes = hashes;
	 }
}
module.exports.AccessControlScope = AccessControlScope;

/**
 *
 */
class ReportFilter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportFilter';
	}
	
	/**
	 * The dimension whose values should be filtered
	 * @return string
	 */
	 getDimension() {
	 	return this.dimension;
	 }
	
	/**
	 * @param dimension string The dimension whose values should be filtered
	 */
	 setDimension(dimension) {
	 	this.dimension = dimension;
	 }
	
	/**
	 * The (comma separated) values to include in the filter
	 * @return string
	 */
	 getValues() {
	 	return this.values;
	 }
	
	/**
	 * @param values string The (comma separated) values to include in the filter
	 */
	 setValues(values) {
	 	this.values = values;
	 }
}
module.exports.ReportFilter = ReportFilter;

/**
 *
 */
class AnalyticsFilter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnalyticsFilter';
	}
	
	/**
	 * Query start time (in local time) MM/dd/yyyy HH:mi
	 * @return string
	 */
	 getFrom_time() {
	 	return this.from_time;
	 }
	
	/**
	 * @param from_time string Query start time (in local time) MM/dd/yyyy HH:mi
	 */
	 setFrom_time(from_time) {
	 	this.from_time = from_time;
	 }
	
	/**
	 * Query end time (in local time) MM/dd/yyyy HH:mi
	 * @return string
	 */
	 getTo_time() {
	 	return this.to_time;
	 }
	
	/**
	 * @param to_time string Query end time (in local time) MM/dd/yyyy HH:mi
	 */
	 setTo_time(to_time) {
	 	this.to_time = to_time;
	 }
	
	/**
	 * Comma separated metrics list
	 * @return string
	 */
	 getMetrics() {
	 	return this.metrics;
	 }
	
	/**
	 * @param metrics string Comma separated metrics list
	 */
	 setMetrics(metrics) {
	 	this.metrics = metrics;
	 }
	
	/**
	 * Timezone offset from UTC (in minutes)
	 * @return float
	 */
	 getUtcOffset() {
	 	return this.utcOffset;
	 }
	
	/**
	 * @param utcOffset float Timezone offset from UTC (in minutes)
	 */
	 setUtcOffset(utcOffset) {
	 	this.utcOffset = utcOffset;
	 }
	
	/**
	 * Comma separated dimensions list
	 * @return string
	 */
	 getDimensions() {
	 	return this.dimensions;
	 }
	
	/**
	 * @param dimensions string Comma separated dimensions list
	 */
	 setDimensions(dimensions) {
	 	this.dimensions = dimensions;
	 }
	
	/**
	 * Array of filters
	 * @return array
	 */
	 getFilters() {
	 	return this.filters;
	 }
	
	/**
	 * @param filters array Array of filters
	 */
	 setFilters(filters) {
	 	this.filters = filters;
	 }
	
	/**
	 * Query order by metric/dimension
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string Query order by metric/dimension
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
}
module.exports.AnalyticsFilter = AnalyticsFilter;

/**
 *
 */
class CuePoint extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCuePoint';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCuePointType() {
	 	return this.cuePointType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTriggeredAt() {
	 	return this.triggeredAt;
	 }
	
	/**
	 * @param triggeredAt int 
	 */
	 setTriggeredAt(triggeredAt) {
	 	this.triggeredAt = triggeredAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Start time in milliseconds
	 * @return int
	 */
	 getStartTime() {
	 	return this.startTime;
	 }
	
	/**
	 * @param startTime int Start time in milliseconds
	 */
	 setStartTime(startTime) {
	 	this.startTime = startTime;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string 
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValue() {
	 	return this.partnerSortValue;
	 }
	
	/**
	 * @param partnerSortValue int 
	 */
	 setPartnerSortValue(partnerSortValue) {
	 	this.partnerSortValue = partnerSortValue;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getForceStop() {
	 	return this.forceStop;
	 }
	
	/**
	 * @param forceStop int 
	 */
	 setForceStop(forceStop) {
	 	this.forceStop = forceStop;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getThumbOffset() {
	 	return this.thumbOffset;
	 }
	
	/**
	 * @param thumbOffset int 
	 */
	 setThumbOffset(thumbOffset) {
	 	this.thumbOffset = thumbOffset;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
}
module.exports.CuePoint = CuePoint;

/**
 *
 */
class Annotation extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnotation';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId string 
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getText() {
	 	return this.text;
	 }
	
	/**
	 * @param text string 
	 */
	 setText(text) {
	 	this.text = text;
	 }
	
	/**
	 * End time in milliseconds
	 * @return int
	 */
	 getEndTime() {
	 	return this.endTime;
	 }
	
	/**
	 * @param endTime int End time in milliseconds
	 */
	 setEndTime(endTime) {
	 	this.endTime = endTime;
	 }
	
	/**
	 * Duration in milliseconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * Depth in the tree
	 * @return int
	 */
	 getDepth() {
	 	return this.depth;
	 }
	
	/**
	 * Number of all descendants
	 * @return int
	 */
	 getChildrenCount() {
	 	return this.childrenCount;
	 }
	
	/**
	 * Number of children, first generation only
	 * @return int
	 */
	 getDirectChildrenCount() {
	 	return this.directChildrenCount;
	 }
	
	/**
	 * Is the annotation public
	 * @return int
	 */
	 getIsPublic() {
	 	return this.isPublic;
	 }
	
	/**
	 * @param isPublic int Is the annotation public
	 */
	 setIsPublic(isPublic) {
	 	this.isPublic = isPublic;
	 }
	
	/**
	 * Should the cue point get indexed on the entry
	 * @return int
	 */
	 getSearchableOnEntry() {
	 	return this.searchableOnEntry;
	 }
	
	/**
	 * @param searchableOnEntry int Should the cue point get indexed on the entry
	 */
	 setSearchableOnEntry(searchableOnEntry) {
	 	this.searchableOnEntry = searchableOnEntry;
	 }
}
module.exports.Annotation = Annotation;

/**
 *
 */
class ApiExceptionArg extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiExceptionArg';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.ApiExceptionArg = ApiExceptionArg;

/**
 *
 */
class AppToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAppToken';
	}
	
	/**
	 * The id of the application token
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The application token
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Creation time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Update time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Application token status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Expiry time of current token (unix timestamp in seconds)
	 * @return int
	 */
	 getExpiry() {
	 	return this.expiry;
	 }
	
	/**
	 * @param expiry int Expiry time of current token (unix timestamp in seconds)
	 */
	 setExpiry(expiry) {
	 	this.expiry = expiry;
	 }
	
	/**
	 * Type of KS (Kaltura Session) that created using the current token
	 * @return int
	 */
	 getSessionType() {
	 	return this.sessionType;
	 }
	
	/**
	 * @param sessionType int Type of KS (Kaltura Session) that created using the current token
	 */
	 setSessionType(sessionType) {
	 	this.sessionType = sessionType;
	 }
	
	/**
	 * User id of KS (Kaltura Session) that created using the current token
	 * @return string
	 */
	 getSessionUserId() {
	 	return this.sessionUserId;
	 }
	
	/**
	 * @param sessionUserId string User id of KS (Kaltura Session) that created using the current token
	 */
	 setSessionUserId(sessionUserId) {
	 	this.sessionUserId = sessionUserId;
	 }
	
	/**
	 * Expiry duration of KS (Kaltura Session) that created using the current token (in seconds)
	 * @return int
	 */
	 getSessionDuration() {
	 	return this.sessionDuration;
	 }
	
	/**
	 * @param sessionDuration int Expiry duration of KS (Kaltura Session) that created using the current token (in seconds)
	 */
	 setSessionDuration(sessionDuration) {
	 	this.sessionDuration = sessionDuration;
	 }
	
	/**
	 * Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token
	 * @return string
	 */
	 getSessionPrivileges() {
	 	return this.sessionPrivileges;
	 }
	
	/**
	 * @param sessionPrivileges string Comma separated privileges to be applied on KS (Kaltura Session) that created using the current token
	 */
	 setSessionPrivileges(sessionPrivileges) {
	 	this.sessionPrivileges = sessionPrivileges;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHashType() {
	 	return this.hashType;
	 }
	
	/**
	 * @param hashType string 
	 */
	 setHashType(hashType) {
	 	this.hashType = hashType;
	 }
}
module.exports.AppToken = AppToken;

/**
 *
 */
class Asset extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAsset';
	}
	
	/**
	 * The ID of the Flavor Asset
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The entry ID of the Flavor Asset
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The version of the Flavor Asset
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * The size (in KBytes) of the Flavor Asset
	 * @return int
	 */
	 getSize() {
	 	return this.size;
	 }
	
	/**
	 * Tags used to identify the Flavor Asset in various scenarios
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string Tags used to identify the Flavor Asset in various scenarios
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * The file extension
	 * @return string
	 */
	 getFileExt() {
	 	return this.fileExt;
	 }
	
	/**
	 * @param fileExt string The file extension
	 */
	 setFileExt(fileExt) {
	 	this.fileExt = fileExt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedAt() {
	 	return this.deletedAt;
	 }
	
	/**
	 * System description, error message, warnings and failure cause
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * Partner private data
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string Partner private data
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * Partner friendly description
	 * @return string
	 */
	 getPartnerDescription() {
	 	return this.partnerDescription;
	 }
	
	/**
	 * @param partnerDescription string Partner friendly description
	 */
	 setPartnerDescription(partnerDescription) {
	 	this.partnerDescription = partnerDescription;
	 }
	
	/**
	 * Comma separated list of source flavor params ids
	 * @return string
	 */
	 getActualSourceAssetParamsIds() {
	 	return this.actualSourceAssetParamsIds;
	 }
	
	/**
	 * @param actualSourceAssetParamsIds string Comma separated list of source flavor params ids
	 */
	 setActualSourceAssetParamsIds(actualSourceAssetParamsIds) {
	 	this.actualSourceAssetParamsIds = actualSourceAssetParamsIds;
	 }
}
module.exports.Asset = Asset;

/**
 *
 */
class AssetDistributionCondition extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetDistributionCondition';
	}
}
module.exports.AssetDistributionCondition = AssetDistributionCondition;

/**
 *
 */
class AssetDistributionRule extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetDistributionRule';
	}
	
	/**
	 * The validation error description that will be set on the "data" property on KalturaDistributionValidationErrorMissingAsset if rule was not fulfilled
	 * @return string
	 */
	 getValidationError() {
	 	return this.validationError;
	 }
	
	/**
	 * @param validationError string The validation error description that will be set on the "data" property on KalturaDistributionValidationErrorMissingAsset if rule was not fulfilled
	 */
	 setValidationError(validationError) {
	 	this.validationError = validationError;
	 }
	
	/**
	 * An array of asset distribution conditions
	 * @return array
	 */
	 getAssetDistributionConditions() {
	 	return this.assetDistributionConditions;
	 }
	
	/**
	 * @param assetDistributionConditions array An array of asset distribution conditions
	 */
	 setAssetDistributionConditions(assetDistributionConditions) {
	 	this.assetDistributionConditions = assetDistributionConditions;
	 }
}
module.exports.AssetDistributionRule = AssetDistributionRule;

/**
 *
 */
class String extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaString';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.String = String;

/**
 *
 */
class AssetParams extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetParams';
	}
	
	/**
	 * The id of the Flavor Params
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * The name of the Flavor Params
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The name of the Flavor Params
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * System name of the Flavor Params
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string System name of the Flavor Params
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * The description of the Flavor Params
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string The description of the Flavor Params
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * True if those Flavor Params are part of system defaults
	 * @return int
	 */
	 getIsSystemDefault() {
	 	return this.isSystemDefault;
	 }
	
	/**
	 * The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile)
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile)
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Array of partner permisison names that required for using this asset params
	 * @return array
	 */
	 getRequiredPermissions() {
	 	return this.requiredPermissions;
	 }
	
	/**
	 * @param requiredPermissions array Array of partner permisison names that required for using this asset params
	 */
	 setRequiredPermissions(requiredPermissions) {
	 	this.requiredPermissions = requiredPermissions;
	 }
	
	/**
	 * Id of remote storage profile that used to get the source, zero indicates Kaltura data center
	 * @return int
	 */
	 getSourceRemoteStorageProfileId() {
	 	return this.sourceRemoteStorageProfileId;
	 }
	
	/**
	 * @param sourceRemoteStorageProfileId int Id of remote storage profile that used to get the source, zero indicates Kaltura data center
	 */
	 setSourceRemoteStorageProfileId(sourceRemoteStorageProfileId) {
	 	this.sourceRemoteStorageProfileId = sourceRemoteStorageProfileId;
	 }
	
	/**
	 * Comma seperated ids of remote storage profiles that the flavor distributed to, the distribution done by the conversion engine
	 * @return int
	 */
	 getRemoteStorageProfileIds() {
	 	return this.remoteStorageProfileIds;
	 }
	
	/**
	 * @param remoteStorageProfileIds int Comma seperated ids of remote storage profiles that the flavor distributed to, the distribution done by the conversion engine
	 */
	 setRemoteStorageProfileIds(remoteStorageProfileIds) {
	 	this.remoteStorageProfileIds = remoteStorageProfileIds;
	 }
	
	/**
	 * Media parser type to be used for post-conversion validation
	 * @return string
	 */
	 getMediaParserType() {
	 	return this.mediaParserType;
	 }
	
	/**
	 * @param mediaParserType string Media parser type to be used for post-conversion validation
	 */
	 setMediaParserType(mediaParserType) {
	 	this.mediaParserType = mediaParserType;
	 }
	
	/**
	 * Comma seperated ids of source flavor params this flavor is created from
	 * @return string
	 */
	 getSourceAssetParamsIds() {
	 	return this.sourceAssetParamsIds;
	 }
	
	/**
	 * @param sourceAssetParamsIds string Comma seperated ids of source flavor params this flavor is created from
	 */
	 setSourceAssetParamsIds(sourceAssetParamsIds) {
	 	this.sourceAssetParamsIds = sourceAssetParamsIds;
	 }
}
module.exports.AssetParams = AssetParams;

/**
 *
 */
class Resource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResource';
	}
}
module.exports.Resource = Resource;

/**
 *
 */
class ContentResource extends Resource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContentResource';
	}
}
module.exports.ContentResource = ContentResource;

/**
 *
 */
class AssetParamsResourceContainer extends Resource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetParamsResourceContainer';
	}
	
	/**
	 * The content resource to associate with asset params
	 * @return ContentResource
	 */
	 getResource() {
	 	return this.resource;
	 }
	
	/**
	 * @param resource ContentResource The content resource to associate with asset params
	 */
	 setResource(resource) {
	 	this.resource = resource;
	 }
	
	/**
	 * The asset params to associate with the reaource
	 * @return int
	 */
	 getAssetParamsId() {
	 	return this.assetParamsId;
	 }
	
	/**
	 * @param assetParamsId int The asset params to associate with the reaource
	 */
	 setAssetParamsId(assetParamsId) {
	 	this.assetParamsId = assetParamsId;
	 }
}
module.exports.AssetParamsResourceContainer = AssetParamsResourceContainer;

/**
 *
 */
class AttachmentAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAttachmentAsset';
	}
	
	/**
	 * The filename of the attachment asset content
	 * @return string
	 */
	 getFilename() {
	 	return this.filename;
	 }
	
	/**
	 * @param filename string The filename of the attachment asset content
	 */
	 setFilename(filename) {
	 	this.filename = filename;
	 }
	
	/**
	 * Attachment asset title
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * @param title string Attachment asset title
	 */
	 setTitle(title) {
	 	this.title = title;
	 }
	
	/**
	 * The attachment format
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string The attachment format
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * The status of the asset
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
}
module.exports.AttachmentAsset = AttachmentAsset;

/**
 *
 */
class OperationAttributes extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOperationAttributes';
	}
}
module.exports.OperationAttributes = OperationAttributes;

/**
 *
 */
class BaseEntry extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntry';
	}
	
	/**
	 * Auto generated 10 characters alphanumeric string
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Entry name (Min 1 chars)
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Entry name (Min 1 chars)
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Entry description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Entry description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The ID of the user who is the owner of this entry
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string The ID of the user who is the owner of this entry
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * The ID of the user who created this entry
	 * @return string
	 */
	 getCreatorId() {
	 	return this.creatorId;
	 }
	
	/**
	 * @param creatorId string The ID of the user who created this entry
	 */
	 setCreatorId(creatorId) {
	 	this.creatorId = creatorId;
	 }
	
	/**
	 * Entry tags
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string Entry tags
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Entry admin tags can be updated only by administrators
	 * @return string
	 */
	 getAdminTags() {
	 	return this.adminTags;
	 }
	
	/**
	 * @param adminTags string Entry admin tags can be updated only by administrators
	 */
	 setAdminTags(adminTags) {
	 	this.adminTags = adminTags;
	 }
	
	/**
	 * Comma separated list of full names of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action
	 * @return string
	 */
	 getCategories() {
	 	return this.categories;
	 }
	
	/**
	 * @param categories string Comma separated list of full names of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action
	 */
	 setCategories(categories) {
	 	this.categories = categories;
	 }
	
	/**
	 * Comma separated list of ids of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action
	 * @return string
	 */
	 getCategoriesIds() {
	 	return this.categoriesIds;
	 }
	
	/**
	 * @param categoriesIds string Comma separated list of ids of categories to which this entry belongs. Only categories that don't have entitlement (privacy context) are listed, to retrieve the full list of categories, use the categoryEntry.list action
	 */
	 setCategoriesIds(categoriesIds) {
	 	this.categoriesIds = categoriesIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Entry moderation status
	 * @return int
	 */
	 getModerationStatus() {
	 	return this.moderationStatus;
	 }
	
	/**
	 * Number of moderation requests waiting for this entry
	 * @return int
	 */
	 getModerationCount() {
	 	return this.moderationCount;
	 }
	
	/**
	 * The type of the entry, this is auto filled by the derived entry object
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The type of the entry, this is auto filled by the derived entry object
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Entry creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Entry update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * The calculated average rank. rank = totalRank / votes
	 * @return float
	 */
	 getRank() {
	 	return this.rank;
	 }
	
	/**
	 * The sum of all rank values submitted to the baseEntry.anonymousRank action
	 * @return int
	 */
	 getTotalRank() {
	 	return this.totalRank;
	 }
	
	/**
	 * A count of all requests made to the baseEntry.anonymousRank action
	 * @return int
	 */
	 getVotes() {
	 	return this.votes;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getGroupId() {
	 	return this.groupId;
	 }
	
	/**
	 * @param groupId int 
	 */
	 setGroupId(groupId) {
	 	this.groupId = groupId;
	 }
	
	/**
	 * Can be used to store various partner related data as a string
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string Can be used to store various partner related data as a string
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * Download URL for the entry
	 * @return string
	 */
	 getDownloadUrl() {
	 	return this.downloadUrl;
	 }
	
	/**
	 * Indexed search text for full text search
	 * @return string
	 */
	 getSearchText() {
	 	return this.searchText;
	 }
	
	/**
	 * License type used for this entry
	 * @return int
	 */
	 getLicenseType() {
	 	return this.licenseType;
	 }
	
	/**
	 * @param licenseType int License type used for this entry
	 */
	 setLicenseType(licenseType) {
	 	this.licenseType = licenseType;
	 }
	
	/**
	 * Version of the entry data
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * Thumbnail URL
	 * @return string
	 */
	 getThumbnailUrl() {
	 	return this.thumbnailUrl;
	 }
	
	/**
	 * The Access Control ID assigned to this entry (null when not set, send -1 to remove)
	 * @return int
	 */
	 getAccessControlId() {
	 	return this.accessControlId;
	 }
	
	/**
	 * @param accessControlId int The Access Control ID assigned to this entry (null when not set, send -1 to remove)
	 */
	 setAccessControlId(accessControlId) {
	 	this.accessControlId = accessControlId;
	 }
	
	/**
	 * Entry scheduling start date (null when not set, send -1 to remove)
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int Entry scheduling start date (null when not set, send -1 to remove)
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * Entry scheduling end date (null when not set, send -1 to remove)
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int Entry scheduling end date (null when not set, send -1 to remove)
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * Entry external reference id
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string Entry external reference id
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
	
	/**
	 * ID of temporary entry that will replace this entry when it's approved and ready for replacement
	 * @return string
	 */
	 getReplacingEntryId() {
	 	return this.replacingEntryId;
	 }
	
	/**
	 * ID of the entry that will be replaced when the replacement approved and this entry is ready
	 * @return string
	 */
	 getReplacedEntryId() {
	 	return this.replacedEntryId;
	 }
	
	/**
	 * Status of the replacement readiness and approval
	 * @return string
	 */
	 getReplacementStatus() {
	 	return this.replacementStatus;
	 }
	
	/**
	 * Can be used to store various partner related data as a numeric value
	 * @return int
	 */
	 getPartnerSortValue() {
	 	return this.partnerSortValue;
	 }
	
	/**
	 * @param partnerSortValue int Can be used to store various partner related data as a numeric value
	 */
	 setPartnerSortValue(partnerSortValue) {
	 	this.partnerSortValue = partnerSortValue;
	 }
	
	/**
	 * Override the default ingestion profile
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * @param conversionProfileId int Override the default ingestion profile
	 */
	 setConversionProfileId(conversionProfileId) {
	 	this.conversionProfileId = conversionProfileId;
	 }
	
	/**
	 * IF not empty, points to an entry ID the should replace this current entry's id
	 * @return string
	 */
	 getRedirectEntryId() {
	 	return this.redirectEntryId;
	 }
	
	/**
	 * @param redirectEntryId string IF not empty, points to an entry ID the should replace this current entry's id
	 */
	 setRedirectEntryId(redirectEntryId) {
	 	this.redirectEntryId = redirectEntryId;
	 }
	
	/**
	 * ID of source root entry, used for clipped, skipped and cropped entries that created from another entry
	 * @return string
	 */
	 getRootEntryId() {
	 	return this.rootEntryId;
	 }
	
	/**
	 * ID of source root entry, used for defining entires association
	 * @return string
	 */
	 getParentEntryId() {
	 	return this.parentEntryId;
	 }
	
	/**
	 * @param parentEntryId string ID of source root entry, used for defining entires association
	 */
	 setParentEntryId(parentEntryId) {
	 	this.parentEntryId = parentEntryId;
	 }
	
	/**
	 * clipping, skipping and cropping attributes that used to create this entry
	 * @return array
	 */
	 getOperationAttributes() {
	 	return this.operationAttributes;
	 }
	
	/**
	 * @param operationAttributes array clipping, skipping and cropping attributes that used to create this entry
	 */
	 setOperationAttributes(operationAttributes) {
	 	this.operationAttributes = operationAttributes;
	 }
	
	/**
	 * list of user ids that are entitled to edit the entry (no server enforcement) The difference between entitledUsersEdit and entitledUsersPublish is applicative only
	 * @return string
	 */
	 getEntitledUsersEdit() {
	 	return this.entitledUsersEdit;
	 }
	
	/**
	 * @param entitledUsersEdit string list of user ids that are entitled to edit the entry (no server enforcement) The difference between entitledUsersEdit and entitledUsersPublish is applicative only
	 */
	 setEntitledUsersEdit(entitledUsersEdit) {
	 	this.entitledUsersEdit = entitledUsersEdit;
	 }
	
	/**
	 * list of user ids that are entitled to publish the entry (no server enforcement) The difference between entitledUsersEdit and entitledUsersPublish is applicative only
	 * @return string
	 */
	 getEntitledUsersPublish() {
	 	return this.entitledUsersPublish;
	 }
	
	/**
	 * @param entitledUsersPublish string list of user ids that are entitled to publish the entry (no server enforcement) The difference between entitledUsersEdit and entitledUsersPublish is applicative only
	 */
	 setEntitledUsersPublish(entitledUsersPublish) {
	 	this.entitledUsersPublish = entitledUsersPublish;
	 }
	
	/**
	 * Comma seperated string of the capabilities of the entry. Any capability needed can be added to this list
	 * @return string
	 */
	 getCapabilities() {
	 	return this.capabilities;
	 }
	
	/**
	 * Template entry id
	 * @return string
	 */
	 getTemplateEntryId() {
	 	return this.templateEntryId;
	 }
	
	/**
	 * @param templateEntryId string Template entry id
	 */
	 setTemplateEntryId(templateEntryId) {
	 	this.templateEntryId = templateEntryId;
	 }
	
	/**
	 * should we display this entry in search
	 * @return int
	 */
	 getDisplayInSearch() {
	 	return this.displayInSearch;
	 }
	
	/**
	 * @param displayInSearch int should we display this entry in search
	 */
	 setDisplayInSearch(displayInSearch) {
	 	this.displayInSearch = displayInSearch;
	 }
}
module.exports.BaseEntry = BaseEntry;

/**
 *
 */
class BaseEntryCloneOptionItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryCloneOptionItem';
	}
}
module.exports.BaseEntryCloneOptionItem = BaseEntryCloneOptionItem;

/**
 *
 */
class BaseResponseProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseResponseProfile';
	}
}
module.exports.BaseResponseProfile = BaseResponseProfile;

/**
 *
 */
class BaseSyndicationFeed extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSyndicationFeed';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFeedUrl() {
	 	return this.feedUrl;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * link a playlist that will set what content the feed will include
 * if empty, all content will be included in feed
	 * @return string
	 */
	 getPlaylistId() {
	 	return this.playlistId;
	 }
	
	/**
	 * @param playlistId string link a playlist that will set what content the feed will include
 * if empty, all content will be included in feed
	 */
	 setPlaylistId(playlistId) {
	 	this.playlistId = playlistId;
	 }
	
	/**
	 * feed name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string feed name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * feed status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * feed type
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int feed type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Base URL for each video, on the partners site
 * This is required by all syndication types
	 * @return string
	 */
	 getLandingPage() {
	 	return this.landingPage;
	 }
	
	/**
	 * @param landingPage string Base URL for each video, on the partners site
 * This is required by all syndication types
	 */
	 setLandingPage(landingPage) {
	 	this.landingPage = landingPage;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 * or just to provide a link to the landing page.
 * it is applied on the video-player_loc property in the XML (google)
 * and addes media-player tag (yahoo)
	 * @return bool
	 */
	 getAllowEmbed() {
	 	return this.allowEmbed;
	 }
	
	/**
	 * @param allowEmbed bool allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 * or just to provide a link to the landing page.
 * it is applied on the video-player_loc property in the XML (google)
 * and addes media-player tag (yahoo)
	 */
	 setAllowEmbed(allowEmbed) {
	 	this.allowEmbed = allowEmbed;
	 }
	
	/**
	 * Select a uiconf ID as player skin to include in the kwidget url
	 * @return int
	 */
	 getPlayerUiconfId() {
	 	return this.playerUiconfId;
	 }
	
	/**
	 * @param playerUiconfId int Select a uiconf ID as player skin to include in the kwidget url
	 */
	 setPlayerUiconfId(playerUiconfId) {
	 	this.playerUiconfId = playerUiconfId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFlavorParamId() {
	 	return this.flavorParamId;
	 }
	
	/**
	 * @param flavorParamId int 
	 */
	 setFlavorParamId(flavorParamId) {
	 	this.flavorParamId = flavorParamId;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getTranscodeExistingContent() {
	 	return this.transcodeExistingContent;
	 }
	
	/**
	 * @param transcodeExistingContent bool 
	 */
	 setTranscodeExistingContent(transcodeExistingContent) {
	 	this.transcodeExistingContent = transcodeExistingContent;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getAddToDefaultConversionProfile() {
	 	return this.addToDefaultConversionProfile;
	 }
	
	/**
	 * @param addToDefaultConversionProfile bool 
	 */
	 setAddToDefaultConversionProfile(addToDefaultConversionProfile) {
	 	this.addToDefaultConversionProfile = addToDefaultConversionProfile;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategories() {
	 	return this.categories;
	 }
	
	/**
	 * @param categories string 
	 */
	 setCategories(categories) {
	 	this.categories = categories;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStorageId() {
	 	return this.storageId;
	 }
	
	/**
	 * @param storageId int 
	 */
	 setStorageId(storageId) {
	 	this.storageId = storageId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntriesOrderBy() {
	 	return this.entriesOrderBy;
	 }
	
	/**
	 * @param entriesOrderBy string 
	 */
	 setEntriesOrderBy(entriesOrderBy) {
	 	this.entriesOrderBy = entriesOrderBy;
	 }
	
	/**
	 * Should enforce entitlement on feed entries
	 * @return bool
	 */
	 getEnforceEntitlement() {
	 	return this.enforceEntitlement;
	 }
	
	/**
	 * @param enforceEntitlement bool Should enforce entitlement on feed entries
	 */
	 setEnforceEntitlement(enforceEntitlement) {
	 	this.enforceEntitlement = enforceEntitlement;
	 }
	
	/**
	 * Set privacy context for search entries that assiged to private and public categories within a category privacy context
	 * @return string
	 */
	 getPrivacyContext() {
	 	return this.privacyContext;
	 }
	
	/**
	 * @param privacyContext string Set privacy context for search entries that assiged to private and public categories within a category privacy context
	 */
	 setPrivacyContext(privacyContext) {
	 	this.privacyContext = privacyContext;
	 }
	
	/**
	 * Update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getUseCategoryEntries() {
	 	return this.useCategoryEntries;
	 }
	
	/**
	 * @param useCategoryEntries bool 
	 */
	 setUseCategoryEntries(useCategoryEntries) {
	 	this.useCategoryEntries = useCategoryEntries;
	 }
	
	/**
	 * Feed content-type header value
	 * @return string
	 */
	 getFeedContentTypeHeader() {
	 	return this.feedContentTypeHeader;
	 }
	
	/**
	 * @param feedContentTypeHeader string Feed content-type header value
	 */
	 setFeedContentTypeHeader(feedContentTypeHeader) {
	 	this.feedContentTypeHeader = feedContentTypeHeader;
	 }
}
module.exports.BaseSyndicationFeed = BaseSyndicationFeed;

/**
 *
 */
class JobData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaJobData';
	}
}
module.exports.JobData = JobData;

/**
 *
 */
class BatchHistoryData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBatchHistoryData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getSchedulerId() {
	 	return this.schedulerId;
	 }
	
	/**
	 * @param schedulerId int 
	 */
	 setSchedulerId(schedulerId) {
	 	this.schedulerId = schedulerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getWorkerId() {
	 	return this.workerId;
	 }
	
	/**
	 * @param workerId int 
	 */
	 setWorkerId(workerId) {
	 	this.workerId = workerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchIndex() {
	 	return this.batchIndex;
	 }
	
	/**
	 * @param batchIndex int 
	 */
	 setBatchIndex(batchIndex) {
	 	this.batchIndex = batchIndex;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTimeStamp() {
	 	return this.timeStamp;
	 }
	
	/**
	 * @param timeStamp int 
	 */
	 setTimeStamp(timeStamp) {
	 	this.timeStamp = timeStamp;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string 
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrType() {
	 	return this.errType;
	 }
	
	/**
	 * @param errType int 
	 */
	 setErrType(errType) {
	 	this.errType = errType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrNumber() {
	 	return this.errNumber;
	 }
	
	/**
	 * @param errNumber int 
	 */
	 setErrNumber(errNumber) {
	 	this.errNumber = errNumber;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHostName() {
	 	return this.hostName;
	 }
	
	/**
	 * @param hostName string 
	 */
	 setHostName(hostName) {
	 	this.hostName = hostName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSessionId() {
	 	return this.sessionId;
	 }
	
	/**
	 * @param sessionId string 
	 */
	 setSessionId(sessionId) {
	 	this.sessionId = sessionId;
	 }
}
module.exports.BatchHistoryData = BatchHistoryData;

/**
 *
 */
class BatchJob extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBatchJob';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedAt() {
	 	return this.deletedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLockExpiration() {
	 	return this.lockExpiration;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExecutionAttempts() {
	 	return this.executionAttempts;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLockVersion() {
	 	return this.lockVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryName() {
	 	return this.entryName;
	 }
	
	/**
	 * @param entryName string 
	 */
	 setEntryName(entryName) {
	 	this.entryName = entryName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobType() {
	 	return this.jobType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getJobSubType() {
	 	return this.jobSubType;
	 }
	
	/**
	 * @param jobSubType int 
	 */
	 setJobSubType(jobSubType) {
	 	this.jobSubType = jobSubType;
	 }
	
	/**
	 * 
	 * @return JobData
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data JobData 
	 */
	 setData(data) {
	 	this.data = data;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAbort() {
	 	return this.abort;
	 }
	
	/**
	 * @param abort int 
	 */
	 setAbort(abort) {
	 	this.abort = abort;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCheckAgainTimeout() {
	 	return this.checkAgainTimeout;
	 }
	
	/**
	 * @param checkAgainTimeout int 
	 */
	 setCheckAgainTimeout(checkAgainTimeout) {
	 	this.checkAgainTimeout = checkAgainTimeout;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string 
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriority() {
	 	return this.priority;
	 }
	
	/**
	 * @param priority int 
	 */
	 setPriority(priority) {
	 	this.priority = priority;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getHistory() {
	 	return this.history;
	 }
	
	/**
	 * @param history array 
	 */
	 setHistory(history) {
	 	this.history = history;
	 }
	
	/**
	 * The id of the bulk upload job that initiated this job
	 * @return int
	 */
	 getBulkJobId() {
	 	return this.bulkJobId;
	 }
	
	/**
	 * @param bulkJobId int The id of the bulk upload job that initiated this job
	 */
	 setBulkJobId(bulkJobId) {
	 	this.bulkJobId = bulkJobId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchVersion() {
	 	return this.batchVersion;
	 }
	
	/**
	 * @param batchVersion int 
	 */
	 setBatchVersion(batchVersion) {
	 	this.batchVersion = batchVersion;
	 }
	
	/**
	 * When one job creates another - the parent should set this parentJobId to be its own id
	 * @return int
	 */
	 getParentJobId() {
	 	return this.parentJobId;
	 }
	
	/**
	 * @param parentJobId int When one job creates another - the parent should set this parentJobId to be its own id
	 */
	 setParentJobId(parentJobId) {
	 	this.parentJobId = parentJobId;
	 }
	
	/**
	 * The id of the root parent job
	 * @return int
	 */
	 getRootJobId() {
	 	return this.rootJobId;
	 }
	
	/**
	 * @param rootJobId int The id of the root parent job
	 */
	 setRootJobId(rootJobId) {
	 	this.rootJobId = rootJobId;
	 }
	
	/**
	 * The time that the job was pulled from the queue
	 * @return int
	 */
	 getQueueTime() {
	 	return this.queueTime;
	 }
	
	/**
	 * @param queueTime int The time that the job was pulled from the queue
	 */
	 setQueueTime(queueTime) {
	 	this.queueTime = queueTime;
	 }
	
	/**
	 * The time that the job was finished or closed as failed
	 * @return int
	 */
	 getFinishTime() {
	 	return this.finishTime;
	 }
	
	/**
	 * @param finishTime int The time that the job was finished or closed as failed
	 */
	 setFinishTime(finishTime) {
	 	this.finishTime = finishTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrType() {
	 	return this.errType;
	 }
	
	/**
	 * @param errType int 
	 */
	 setErrType(errType) {
	 	this.errType = errType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrNumber() {
	 	return this.errNumber;
	 }
	
	/**
	 * @param errNumber int 
	 */
	 setErrNumber(errNumber) {
	 	this.errNumber = errNumber;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEstimatedEffort() {
	 	return this.estimatedEffort;
	 }
	
	/**
	 * @param estimatedEffort int 
	 */
	 setEstimatedEffort(estimatedEffort) {
	 	this.estimatedEffort = estimatedEffort;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUrgency() {
	 	return this.urgency;
	 }
	
	/**
	 * @param urgency int 
	 */
	 setUrgency(urgency) {
	 	this.urgency = urgency;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSchedulerId() {
	 	return this.schedulerId;
	 }
	
	/**
	 * @param schedulerId int 
	 */
	 setSchedulerId(schedulerId) {
	 	this.schedulerId = schedulerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getWorkerId() {
	 	return this.workerId;
	 }
	
	/**
	 * @param workerId int 
	 */
	 setWorkerId(workerId) {
	 	this.workerId = workerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchIndex() {
	 	return this.batchIndex;
	 }
	
	/**
	 * @param batchIndex int 
	 */
	 setBatchIndex(batchIndex) {
	 	this.batchIndex = batchIndex;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastSchedulerId() {
	 	return this.lastSchedulerId;
	 }
	
	/**
	 * @param lastSchedulerId int 
	 */
	 setLastSchedulerId(lastSchedulerId) {
	 	this.lastSchedulerId = lastSchedulerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastWorkerId() {
	 	return this.lastWorkerId;
	 }
	
	/**
	 * @param lastWorkerId int 
	 */
	 setLastWorkerId(lastWorkerId) {
	 	this.lastWorkerId = lastWorkerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDc() {
	 	return this.dc;
	 }
	
	/**
	 * @param dc int 
	 */
	 setDc(dc) {
	 	this.dc = dc;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobObjectId() {
	 	return this.jobObjectId;
	 }
	
	/**
	 * @param jobObjectId string 
	 */
	 setJobObjectId(jobObjectId) {
	 	this.jobObjectId = jobObjectId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getJobObjectType() {
	 	return this.jobObjectType;
	 }
	
	/**
	 * @param jobObjectType int 
	 */
	 setJobObjectType(jobObjectType) {
	 	this.jobObjectType = jobObjectType;
	 }
}
module.exports.BatchJob = BatchJob;

/**
 *
 */
class PlayerDeliveryType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayerDeliveryType';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string 
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getFlashvars() {
	 	return this.flashvars;
	 }
	
	/**
	 * @param flashvars array 
	 */
	 setFlashvars(flashvars) {
	 	this.flashvars = flashvars;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMinVersion() {
	 	return this.minVersion;
	 }
	
	/**
	 * @param minVersion string 
	 */
	 setMinVersion(minVersion) {
	 	this.minVersion = minVersion;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getEnabledByDefault() {
	 	return this.enabledByDefault;
	 }
	
	/**
	 * @param enabledByDefault bool 
	 */
	 setEnabledByDefault(enabledByDefault) {
	 	this.enabledByDefault = enabledByDefault;
	 }
}
module.exports.PlayerDeliveryType = PlayerDeliveryType;

/**
 *
 */
class PlayerEmbedCodeType extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayerEmbedCodeType';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string 
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getEntryOnly() {
	 	return this.entryOnly;
	 }
	
	/**
	 * @param entryOnly bool 
	 */
	 setEntryOnly(entryOnly) {
	 	this.entryOnly = entryOnly;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMinVersion() {
	 	return this.minVersion;
	 }
	
	/**
	 * @param minVersion string 
	 */
	 setMinVersion(minVersion) {
	 	this.minVersion = minVersion;
	 }
}
module.exports.PlayerEmbedCodeType = PlayerEmbedCodeType;

/**
 *
 */
class Partner extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartner';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWebsite() {
	 	return this.website;
	 }
	
	/**
	 * @param website string 
	 */
	 setWebsite(website) {
	 	this.website = website;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNotificationUrl() {
	 	return this.notificationUrl;
	 }
	
	/**
	 * @param notificationUrl string 
	 */
	 setNotificationUrl(notificationUrl) {
	 	this.notificationUrl = notificationUrl;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAppearInSearch() {
	 	return this.appearInSearch;
	 }
	
	/**
	 * @param appearInSearch int 
	 */
	 setAppearInSearch(appearInSearch) {
	 	this.appearInSearch = appearInSearch;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * deprecated - lastName and firstName replaces this field
	 * @return string
	 */
	 getAdminName() {
	 	return this.adminName;
	 }
	
	/**
	 * @param adminName string deprecated - lastName and firstName replaces this field
	 */
	 setAdminName(adminName) {
	 	this.adminName = adminName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAdminEmail() {
	 	return this.adminEmail;
	 }
	
	/**
	 * @param adminEmail string 
	 */
	 setAdminEmail(adminEmail) {
	 	this.adminEmail = adminEmail;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCommercialUse() {
	 	return this.commercialUse;
	 }
	
	/**
	 * @param commercialUse int 
	 */
	 setCommercialUse(commercialUse) {
	 	this.commercialUse = commercialUse;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLandingPage() {
	 	return this.landingPage;
	 }
	
	/**
	 * @param landingPage string 
	 */
	 setLandingPage(landingPage) {
	 	this.landingPage = landingPage;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserLandingPage() {
	 	return this.userLandingPage;
	 }
	
	/**
	 * @param userLandingPage string 
	 */
	 setUserLandingPage(userLandingPage) {
	 	this.userLandingPage = userLandingPage;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentCategories() {
	 	return this.contentCategories;
	 }
	
	/**
	 * @param contentCategories string 
	 */
	 setContentCategories(contentCategories) {
	 	this.contentCategories = contentCategories;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPhone() {
	 	return this.phone;
	 }
	
	/**
	 * @param phone string 
	 */
	 setPhone(phone) {
	 	this.phone = phone;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescribeYourself() {
	 	return this.describeYourself;
	 }
	
	/**
	 * @param describeYourself string 
	 */
	 setDescribeYourself(describeYourself) {
	 	this.describeYourself = describeYourself;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getAdultContent() {
	 	return this.adultContent;
	 }
	
	/**
	 * @param adultContent bool 
	 */
	 setAdultContent(adultContent) {
	 	this.adultContent = adultContent;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefConversionProfileType() {
	 	return this.defConversionProfileType;
	 }
	
	/**
	 * @param defConversionProfileType string 
	 */
	 setDefConversionProfileType(defConversionProfileType) {
	 	this.defConversionProfileType = defConversionProfileType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getNotify() {
	 	return this.notify;
	 }
	
	/**
	 * @param notify int 
	 */
	 setNotify(notify) {
	 	this.notify = notify;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAllowQuickEdit() {
	 	return this.allowQuickEdit;
	 }
	
	/**
	 * @param allowQuickEdit int 
	 */
	 setAllowQuickEdit(allowQuickEdit) {
	 	this.allowQuickEdit = allowQuickEdit;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMergeEntryLists() {
	 	return this.mergeEntryLists;
	 }
	
	/**
	 * @param mergeEntryLists int 
	 */
	 setMergeEntryLists(mergeEntryLists) {
	 	this.mergeEntryLists = mergeEntryLists;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNotificationsConfig() {
	 	return this.notificationsConfig;
	 }
	
	/**
	 * @param notificationsConfig string 
	 */
	 setNotificationsConfig(notificationsConfig) {
	 	this.notificationsConfig = notificationsConfig;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMaxUploadSize() {
	 	return this.maxUploadSize;
	 }
	
	/**
	 * @param maxUploadSize int 
	 */
	 setMaxUploadSize(maxUploadSize) {
	 	this.maxUploadSize = maxUploadSize;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerPackage() {
	 	return this.partnerPackage;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSecret() {
	 	return this.secret;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAdminSecret() {
	 	return this.adminSecret;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCmsPassword() {
	 	return this.cmsPassword;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAllowMultiNotification() {
	 	return this.allowMultiNotification;
	 }
	
	/**
	 * @param allowMultiNotification int 
	 */
	 setAllowMultiNotification(allowMultiNotification) {
	 	this.allowMultiNotification = allowMultiNotification;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAdminLoginUsersQuota() {
	 	return this.adminLoginUsersQuota;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAdminUserId() {
	 	return this.adminUserId;
	 }
	
	/**
	 * @param adminUserId string 
	 */
	 setAdminUserId(adminUserId) {
	 	this.adminUserId = adminUserId;
	 }
	
	/**
	 * firstName and lastName replace the old (deprecated) adminName
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string firstName and lastName replace the old (deprecated) adminName
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * lastName and firstName replace the old (deprecated) adminName
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string lastName and firstName replace the old (deprecated) adminName
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
	
	/**
	 * country code (2char) - this field is optional
	 * @return string
	 */
	 getCountry() {
	 	return this.country;
	 }
	
	/**
	 * @param country string country code (2char) - this field is optional
	 */
	 setCountry(country) {
	 	this.country = country;
	 }
	
	/**
	 * state code (2char) - this field is optional
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * @param state string state code (2char) - this field is optional
	 */
	 setState(state) {
	 	this.state = state;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getAdditionalParams() {
	 	return this.additionalParams;
	 }
	
	/**
	 * @param additionalParams array 
	 */
	 setAdditionalParams(additionalParams) {
	 	this.additionalParams = additionalParams;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPublishersQuota() {
	 	return this.publishersQuota;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerGroupType() {
	 	return this.partnerGroupType;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getDefaultEntitlementEnforcement() {
	 	return this.defaultEntitlementEnforcement;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultDeliveryType() {
	 	return this.defaultDeliveryType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultEmbedCodeType() {
	 	return this.defaultEmbedCodeType;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getDeliveryTypes() {
	 	return this.deliveryTypes;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getEmbedCodeTypes() {
	 	return this.embedCodeTypes;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTemplatePartnerId() {
	 	return this.templatePartnerId;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIgnoreSeoLinks() {
	 	return this.ignoreSeoLinks;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHost() {
	 	return this.host;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCdnHost() {
	 	return this.cdnHost;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsFirstLogin() {
	 	return this.isFirstLogin;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLogoutUrl() {
	 	return this.logoutUrl;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerParentId() {
	 	return this.partnerParentId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCrmId() {
	 	return this.crmId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string 
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getTimeAlignedRenditions() {
	 	return this.timeAlignedRenditions;
	 }
}
module.exports.Partner = Partner;

/**
 *
 */
class Value extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaValue';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.Value = Value;

/**
 *
 */
class BooleanValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBooleanValue';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value bool 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.BooleanValue = BooleanValue;

/**
 *
 */
class BulkServiceData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkServiceData';
	}
}
module.exports.BulkServiceData = BulkServiceData;

/**
 *
 */
class BulkUploadPluginData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadPluginData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string 
	 */
	 setField(field) {
	 	this.field = field;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.BulkUploadPluginData = BulkUploadPluginData;

/**
 *
 */
class BulkUploadResult extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResult';
	}
	
	/**
	 * The id of the result
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The id of the parent job
	 * @return int
	 */
	 getBulkUploadJobId() {
	 	return this.bulkUploadJobId;
	 }
	
	/**
	 * @param bulkUploadJobId int The id of the parent job
	 */
	 setBulkUploadJobId(bulkUploadJobId) {
	 	this.bulkUploadJobId = bulkUploadJobId;
	 }
	
	/**
	 * The index of the line in the CSV
	 * @return int
	 */
	 getLineIndex() {
	 	return this.lineIndex;
	 }
	
	/**
	 * @param lineIndex int The index of the line in the CSV
	 */
	 setLineIndex(lineIndex) {
	 	this.lineIndex = lineIndex;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status string 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string 
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string 
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getObjectStatus() {
	 	return this.objectStatus;
	 }
	
	/**
	 * @param objectStatus int 
	 */
	 setObjectStatus(objectStatus) {
	 	this.objectStatus = objectStatus;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBulkUploadResultObjectType() {
	 	return this.bulkUploadResultObjectType;
	 }
	
	/**
	 * @param bulkUploadResultObjectType string 
	 */
	 setBulkUploadResultObjectType(bulkUploadResultObjectType) {
	 	this.bulkUploadResultObjectType = bulkUploadResultObjectType;
	 }
	
	/**
	 * The data as recieved in the csv
	 * @return string
	 */
	 getRowData() {
	 	return this.rowData;
	 }
	
	/**
	 * @param rowData string The data as recieved in the csv
	 */
	 setRowData(rowData) {
	 	this.rowData = rowData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string 
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectErrorDescription() {
	 	return this.objectErrorDescription;
	 }
	
	/**
	 * @param objectErrorDescription string 
	 */
	 setObjectErrorDescription(objectErrorDescription) {
	 	this.objectErrorDescription = objectErrorDescription;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getPluginsData() {
	 	return this.pluginsData;
	 }
	
	/**
	 * @param pluginsData array 
	 */
	 setPluginsData(pluginsData) {
	 	this.pluginsData = pluginsData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorDescription() {
	 	return this.errorDescription;
	 }
	
	/**
	 * @param errorDescription string 
	 */
	 setErrorDescription(errorDescription) {
	 	this.errorDescription = errorDescription;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCode() {
	 	return this.errorCode;
	 }
	
	/**
	 * @param errorCode string 
	 */
	 setErrorCode(errorCode) {
	 	this.errorCode = errorCode;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorType() {
	 	return this.errorType;
	 }
	
	/**
	 * @param errorType int 
	 */
	 setErrorType(errorType) {
	 	this.errorType = errorType;
	 }
}
module.exports.BulkUploadResult = BulkUploadResult;

/**
 *
 */
class BulkUpload extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUpload';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUploadedBy() {
	 	return this.uploadedBy;
	 }
	
	/**
	 * @param uploadedBy string 
	 */
	 setUploadedBy(uploadedBy) {
	 	this.uploadedBy = uploadedBy;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUploadedByUserId() {
	 	return this.uploadedByUserId;
	 }
	
	/**
	 * @param uploadedByUserId string 
	 */
	 setUploadedByUserId(uploadedByUserId) {
	 	this.uploadedByUserId = uploadedByUserId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUploadedOn() {
	 	return this.uploadedOn;
	 }
	
	/**
	 * @param uploadedOn int 
	 */
	 setUploadedOn(uploadedOn) {
	 	this.uploadedOn = uploadedOn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getNumOfEntries() {
	 	return this.numOfEntries;
	 }
	
	/**
	 * @param numOfEntries int 
	 */
	 setNumOfEntries(numOfEntries) {
	 	this.numOfEntries = numOfEntries;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLogFileUrl() {
	 	return this.logFileUrl;
	 }
	
	/**
	 * @param logFileUrl string 
	 */
	 setLogFileUrl(logFileUrl) {
	 	this.logFileUrl = logFileUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCsvFileUrl() {
	 	return this.csvFileUrl;
	 }
	
	/**
	 * @param csvFileUrl string 
	 */
	 setCsvFileUrl(csvFileUrl) {
	 	this.csvFileUrl = csvFileUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBulkFileUrl() {
	 	return this.bulkFileUrl;
	 }
	
	/**
	 * @param bulkFileUrl string 
	 */
	 setBulkFileUrl(bulkFileUrl) {
	 	this.bulkFileUrl = bulkFileUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBulkUploadType() {
	 	return this.bulkUploadType;
	 }
	
	/**
	 * @param bulkUploadType string 
	 */
	 setBulkUploadType(bulkUploadType) {
	 	this.bulkUploadType = bulkUploadType;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getResults() {
	 	return this.results;
	 }
	
	/**
	 * @param results array 
	 */
	 setResults(results) {
	 	this.results = results;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getError() {
	 	return this.error;
	 }
	
	/**
	 * @param error string 
	 */
	 setError(error) {
	 	this.error = error;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorType() {
	 	return this.errorType;
	 }
	
	/**
	 * @param errorType int 
	 */
	 setErrorType(errorType) {
	 	this.errorType = errorType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorNumber() {
	 	return this.errorNumber;
	 }
	
	/**
	 * @param errorNumber int 
	 */
	 setErrorNumber(errorNumber) {
	 	this.errorNumber = errorNumber;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileName() {
	 	return this.fileName;
	 }
	
	/**
	 * @param fileName string 
	 */
	 setFileName(fileName) {
	 	this.fileName = fileName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getNumOfObjects() {
	 	return this.numOfObjects;
	 }
	
	/**
	 * @param numOfObjects int 
	 */
	 setNumOfObjects(numOfObjects) {
	 	this.numOfObjects = numOfObjects;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBulkUploadObjectType() {
	 	return this.bulkUploadObjectType;
	 }
	
	/**
	 * @param bulkUploadObjectType string 
	 */
	 setBulkUploadObjectType(bulkUploadObjectType) {
	 	this.bulkUploadObjectType = bulkUploadObjectType;
	 }
}
module.exports.BulkUpload = BulkUpload;

/**
 *
 */
class BulkUploadObjectData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadObjectData';
	}
}
module.exports.BulkUploadObjectData = BulkUploadObjectData;

/**
 *
 */
class CEError extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCEError';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBrowser() {
	 	return this.browser;
	 }
	
	/**
	 * @param browser string 
	 */
	 setBrowser(browser) {
	 	this.browser = browser;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerIp() {
	 	return this.serverIp;
	 }
	
	/**
	 * @param serverIp string 
	 */
	 setServerIp(serverIp) {
	 	this.serverIp = serverIp;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerOs() {
	 	return this.serverOs;
	 }
	
	/**
	 * @param serverOs string 
	 */
	 setServerOs(serverOs) {
	 	this.serverOs = serverOs;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPhpVersion() {
	 	return this.phpVersion;
	 }
	
	/**
	 * @param phpVersion string 
	 */
	 setPhpVersion(phpVersion) {
	 	this.phpVersion = phpVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCeAdminEmail() {
	 	return this.ceAdminEmail;
	 }
	
	/**
	 * @param ceAdminEmail string 
	 */
	 setCeAdminEmail(ceAdminEmail) {
	 	this.ceAdminEmail = ceAdminEmail;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string 
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.CEError = CEError;

/**
 *
 */
class CaptionAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionAsset';
	}
	
	/**
	 * The Caption Params used to create this Caption Asset
	 * @return int
	 */
	 getCaptionParamsId() {
	 	return this.captionParamsId;
	 }
	
	/**
	 * @param captionParamsId int The Caption Params used to create this Caption Asset
	 */
	 setCaptionParamsId(captionParamsId) {
	 	this.captionParamsId = captionParamsId;
	 }
	
	/**
	 * The language of the caption asset content
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string The language of the caption asset content
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * The language of the caption asset content
	 * @return string
	 */
	 getLanguageCode() {
	 	return this.languageCode;
	 }
	
	/**
	 * Is default caption asset of the entry
	 * @return int
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault int Is default caption asset of the entry
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * Friendly label
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string Friendly label
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * The caption format
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string The caption format
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * The status of the asset
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * The parent id of the asset
	 * @return string
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId string The parent id of the asset
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * The Accuracy of the caption content
	 * @return int
	 */
	 getAccuracy() {
	 	return this.accuracy;
	 }
	
	/**
	 * @param accuracy int The Accuracy of the caption content
	 */
	 setAccuracy(accuracy) {
	 	this.accuracy = accuracy;
	 }
}
module.exports.CaptionAsset = CaptionAsset;

/**
 *
 */
class CaptionAssetItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionAssetItem';
	}
	
	/**
	 * The Caption Asset object
	 * @return CaptionAsset
	 */
	 getAsset() {
	 	return this.asset;
	 }
	
	/**
	 * @param asset CaptionAsset The Caption Asset object
	 */
	 setAsset(asset) {
	 	this.asset = asset;
	 }
	
	/**
	 * The entry object
	 * @return BaseEntry
	 */
	 getEntry() {
	 	return this.entry;
	 }
	
	/**
	 * @param entry BaseEntry The entry object
	 */
	 setEntry(entry) {
	 	this.entry = entry;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartTime() {
	 	return this.startTime;
	 }
	
	/**
	 * @param startTime int 
	 */
	 setStartTime(startTime) {
	 	this.startTime = startTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndTime() {
	 	return this.endTime;
	 }
	
	/**
	 * @param endTime int 
	 */
	 setEndTime(endTime) {
	 	this.endTime = endTime;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContent() {
	 	return this.content;
	 }
	
	/**
	 * @param content string 
	 */
	 setContent(content) {
	 	this.content = content;
	 }
}
module.exports.CaptionAssetItem = CaptionAssetItem;

/**
 *
 */
class CaptionParams extends AssetParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionParams';
	}
	
	/**
	 * The language of the caption content
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string The language of the caption content
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * Is default caption asset of the entry
	 * @return int
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault int Is default caption asset of the entry
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * Friendly label
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string Friendly label
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * The caption format
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string The caption format
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * Id of the caption params or the flavor params to be used as source for the caption creation
	 * @return int
	 */
	 getSourceParamsId() {
	 	return this.sourceParamsId;
	 }
	
	/**
	 * @param sourceParamsId int Id of the caption params or the flavor params to be used as source for the caption creation
	 */
	 setSourceParamsId(sourceParamsId) {
	 	this.sourceParamsId = sourceParamsId;
	 }
}
module.exports.CaptionParams = CaptionParams;

/**
 *
 */
class Category extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategory';
	}
	
	/**
	 * The id of the Category
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId int 
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDepth() {
	 	return this.depth;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The name of the Category.
 * The following characters are not allowed: '<', '>', ','
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The name of the Category.
 * The following characters are not allowed: '<', '>', ','
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The full name of the Category
	 * @return string
	 */
	 getFullName() {
	 	return this.fullName;
	 }
	
	/**
	 * The full ids of the Category
	 * @return string
	 */
	 getFullIds() {
	 	return this.fullIds;
	 }
	
	/**
	 * Number of entries in this Category (including child categories)
	 * @return int
	 */
	 getEntriesCount() {
	 	return this.entriesCount;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Category description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Category description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Category tags
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string Category tags
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * If category will be returned for list action
	 * @return int
	 */
	 getAppearInList() {
	 	return this.appearInList;
	 }
	
	/**
	 * @param appearInList int If category will be returned for list action
	 */
	 setAppearInList(appearInList) {
	 	this.appearInList = appearInList;
	 }
	
	/**
	 * defines the privacy of the entries that assigned to this category
	 * @return int
	 */
	 getPrivacy() {
	 	return this.privacy;
	 }
	
	/**
	 * @param privacy int defines the privacy of the entries that assigned to this category
	 */
	 setPrivacy(privacy) {
	 	this.privacy = privacy;
	 }
	
	/**
	 * If Category members are inherited from parent category or set manualy
	 * @return int
	 */
	 getInheritanceType() {
	 	return this.inheritanceType;
	 }
	
	/**
	 * @param inheritanceType int If Category members are inherited from parent category or set manualy
	 */
	 setInheritanceType(inheritanceType) {
	 	this.inheritanceType = inheritanceType;
	 }
	
	/**
	 * Who can ask to join this category
	 * @return int
	 */
	 getUserJoinPolicy() {
	 	return this.userJoinPolicy;
	 }
	
	/**
	 * Default permissionLevel for new users
	 * @return int
	 */
	 getDefaultPermissionLevel() {
	 	return this.defaultPermissionLevel;
	 }
	
	/**
	 * @param defaultPermissionLevel int Default permissionLevel for new users
	 */
	 setDefaultPermissionLevel(defaultPermissionLevel) {
	 	this.defaultPermissionLevel = defaultPermissionLevel;
	 }
	
	/**
	 * Category Owner (User id)
	 * @return string
	 */
	 getOwner() {
	 	return this.owner;
	 }
	
	/**
	 * @param owner string Category Owner (User id)
	 */
	 setOwner(owner) {
	 	this.owner = owner;
	 }
	
	/**
	 * Number of entries that belong to this category directly
	 * @return int
	 */
	 getDirectEntriesCount() {
	 	return this.directEntriesCount;
	 }
	
	/**
	 * Category external id, controlled and managed by the partner
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string Category external id, controlled and managed by the partner
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
	
	/**
	 * who can assign entries to this category
	 * @return int
	 */
	 getContributionPolicy() {
	 	return this.contributionPolicy;
	 }
	
	/**
	 * @param contributionPolicy int who can assign entries to this category
	 */
	 setContributionPolicy(contributionPolicy) {
	 	this.contributionPolicy = contributionPolicy;
	 }
	
	/**
	 * Number of active members for this category
	 * @return int
	 */
	 getMembersCount() {
	 	return this.membersCount;
	 }
	
	/**
	 * Number of pending members for this category
	 * @return int
	 */
	 getPendingMembersCount() {
	 	return this.pendingMembersCount;
	 }
	
	/**
	 * Set privacy context for search entries that assiged to private and public categories. the entries will be private if the search context is set with those categories
	 * @return string
	 */
	 getPrivacyContext() {
	 	return this.privacyContext;
	 }
	
	/**
	 * @param privacyContext string Set privacy context for search entries that assiged to private and public categories. the entries will be private if the search context is set with those categories
	 */
	 setPrivacyContext(privacyContext) {
	 	this.privacyContext = privacyContext;
	 }
	
	/**
	 * comma separated parents that defines a privacyContext for search
	 * @return string
	 */
	 getPrivacyContexts() {
	 	return this.privacyContexts;
	 }
	
	/**
	 * Status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * The category id that this category inherit its members and members permission (for contribution and join)
	 * @return int
	 */
	 getInheritedParentId() {
	 	return this.inheritedParentId;
	 }
	
	/**
	 * Can be used to store various partner related data as a numeric value
	 * @return int
	 */
	 getPartnerSortValue() {
	 	return this.partnerSortValue;
	 }
	
	/**
	 * @param partnerSortValue int Can be used to store various partner related data as a numeric value
	 */
	 setPartnerSortValue(partnerSortValue) {
	 	this.partnerSortValue = partnerSortValue;
	 }
	
	/**
	 * Can be used to store various partner related data as a string
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string Can be used to store various partner related data as a string
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * Enable client side applications to define how to sort the category child categories
	 * @return string
	 */
	 getDefaultOrderBy() {
	 	return this.defaultOrderBy;
	 }
	
	/**
	 * @param defaultOrderBy string Enable client side applications to define how to sort the category child categories
	 */
	 setDefaultOrderBy(defaultOrderBy) {
	 	this.defaultOrderBy = defaultOrderBy;
	 }
	
	/**
	 * Number of direct children categories
	 * @return int
	 */
	 getDirectSubCategoriesCount() {
	 	return this.directSubCategoriesCount;
	 }
	
	/**
	 * Moderation to add entries to this category by users that are not of permission level Manager or Moderator
	 * @return int
	 */
	 getModeration() {
	 	return this.moderation;
	 }
	
	/**
	 * @param moderation int Moderation to add entries to this category by users that are not of permission level Manager or Moderator
	 */
	 setModeration(moderation) {
	 	this.moderation = moderation;
	 }
	
	/**
	 * Nunber of pending moderation entries
	 * @return int
	 */
	 getPendingEntriesCount() {
	 	return this.pendingEntriesCount;
	 }
	
	/**
	 * Flag indicating that the category is an aggregation category
	 * @return int
	 */
	 getIsAggregationCategory() {
	 	return this.isAggregationCategory;
	 }
	
	/**
	 * @param isAggregationCategory int Flag indicating that the category is an aggregation category
	 */
	 setIsAggregationCategory(isAggregationCategory) {
	 	this.isAggregationCategory = isAggregationCategory;
	 }
	
	/**
	 * List of aggregation channels the category belongs to
	 * @return string
	 */
	 getAggregationCategories() {
	 	return this.aggregationCategories;
	 }
	
	/**
	 * @param aggregationCategories string List of aggregation channels the category belongs to
	 */
	 setAggregationCategories(aggregationCategories) {
	 	this.aggregationCategories = aggregationCategories;
	 }
}
module.exports.Category = Category;

/**
 *
 */
class CategoryEntry extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryEntry';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryId() {
	 	return this.categoryId;
	 }
	
	/**
	 * @param categoryId int 
	 */
	 setCategoryId(categoryId) {
	 	this.categoryId = categoryId;
	 }
	
	/**
	 * entry id
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string entry id
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * The full ids of the Category
	 * @return string
	 */
	 getCategoryFullIds() {
	 	return this.categoryFullIds;
	 }
	
	/**
	 * CategroyEntry status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * CategroyEntry creator puser ID
	 * @return string
	 */
	 getCreatorUserId() {
	 	return this.creatorUserId;
	 }
}
module.exports.CategoryEntry = CategoryEntry;

/**
 *
 */
class CategoryUser extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryUser';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryId() {
	 	return this.categoryId;
	 }
	
	/**
	 * @param categoryId int 
	 */
	 setCategoryId(categoryId) {
	 	this.categoryId = categoryId;
	 }
	
	/**
	 * User id
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string User id
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * Partner id
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Permission level
	 * @return int
	 */
	 getPermissionLevel() {
	 	return this.permissionLevel;
	 }
	
	/**
	 * @param permissionLevel int Permission level
	 */
	 setPermissionLevel(permissionLevel) {
	 	this.permissionLevel = permissionLevel;
	 }
	
	/**
	 * Status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * CategoryUser creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * CategoryUser update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Update method can be either manual or automatic to distinguish between manual operations (for example in KMC) on automatic - using bulk upload
	 * @return int
	 */
	 getUpdateMethod() {
	 	return this.updateMethod;
	 }
	
	/**
	 * @param updateMethod int Update method can be either manual or automatic to distinguish between manual operations (for example in KMC) on automatic - using bulk upload
	 */
	 setUpdateMethod(updateMethod) {
	 	this.updateMethod = updateMethod;
	 }
	
	/**
	 * The full ids of the Category
	 * @return string
	 */
	 getCategoryFullIds() {
	 	return this.categoryFullIds;
	 }
	
	/**
	 * Set of category-related permissions for the current category user
	 * @return string
	 */
	 getPermissionNames() {
	 	return this.permissionNames;
	 }
	
	/**
	 * @param permissionNames string Set of category-related permissions for the current category user
	 */
	 setPermissionNames(permissionNames) {
	 	this.permissionNames = permissionNames;
	 }
}
module.exports.CategoryUser = CategoryUser;

/**
 *
 */
class ClientConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaClientConfiguration';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getClientTag() {
	 	return this.clientTag;
	 }
	
	/**
	 * @param clientTag string 
	 */
	 setClientTag(clientTag) {
	 	this.clientTag = clientTag;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getApiVersion() {
	 	return this.apiVersion;
	 }
	
	/**
	 * @param apiVersion string 
	 */
	 setApiVersion(apiVersion) {
	 	this.apiVersion = apiVersion;
	 }
}
module.exports.ClientConfiguration = ClientConfiguration;

/**
 *
 */
class ClientNotification extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaClientNotification';
	}
	
	/**
	 * The URL where the notification should be sent to
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string The URL where the notification should be sent to
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * The serialized notification data to send
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string The serialized notification data to send
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.ClientNotification = ClientNotification;

/**
 *
 */
class Context extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContext';
	}
}
module.exports.Context = Context;

/**
 *
 */
class ContextDataResult extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContextDataResult';
	}
	
	/**
	 * Array of messages as received from the rules that invalidated
	 * @return array
	 */
	 getMessages() {
	 	return this.messages;
	 }
	
	/**
	 * @param messages array Array of messages as received from the rules that invalidated
	 */
	 setMessages(messages) {
	 	this.messages = messages;
	 }
	
	/**
	 * Array of actions as received from the rules that invalidated
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array Array of actions as received from the rules that invalidated
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
}
module.exports.ContextDataResult = ContextDataResult;

/**
 *
 */
class ControlPanelCommand extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaControlPanelCommand';
	}
	
	/**
	 * The id of the Category
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Creator name
	 * @return string
	 */
	 getCreatedBy() {
	 	return this.createdBy;
	 }
	
	/**
	 * @param createdBy string Creator name
	 */
	 setCreatedBy(createdBy) {
	 	this.createdBy = createdBy;
	 }
	
	/**
	 * Update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Updater name
	 * @return string
	 */
	 getUpdatedBy() {
	 	return this.updatedBy;
	 }
	
	/**
	 * @param updatedBy string Updater name
	 */
	 setUpdatedBy(updatedBy) {
	 	this.updatedBy = updatedBy;
	 }
	
	/**
	 * Creator id
	 * @return int
	 */
	 getCreatedById() {
	 	return this.createdById;
	 }
	
	/**
	 * @param createdById int Creator id
	 */
	 setCreatedById(createdById) {
	 	this.createdById = createdById;
	 }
	
	/**
	 * The id of the scheduler that the command refers to
	 * @return int
	 */
	 getSchedulerId() {
	 	return this.schedulerId;
	 }
	
	/**
	 * @param schedulerId int The id of the scheduler that the command refers to
	 */
	 setSchedulerId(schedulerId) {
	 	this.schedulerId = schedulerId;
	 }
	
	/**
	 * The id of the scheduler worker that the command refers to
	 * @return int
	 */
	 getWorkerId() {
	 	return this.workerId;
	 }
	
	/**
	 * @param workerId int The id of the scheduler worker that the command refers to
	 */
	 setWorkerId(workerId) {
	 	this.workerId = workerId;
	 }
	
	/**
	 * The id of the scheduler worker as configured in the ini file
	 * @return int
	 */
	 getWorkerConfiguredId() {
	 	return this.workerConfiguredId;
	 }
	
	/**
	 * @param workerConfiguredId int The id of the scheduler worker as configured in the ini file
	 */
	 setWorkerConfiguredId(workerConfiguredId) {
	 	this.workerConfiguredId = workerConfiguredId;
	 }
	
	/**
	 * The name of the scheduler worker that the command refers to
	 * @return int
	 */
	 getWorkerName() {
	 	return this.workerName;
	 }
	
	/**
	 * @param workerName int The name of the scheduler worker that the command refers to
	 */
	 setWorkerName(workerName) {
	 	this.workerName = workerName;
	 }
	
	/**
	 * The index of the batch process that the command refers to
	 * @return int
	 */
	 getBatchIndex() {
	 	return this.batchIndex;
	 }
	
	/**
	 * @param batchIndex int The index of the batch process that the command refers to
	 */
	 setBatchIndex(batchIndex) {
	 	this.batchIndex = batchIndex;
	 }
	
	/**
	 * The command type - stop / start / config
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int The command type - stop / start / config
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * The command target type - data center / scheduler / job / job type
	 * @return int
	 */
	 getTargetType() {
	 	return this.targetType;
	 }
	
	/**
	 * @param targetType int The command target type - data center / scheduler / job / job type
	 */
	 setTargetType(targetType) {
	 	this.targetType = targetType;
	 }
	
	/**
	 * The command status
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int The command status
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * The reason for the command
	 * @return string
	 */
	 getCause() {
	 	return this.cause;
	 }
	
	/**
	 * @param cause string The reason for the command
	 */
	 setCause(cause) {
	 	this.cause = cause;
	 }
	
	/**
	 * Command description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Command description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Error description
	 * @return string
	 */
	 getErrorDescription() {
	 	return this.errorDescription;
	 }
	
	/**
	 * @param errorDescription string Error description
	 */
	 setErrorDescription(errorDescription) {
	 	this.errorDescription = errorDescription;
	 }
}
module.exports.ControlPanelCommand = ControlPanelCommand;

/**
 *
 */
class ConversionAttribute extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionAttribute';
	}
	
	/**
	 * The id of the flavor params, set to null for source flavor
	 * @return int
	 */
	 getFlavorParamsId() {
	 	return this.flavorParamsId;
	 }
	
	/**
	 * @param flavorParamsId int The id of the flavor params, set to null for source flavor
	 */
	 setFlavorParamsId(flavorParamsId) {
	 	this.flavorParamsId = flavorParamsId;
	 }
	
	/**
	 * Attribute name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Attribute name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Attribute value
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string Attribute value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.ConversionAttribute = ConversionAttribute;

/**
 *
 */
class CropDimensions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCropDimensions';
	}
	
	/**
	 * Crop left point
	 * @return int
	 */
	 getLeft() {
	 	return this.left;
	 }
	
	/**
	 * @param left int Crop left point
	 */
	 setLeft(left) {
	 	this.left = left;
	 }
	
	/**
	 * Crop top point
	 * @return int
	 */
	 getTop() {
	 	return this.top;
	 }
	
	/**
	 * @param top int Crop top point
	 */
	 setTop(top) {
	 	this.top = top;
	 }
	
	/**
	 * Crop width
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int Crop width
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * Crop height
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int Crop height
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
}
module.exports.CropDimensions = CropDimensions;

/**
 *
 */
class ConversionProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfile';
	}
	
	/**
	 * The id of the Conversion Profile
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status string 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * The name of the Conversion Profile
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The name of the Conversion Profile
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * System name of the Conversion Profile
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string System name of the Conversion Profile
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Comma separated tags
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string Comma separated tags
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * The description of the Conversion Profile
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string The description of the Conversion Profile
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * ID of the default entry to be used for template data
	 * @return string
	 */
	 getDefaultEntryId() {
	 	return this.defaultEntryId;
	 }
	
	/**
	 * @param defaultEntryId string ID of the default entry to be used for template data
	 */
	 setDefaultEntryId(defaultEntryId) {
	 	this.defaultEntryId = defaultEntryId;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * List of included flavor ids (comma separated)
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * @param flavorParamsIds string List of included flavor ids (comma separated)
	 */
	 setFlavorParamsIds(flavorParamsIds) {
	 	this.flavorParamsIds = flavorParamsIds;
	 }
	
	/**
	 * Indicates that this conversion profile is system default
	 * @return int
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault int Indicates that this conversion profile is system default
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * Indicates that this conversion profile is partner default
	 * @return bool
	 */
	 getIsPartnerDefault() {
	 	return this.isPartnerDefault;
	 }
	
	/**
	 * Cropping dimensions
	 * @return CropDimensions
	 */
	 getCropDimensions() {
	 	return this.cropDimensions;
	 }
	
	/**
	 * @param cropDimensions CropDimensions Cropping dimensions
	 */
	 setCropDimensions(cropDimensions) {
	 	this.cropDimensions = cropDimensions;
	 }
	
	/**
	 * Clipping start position (in miliseconds)
	 * @return int
	 */
	 getClipStart() {
	 	return this.clipStart;
	 }
	
	/**
	 * @param clipStart int Clipping start position (in miliseconds)
	 */
	 setClipStart(clipStart) {
	 	this.clipStart = clipStart;
	 }
	
	/**
	 * Clipping duration (in miliseconds)
	 * @return int
	 */
	 getClipDuration() {
	 	return this.clipDuration;
	 }
	
	/**
	 * @param clipDuration int Clipping duration (in miliseconds)
	 */
	 setClipDuration(clipDuration) {
	 	this.clipDuration = clipDuration;
	 }
	
	/**
	 * XSL to transform ingestion MRSS XML
	 * @return string
	 */
	 getXslTransformation() {
	 	return this.xslTransformation;
	 }
	
	/**
	 * @param xslTransformation string XSL to transform ingestion MRSS XML
	 */
	 setXslTransformation(xslTransformation) {
	 	this.xslTransformation = xslTransformation;
	 }
	
	/**
	 * ID of default storage profile to be used for linked net-storage file syncs
	 * @return int
	 */
	 getStorageProfileId() {
	 	return this.storageProfileId;
	 }
	
	/**
	 * @param storageProfileId int ID of default storage profile to be used for linked net-storage file syncs
	 */
	 setStorageProfileId(storageProfileId) {
	 	this.storageProfileId = storageProfileId;
	 }
	
	/**
	 * Media parser type to be used for extract media
	 * @return string
	 */
	 getMediaParserType() {
	 	return this.mediaParserType;
	 }
	
	/**
	 * @param mediaParserType string Media parser type to be used for extract media
	 */
	 setMediaParserType(mediaParserType) {
	 	this.mediaParserType = mediaParserType;
	 }
	
	/**
	 * Should calculate file conversion complexity
	 * @return int
	 */
	 getCalculateComplexity() {
	 	return this.calculateComplexity;
	 }
	
	/**
	 * @param calculateComplexity int Should calculate file conversion complexity
	 */
	 setCalculateComplexity(calculateComplexity) {
	 	this.calculateComplexity = calculateComplexity;
	 }
	
	/**
	 * Defines the tags that should be used to define 'collective'/group/multi-flavor processing,
 * like 'mbr' or 'ism'
	 * @return string
	 */
	 getCollectionTags() {
	 	return this.collectionTags;
	 }
	
	/**
	 * @param collectionTags string Defines the tags that should be used to define 'collective'/group/multi-flavor processing,
 * like 'mbr' or 'ism'
	 */
	 setCollectionTags(collectionTags) {
	 	this.collectionTags = collectionTags;
	 }
}
module.exports.ConversionProfile = ConversionProfile;

/**
 *
 */
class ConversionProfileAssetParams extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileAssetParams';
	}
	
	/**
	 * The id of the conversion profile
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * The id of the asset params
	 * @return int
	 */
	 getAssetParamsId() {
	 	return this.assetParamsId;
	 }
	
	/**
	 * The ingestion origin of the asset params
	 * @return int
	 */
	 getReadyBehavior() {
	 	return this.readyBehavior;
	 }
	
	/**
	 * @param readyBehavior int The ingestion origin of the asset params
	 */
	 setReadyBehavior(readyBehavior) {
	 	this.readyBehavior = readyBehavior;
	 }
	
	/**
	 * The ingestion origin of the asset params
	 * @return int
	 */
	 getOrigin() {
	 	return this.origin;
	 }
	
	/**
	 * @param origin int The ingestion origin of the asset params
	 */
	 setOrigin(origin) {
	 	this.origin = origin;
	 }
	
	/**
	 * Asset params system name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Asset params system name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Starts conversion even if the decision layer reduced the configuration to comply with the source
	 * @return int
	 */
	 getForceNoneComplied() {
	 	return this.forceNoneComplied;
	 }
	
	/**
	 * @param forceNoneComplied int Starts conversion even if the decision layer reduced the configuration to comply with the source
	 */
	 setForceNoneComplied(forceNoneComplied) {
	 	this.forceNoneComplied = forceNoneComplied;
	 }
	
	/**
	 * Specifies how to treat the flavor after conversion is finished
	 * @return int
	 */
	 getDeletePolicy() {
	 	return this.deletePolicy;
	 }
	
	/**
	 * @param deletePolicy int Specifies how to treat the flavor after conversion is finished
	 */
	 setDeletePolicy(deletePolicy) {
	 	this.deletePolicy = deletePolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsEncrypted() {
	 	return this.isEncrypted;
	 }
	
	/**
	 * @param isEncrypted int 
	 */
	 setIsEncrypted(isEncrypted) {
	 	this.isEncrypted = isEncrypted;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getContentAwareness() {
	 	return this.contentAwareness;
	 }
	
	/**
	 * @param contentAwareness float 
	 */
	 setContentAwareness(contentAwareness) {
	 	this.contentAwareness = contentAwareness;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTwoPass() {
	 	return this.twoPass;
	 }
	
	/**
	 * @param twoPass int 
	 */
	 setTwoPass(twoPass) {
	 	this.twoPass = twoPass;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
}
module.exports.ConversionProfileAssetParams = ConversionProfileAssetParams;

/**
 *
 */
class ConvertCollectionFlavorData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvertCollectionFlavorData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFlavorParamsOutputId() {
	 	return this.flavorParamsOutputId;
	 }
	
	/**
	 * @param flavorParamsOutputId int 
	 */
	 setFlavorParamsOutputId(flavorParamsOutputId) {
	 	this.flavorParamsOutputId = flavorParamsOutputId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyBehavior() {
	 	return this.readyBehavior;
	 }
	
	/**
	 * @param readyBehavior int 
	 */
	 setReadyBehavior(readyBehavior) {
	 	this.readyBehavior = readyBehavior;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVideoBitrate() {
	 	return this.videoBitrate;
	 }
	
	/**
	 * @param videoBitrate int 
	 */
	 setVideoBitrate(videoBitrate) {
	 	this.videoBitrate = videoBitrate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAudioBitrate() {
	 	return this.audioBitrate;
	 }
	
	/**
	 * @param audioBitrate int 
	 */
	 setAudioBitrate(audioBitrate) {
	 	this.audioBitrate = audioBitrate;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileSyncLocalPath() {
	 	return this.destFileSyncLocalPath;
	 }
	
	/**
	 * @param destFileSyncLocalPath string 
	 */
	 setDestFileSyncLocalPath(destFileSyncLocalPath) {
	 	this.destFileSyncLocalPath = destFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileSyncRemoteUrl() {
	 	return this.destFileSyncRemoteUrl;
	 }
	
	/**
	 * @param destFileSyncRemoteUrl string 
	 */
	 setDestFileSyncRemoteUrl(destFileSyncRemoteUrl) {
	 	this.destFileSyncRemoteUrl = destFileSyncRemoteUrl;
	 }
}
module.exports.ConvertCollectionFlavorData = ConvertCollectionFlavorData;

/**
 *
 */
class Coordinate extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCoordinate';
	}
	
	/**
	 * 
	 * @return float
	 */
	 getLatitude() {
	 	return this.latitude;
	 }
	
	/**
	 * @param latitude float 
	 */
	 setLatitude(latitude) {
	 	this.latitude = latitude;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getLongitude() {
	 	return this.longitude;
	 }
	
	/**
	 * @param longitude float 
	 */
	 setLongitude(longitude) {
	 	this.longitude = longitude;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.Coordinate = Coordinate;

/**
 *
 */
class DataEntry extends BaseEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDataEntry';
	}
	
	/**
	 * The data of the entry
	 * @return string
	 */
	 getDataContent() {
	 	return this.dataContent;
	 }
	
	/**
	 * @param dataContent string The data of the entry
	 */
	 setDataContent(dataContent) {
	 	this.dataContent = dataContent;
	 }
	
	/**
	 * indicator whether to return the object for get action with the dataContent field
	 * @return bool
	 */
	 getRetrieveDataContentByGet() {
	 	return this.retrieveDataContentByGet;
	 }
	
	/**
	 * @param retrieveDataContentByGet bool indicator whether to return the object for get action with the dataContent field
	 */
	 setRetrieveDataContentByGet(retrieveDataContentByGet) {
	 	this.retrieveDataContentByGet = retrieveDataContentByGet;
	 }
}
module.exports.DataEntry = DataEntry;

/**
 *
 */
class UrlRecognizer extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlRecognizer';
	}
	
	/**
	 * The hosts that are recognized
	 * @return string
	 */
	 getHosts() {
	 	return this.hosts;
	 }
	
	/**
	 * @param hosts string The hosts that are recognized
	 */
	 setHosts(hosts) {
	 	this.hosts = hosts;
	 }
	
	/**
	 * The URI prefix we use for security
	 * @return string
	 */
	 getUriPrefix() {
	 	return this.uriPrefix;
	 }
	
	/**
	 * @param uriPrefix string The URI prefix we use for security
	 */
	 setUriPrefix(uriPrefix) {
	 	this.uriPrefix = uriPrefix;
	 }
}
module.exports.UrlRecognizer = UrlRecognizer;

/**
 *
 */
class UrlTokenizer extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizer';
	}
	
	/**
	 * Window
	 * @return int
	 */
	 getWindow() {
	 	return this.window;
	 }
	
	/**
	 * @param window int Window
	 */
	 setWindow(window) {
	 	this.window = window;
	 }
	
	/**
	 * key
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string key
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getLimitIpAddress() {
	 	return this.limitIpAddress;
	 }
	
	/**
	 * @param limitIpAddress bool 
	 */
	 setLimitIpAddress(limitIpAddress) {
	 	this.limitIpAddress = limitIpAddress;
	 }
}
module.exports.UrlTokenizer = UrlTokenizer;

/**
 *
 */
class SearchItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchItem';
	}
}
module.exports.SearchItem = SearchItem;

/**
 *
 */
class Filter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string 
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
	
	/**
	 * 
	 * @return SearchItem
	 */
	 getAdvancedSearch() {
	 	return this.advancedSearch;
	 }
	
	/**
	 * @param advancedSearch SearchItem 
	 */
	 setAdvancedSearch(advancedSearch) {
	 	this.advancedSearch = advancedSearch;
	 }
}
module.exports.Filter = Filter;

/**
 *
 */
class RelatedFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRelatedFilter';
	}
}
module.exports.RelatedFilter = RelatedFilter;

/**
 *
 */
class AssetBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSizeGreaterThanOrEqual() {
	 	return this.sizeGreaterThanOrEqual;
	 }
	
	/**
	 * @param sizeGreaterThanOrEqual int 
	 */
	 setSizeGreaterThanOrEqual(sizeGreaterThanOrEqual) {
	 	this.sizeGreaterThanOrEqual = sizeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSizeLessThanOrEqual() {
	 	return this.sizeLessThanOrEqual;
	 }
	
	/**
	 * @param sizeLessThanOrEqual int 
	 */
	 setSizeLessThanOrEqual(sizeLessThanOrEqual) {
	 	this.sizeLessThanOrEqual = sizeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedAtGreaterThanOrEqual() {
	 	return this.deletedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param deletedAtGreaterThanOrEqual int 
	 */
	 setDeletedAtGreaterThanOrEqual(deletedAtGreaterThanOrEqual) {
	 	this.deletedAtGreaterThanOrEqual = deletedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedAtLessThanOrEqual() {
	 	return this.deletedAtLessThanOrEqual;
	 }
	
	/**
	 * @param deletedAtLessThanOrEqual int 
	 */
	 setDeletedAtLessThanOrEqual(deletedAtLessThanOrEqual) {
	 	this.deletedAtLessThanOrEqual = deletedAtLessThanOrEqual;
	 }
}
module.exports.AssetBaseFilter = AssetBaseFilter;

/**
 *
 */
class AssetFilter extends AssetBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
}
module.exports.AssetFilter = AssetFilter;

/**
 *
 */
class DeliveryProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfile';
	}
	
	/**
	 * The id of the Delivery
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The name of the Delivery
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The name of the Delivery
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Delivery type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Delivery type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * System name of the delivery
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string System name of the delivery
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * The description of the Delivery
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string The description of the Delivery
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Creation time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Update time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamerType() {
	 	return this.streamerType;
	 }
	
	/**
	 * @param streamerType string 
	 */
	 setStreamerType(streamerType) {
	 	this.streamerType = streamerType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string 
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * the host part of the url
	 * @return string
	 */
	 getHostName() {
	 	return this.hostName;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return UrlRecognizer
	 */
	 getRecognizer() {
	 	return this.recognizer;
	 }
	
	/**
	 * @param recognizer UrlRecognizer 
	 */
	 setRecognizer(recognizer) {
	 	this.recognizer = recognizer;
	 }
	
	/**
	 * 
	 * @return UrlTokenizer
	 */
	 getTokenizer() {
	 	return this.tokenizer;
	 }
	
	/**
	 * @param tokenizer UrlTokenizer 
	 */
	 setTokenizer(tokenizer) {
	 	this.tokenizer = tokenizer;
	 }
	
	/**
	 * True if this is the systemwide default for the protocol
	 * @return int
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * the object from which this object was cloned (or 0)
	 * @return int
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * Comma separated list of supported media protocols. f.i. rtmpe
	 * @return string
	 */
	 getMediaProtocols() {
	 	return this.mediaProtocols;
	 }
	
	/**
	 * @param mediaProtocols string Comma separated list of supported media protocols. f.i. rtmpe
	 */
	 setMediaProtocols(mediaProtocols) {
	 	this.mediaProtocols = mediaProtocols;
	 }
	
	/**
	 * priority used for ordering similar delivery profiles
	 * @return int
	 */
	 getPriority() {
	 	return this.priority;
	 }
	
	/**
	 * @param priority int priority used for ordering similar delivery profiles
	 */
	 setPriority(priority) {
	 	this.priority = priority;
	 }
	
	/**
	 * Extra query string parameters that should be added to the url
	 * @return string
	 */
	 getExtraParams() {
	 	return this.extraParams;
	 }
	
	/**
	 * @param extraParams string Extra query string parameters that should be added to the url
	 */
	 setExtraParams(extraParams) {
	 	this.extraParams = extraParams;
	 }
	
	/**
	 * A filter that can be used to include additional assets in the URL (e.g. captions)
	 * @return AssetFilter
	 */
	 getSupplementaryAssetsFilter() {
	 	return this.supplementaryAssetsFilter;
	 }
	
	/**
	 * @param supplementaryAssetsFilter AssetFilter A filter that can be used to include additional assets in the URL (e.g. captions)
	 */
	 setSupplementaryAssetsFilter(supplementaryAssetsFilter) {
	 	this.supplementaryAssetsFilter = supplementaryAssetsFilter;
	 }
}
module.exports.DeliveryProfile = DeliveryProfile;

/**
 *
 */
class FileSyncDescriptor extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileSyncDescriptor';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFileSyncLocalPath() {
	 	return this.fileSyncLocalPath;
	 }
	
	/**
	 * @param fileSyncLocalPath string 
	 */
	 setFileSyncLocalPath(fileSyncLocalPath) {
	 	this.fileSyncLocalPath = fileSyncLocalPath;
	 }
	
	/**
	 * The translated path as used by the scheduler
	 * @return string
	 */
	 getFileSyncRemoteUrl() {
	 	return this.fileSyncRemoteUrl;
	 }
	
	/**
	 * @param fileSyncRemoteUrl string The translated path as used by the scheduler
	 */
	 setFileSyncRemoteUrl(fileSyncRemoteUrl) {
	 	this.fileSyncRemoteUrl = fileSyncRemoteUrl;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileSyncObjectSubType() {
	 	return this.fileSyncObjectSubType;
	 }
	
	/**
	 * @param fileSyncObjectSubType int 
	 */
	 setFileSyncObjectSubType(fileSyncObjectSubType) {
	 	this.fileSyncObjectSubType = fileSyncObjectSubType;
	 }
}
module.exports.FileSyncDescriptor = FileSyncDescriptor;

/**
 *
 */
class DestFileSyncDescriptor extends FileSyncDescriptor{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDestFileSyncDescriptor';
	}
}
module.exports.DestFileSyncDescriptor = DestFileSyncDescriptor;

/**
 *
 */
class FilterPager extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFilterPager';
	}
	
	/**
	 * The number of objects to retrieve. (Default is 30, maximum page size is 500)
	 * @return int
	 */
	 getPageSize() {
	 	return this.pageSize;
	 }
	
	/**
	 * @param pageSize int The number of objects to retrieve. (Default is 30, maximum page size is 500)
	 */
	 setPageSize(pageSize) {
	 	this.pageSize = pageSize;
	 }
	
	/**
	 * The page number for which {pageSize} of objects should be retrieved (Default is 1)
	 * @return int
	 */
	 getPageIndex() {
	 	return this.pageIndex;
	 }
	
	/**
	 * @param pageIndex int The page number for which {pageSize} of objects should be retrieved (Default is 1)
	 */
	 setPageIndex(pageIndex) {
	 	this.pageIndex = pageIndex;
	 }
}
module.exports.FilterPager = FilterPager;

/**
 *
 */
class ResponseProfileMapping extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileMapping';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getParentProperty() {
	 	return this.parentProperty;
	 }
	
	/**
	 * @param parentProperty string 
	 */
	 setParentProperty(parentProperty) {
	 	this.parentProperty = parentProperty;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFilterProperty() {
	 	return this.filterProperty;
	 }
	
	/**
	 * @param filterProperty string 
	 */
	 setFilterProperty(filterProperty) {
	 	this.filterProperty = filterProperty;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getAllowNull() {
	 	return this.allowNull;
	 }
	
	/**
	 * @param allowNull bool 
	 */
	 setAllowNull(allowNull) {
	 	this.allowNull = allowNull;
	 }
}
module.exports.ResponseProfileMapping = ResponseProfileMapping;

/**
 *
 */
class DetachedResponseProfile extends BaseResponseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDetachedResponseProfile';
	}
	
	/**
	 * Friendly name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Friendly name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Comma separated fields list to be included or excluded
	 * @return string
	 */
	 getFields() {
	 	return this.fields;
	 }
	
	/**
	 * @param fields string Comma separated fields list to be included or excluded
	 */
	 setFields(fields) {
	 	this.fields = fields;
	 }
	
	/**
	 * 
	 * @return RelatedFilter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter RelatedFilter 
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * 
	 * @return FilterPager
	 */
	 getPager() {
	 	return this.pager;
	 }
	
	/**
	 * @param pager FilterPager 
	 */
	 setPager(pager) {
	 	this.pager = pager;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getRelatedProfiles() {
	 	return this.relatedProfiles;
	 }
	
	/**
	 * @param relatedProfiles array 
	 */
	 setRelatedProfiles(relatedProfiles) {
	 	this.relatedProfiles = relatedProfiles;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getMappings() {
	 	return this.mappings;
	 }
	
	/**
	 * @param mappings array 
	 */
	 setMappings(mappings) {
	 	this.mappings = mappings;
	 }
}
module.exports.DetachedResponseProfile = DetachedResponseProfile;

/**
 *
 */
class DistributionFieldConfig extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionFieldConfig';
	}
	
	/**
	 * A value taken from a connector field enum which associates the current configuration to that connector field
 * Field enum class should be returned by the provider's getFieldEnumClass function
	 * @return string
	 */
	 getFieldName() {
	 	return this.fieldName;
	 }
	
	/**
	 * @param fieldName string A value taken from a connector field enum which associates the current configuration to that connector field
 * Field enum class should be returned by the provider's getFieldEnumClass function
	 */
	 setFieldName(fieldName) {
	 	this.fieldName = fieldName;
	 }
	
	/**
	 * A string that will be shown to the user as the field name in error messages related to the current field
	 * @return string
	 */
	 getUserFriendlyFieldName() {
	 	return this.userFriendlyFieldName;
	 }
	
	/**
	 * @param userFriendlyFieldName string A string that will be shown to the user as the field name in error messages related to the current field
	 */
	 setUserFriendlyFieldName(userFriendlyFieldName) {
	 	this.userFriendlyFieldName = userFriendlyFieldName;
	 }
	
	/**
	 * An XSLT string that extracts the right value from the Kaltura entry MRSS XML.
 * The value of the current connector field will be the one that is returned from transforming the Kaltura entry MRSS XML using this XSLT string
	 * @return string
	 */
	 getEntryMrssXslt() {
	 	return this.entryMrssXslt;
	 }
	
	/**
	 * @param entryMrssXslt string An XSLT string that extracts the right value from the Kaltura entry MRSS XML.
 * The value of the current connector field will be the one that is returned from transforming the Kaltura entry MRSS XML using this XSLT string
	 */
	 setEntryMrssXslt(entryMrssXslt) {
	 	this.entryMrssXslt = entryMrssXslt;
	 }
	
	/**
	 * Is the field required to have a value for submission ?
	 * @return int
	 */
	 getIsRequired() {
	 	return this.isRequired;
	 }
	
	/**
	 * @param isRequired int Is the field required to have a value for submission ?
	 */
	 setIsRequired(isRequired) {
	 	this.isRequired = isRequired;
	 }
	
	/**
	 * Trigger distribution update when this field changes or not ?
	 * @return bool
	 */
	 getUpdateOnChange() {
	 	return this.updateOnChange;
	 }
	
	/**
	 * @param updateOnChange bool Trigger distribution update when this field changes or not ?
	 */
	 setUpdateOnChange(updateOnChange) {
	 	this.updateOnChange = updateOnChange;
	 }
	
	/**
	 * Entry column or metadata xpath that should trigger an update
	 * @return array
	 */
	 getUpdateParams() {
	 	return this.updateParams;
	 }
	
	/**
	 * @param updateParams array Entry column or metadata xpath that should trigger an update
	 */
	 setUpdateParams(updateParams) {
	 	this.updateParams = updateParams;
	 }
	
	/**
	 * Is this field config is the default for the distribution provider?
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * Is an error on this field going to trigger deletion of distributed content?
	 * @return bool
	 */
	 getTriggerDeleteOnError() {
	 	return this.triggerDeleteOnError;
	 }
	
	/**
	 * @param triggerDeleteOnError bool Is an error on this field going to trigger deletion of distributed content?
	 */
	 setTriggerDeleteOnError(triggerDeleteOnError) {
	 	this.triggerDeleteOnError = triggerDeleteOnError;
	 }
}
module.exports.DistributionFieldConfig = DistributionFieldConfig;

/**
 *
 */
class DistributionJobProviderData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionJobProviderData';
	}
}
module.exports.DistributionJobProviderData = DistributionJobProviderData;

/**
 *
 */
class DistributionThumbDimensions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionThumbDimensions';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int 
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int 
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
}
module.exports.DistributionThumbDimensions = DistributionThumbDimensions;

/**
 *
 */
class DistributionProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProfile';
	}
	
	/**
	 * Auto generated unique id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Profile creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Profile last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProviderType() {
	 	return this.providerType;
	 }
	
	/**
	 * @param providerType string 
	 */
	 setProviderType(providerType) {
	 	this.providerType = providerType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSubmitEnabled() {
	 	return this.submitEnabled;
	 }
	
	/**
	 * @param submitEnabled int 
	 */
	 setSubmitEnabled(submitEnabled) {
	 	this.submitEnabled = submitEnabled;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdateEnabled() {
	 	return this.updateEnabled;
	 }
	
	/**
	 * @param updateEnabled int 
	 */
	 setUpdateEnabled(updateEnabled) {
	 	this.updateEnabled = updateEnabled;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeleteEnabled() {
	 	return this.deleteEnabled;
	 }
	
	/**
	 * @param deleteEnabled int 
	 */
	 setDeleteEnabled(deleteEnabled) {
	 	this.deleteEnabled = deleteEnabled;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReportEnabled() {
	 	return this.reportEnabled;
	 }
	
	/**
	 * @param reportEnabled int 
	 */
	 setReportEnabled(reportEnabled) {
	 	this.reportEnabled = reportEnabled;
	 }
	
	/**
	 * Comma separated flavor params ids that should be auto converted
	 * @return string
	 */
	 getAutoCreateFlavors() {
	 	return this.autoCreateFlavors;
	 }
	
	/**
	 * @param autoCreateFlavors string Comma separated flavor params ids that should be auto converted
	 */
	 setAutoCreateFlavors(autoCreateFlavors) {
	 	this.autoCreateFlavors = autoCreateFlavors;
	 }
	
	/**
	 * Comma separated thumbnail params ids that should be auto generated
	 * @return string
	 */
	 getAutoCreateThumb() {
	 	return this.autoCreateThumb;
	 }
	
	/**
	 * @param autoCreateThumb string Comma separated thumbnail params ids that should be auto generated
	 */
	 setAutoCreateThumb(autoCreateThumb) {
	 	this.autoCreateThumb = autoCreateThumb;
	 }
	
	/**
	 * Comma separated flavor params ids that should be submitted if ready
	 * @return string
	 */
	 getOptionalFlavorParamsIds() {
	 	return this.optionalFlavorParamsIds;
	 }
	
	/**
	 * @param optionalFlavorParamsIds string Comma separated flavor params ids that should be submitted if ready
	 */
	 setOptionalFlavorParamsIds(optionalFlavorParamsIds) {
	 	this.optionalFlavorParamsIds = optionalFlavorParamsIds;
	 }
	
	/**
	 * Comma separated flavor params ids that required to be ready before submission
	 * @return string
	 */
	 getRequiredFlavorParamsIds() {
	 	return this.requiredFlavorParamsIds;
	 }
	
	/**
	 * @param requiredFlavorParamsIds string Comma separated flavor params ids that required to be ready before submission
	 */
	 setRequiredFlavorParamsIds(requiredFlavorParamsIds) {
	 	this.requiredFlavorParamsIds = requiredFlavorParamsIds;
	 }
	
	/**
	 * Thumbnail dimensions that should be submitted if ready
	 * @return array
	 */
	 getOptionalThumbDimensions() {
	 	return this.optionalThumbDimensions;
	 }
	
	/**
	 * @param optionalThumbDimensions array Thumbnail dimensions that should be submitted if ready
	 */
	 setOptionalThumbDimensions(optionalThumbDimensions) {
	 	this.optionalThumbDimensions = optionalThumbDimensions;
	 }
	
	/**
	 * Thumbnail dimensions that required to be readt before submission
	 * @return array
	 */
	 getRequiredThumbDimensions() {
	 	return this.requiredThumbDimensions;
	 }
	
	/**
	 * @param requiredThumbDimensions array Thumbnail dimensions that required to be readt before submission
	 */
	 setRequiredThumbDimensions(requiredThumbDimensions) {
	 	this.requiredThumbDimensions = requiredThumbDimensions;
	 }
	
	/**
	 * Asset Distribution Rules for assets that should be submitted if ready
	 * @return array
	 */
	 getOptionalAssetDistributionRules() {
	 	return this.optionalAssetDistributionRules;
	 }
	
	/**
	 * @param optionalAssetDistributionRules array Asset Distribution Rules for assets that should be submitted if ready
	 */
	 setOptionalAssetDistributionRules(optionalAssetDistributionRules) {
	 	this.optionalAssetDistributionRules = optionalAssetDistributionRules;
	 }
	
	/**
	 * Assets Asset Distribution Rules for assets that are required to be ready before submission
	 * @return array
	 */
	 getRequiredAssetDistributionRules() {
	 	return this.requiredAssetDistributionRules;
	 }
	
	/**
	 * @param requiredAssetDistributionRules array Assets Asset Distribution Rules for assets that are required to be ready before submission
	 */
	 setRequiredAssetDistributionRules(requiredAssetDistributionRules) {
	 	this.requiredAssetDistributionRules = requiredAssetDistributionRules;
	 }
	
	/**
	 * If entry distribution sunrise not specified that will be the default since entry creation time, in seconds
	 * @return int
	 */
	 getSunriseDefaultOffset() {
	 	return this.sunriseDefaultOffset;
	 }
	
	/**
	 * @param sunriseDefaultOffset int If entry distribution sunrise not specified that will be the default since entry creation time, in seconds
	 */
	 setSunriseDefaultOffset(sunriseDefaultOffset) {
	 	this.sunriseDefaultOffset = sunriseDefaultOffset;
	 }
	
	/**
	 * If entry distribution sunset not specified that will be the default since entry creation time, in seconds
	 * @return int
	 */
	 getSunsetDefaultOffset() {
	 	return this.sunsetDefaultOffset;
	 }
	
	/**
	 * @param sunsetDefaultOffset int If entry distribution sunset not specified that will be the default since entry creation time, in seconds
	 */
	 setSunsetDefaultOffset(sunsetDefaultOffset) {
	 	this.sunsetDefaultOffset = sunsetDefaultOffset;
	 }
	
	/**
	 * The best external storage to be used to download the asset files from
	 * @return int
	 */
	 getRecommendedStorageProfileForDownload() {
	 	return this.recommendedStorageProfileForDownload;
	 }
	
	/**
	 * @param recommendedStorageProfileForDownload int The best external storage to be used to download the asset files from
	 */
	 setRecommendedStorageProfileForDownload(recommendedStorageProfileForDownload) {
	 	this.recommendedStorageProfileForDownload = recommendedStorageProfileForDownload;
	 }
	
	/**
	 * The best Kaltura data center to be used to download the asset files to
	 * @return int
	 */
	 getRecommendedDcForDownload() {
	 	return this.recommendedDcForDownload;
	 }
	
	/**
	 * @param recommendedDcForDownload int The best Kaltura data center to be used to download the asset files to
	 */
	 setRecommendedDcForDownload(recommendedDcForDownload) {
	 	this.recommendedDcForDownload = recommendedDcForDownload;
	 }
	
	/**
	 * The best Kaltura data center to be used to execute the distribution job
	 * @return int
	 */
	 getRecommendedDcForExecute() {
	 	return this.recommendedDcForExecute;
	 }
	
	/**
	 * @param recommendedDcForExecute int The best Kaltura data center to be used to execute the distribution job
	 */
	 setRecommendedDcForExecute(recommendedDcForExecute) {
	 	this.recommendedDcForExecute = recommendedDcForExecute;
	 }
}
module.exports.DistributionProfile = DistributionProfile;

/**
 *
 */
class DistributionProvider extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProvider';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getScheduleUpdateEnabled() {
	 	return this.scheduleUpdateEnabled;
	 }
	
	/**
	 * @param scheduleUpdateEnabled bool 
	 */
	 setScheduleUpdateEnabled(scheduleUpdateEnabled) {
	 	this.scheduleUpdateEnabled = scheduleUpdateEnabled;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getAvailabilityUpdateEnabled() {
	 	return this.availabilityUpdateEnabled;
	 }
	
	/**
	 * @param availabilityUpdateEnabled bool 
	 */
	 setAvailabilityUpdateEnabled(availabilityUpdateEnabled) {
	 	this.availabilityUpdateEnabled = availabilityUpdateEnabled;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getDeleteInsteadUpdate() {
	 	return this.deleteInsteadUpdate;
	 }
	
	/**
	 * @param deleteInsteadUpdate bool 
	 */
	 setDeleteInsteadUpdate(deleteInsteadUpdate) {
	 	this.deleteInsteadUpdate = deleteInsteadUpdate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIntervalBeforeSunrise() {
	 	return this.intervalBeforeSunrise;
	 }
	
	/**
	 * @param intervalBeforeSunrise int 
	 */
	 setIntervalBeforeSunrise(intervalBeforeSunrise) {
	 	this.intervalBeforeSunrise = intervalBeforeSunrise;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIntervalBeforeSunset() {
	 	return this.intervalBeforeSunset;
	 }
	
	/**
	 * @param intervalBeforeSunset int 
	 */
	 setIntervalBeforeSunset(intervalBeforeSunset) {
	 	this.intervalBeforeSunset = intervalBeforeSunset;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUpdateRequiredEntryFields() {
	 	return this.updateRequiredEntryFields;
	 }
	
	/**
	 * @param updateRequiredEntryFields string 
	 */
	 setUpdateRequiredEntryFields(updateRequiredEntryFields) {
	 	this.updateRequiredEntryFields = updateRequiredEntryFields;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUpdateRequiredMetadataXPaths() {
	 	return this.updateRequiredMetadataXPaths;
	 }
	
	/**
	 * @param updateRequiredMetadataXPaths string 
	 */
	 setUpdateRequiredMetadataXPaths(updateRequiredMetadataXPaths) {
	 	this.updateRequiredMetadataXPaths = updateRequiredMetadataXPaths;
	 }
}
module.exports.DistributionProvider = DistributionProvider;

/**
 *
 */
class DistributionRemoteMediaFile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionRemoteMediaFile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * @param version string 
	 */
	 setVersion(version) {
	 	this.version = version;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemoteId() {
	 	return this.remoteId;
	 }
	
	/**
	 * @param remoteId string 
	 */
	 setRemoteId(remoteId) {
	 	this.remoteId = remoteId;
	 }
}
module.exports.DistributionRemoteMediaFile = DistributionRemoteMediaFile;

/**
 *
 */
class DistributionValidationError extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationError';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action int 
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorType() {
	 	return this.errorType;
	 }
	
	/**
	 * @param errorType int 
	 */
	 setErrorType(errorType) {
	 	this.errorType = errorType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
}
module.exports.DistributionValidationError = DistributionValidationError;

/**
 *
 */
class DocumentEntry extends BaseEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDocumentEntry';
	}
	
	/**
	 * The type of the document
	 * @return int
	 */
	 getDocumentType() {
	 	return this.documentType;
	 }
	
	/**
	 * @param documentType int The type of the document
	 */
	 setDocumentType(documentType) {
	 	this.documentType = documentType;
	 }
	
	/**
	 * Comma separated asset params ids that exists for this media entry
	 * @return string
	 */
	 getAssetParamsIds() {
	 	return this.assetParamsIds;
	 }
}
module.exports.DocumentEntry = DocumentEntry;

/**
 *
 */
class DropFolderFileHandlerConfig extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFileHandlerConfig';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getHandlerType() {
	 	return this.handlerType;
	 }
}
module.exports.DropFolderFileHandlerConfig = DropFolderFileHandlerConfig;

/**
 *
 */
class DropFolder extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolder';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * @param conversionProfileId int 
	 */
	 setConversionProfileId(conversionProfileId) {
	 	this.conversionProfileId = conversionProfileId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDc() {
	 	return this.dc;
	 }
	
	/**
	 * @param dc int 
	 */
	 setDc(dc) {
	 	this.dc = dc;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPath() {
	 	return this.path;
	 }
	
	/**
	 * @param path string 
	 */
	 setPath(path) {
	 	this.path = path;
	 }
	
	/**
	 * The ammount of time, in seconds, that should pass so that a file with no change in size we'll be treated as "finished uploading to folder"
	 * @return int
	 */
	 getFileSizeCheckInterval() {
	 	return this.fileSizeCheckInterval;
	 }
	
	/**
	 * @param fileSizeCheckInterval int The ammount of time, in seconds, that should pass so that a file with no change in size we'll be treated as "finished uploading to folder"
	 */
	 setFileSizeCheckInterval(fileSizeCheckInterval) {
	 	this.fileSizeCheckInterval = fileSizeCheckInterval;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileDeletePolicy() {
	 	return this.fileDeletePolicy;
	 }
	
	/**
	 * @param fileDeletePolicy int 
	 */
	 setFileDeletePolicy(fileDeletePolicy) {
	 	this.fileDeletePolicy = fileDeletePolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAutoFileDeleteDays() {
	 	return this.autoFileDeleteDays;
	 }
	
	/**
	 * @param autoFileDeleteDays int 
	 */
	 setAutoFileDeleteDays(autoFileDeleteDays) {
	 	this.autoFileDeleteDays = autoFileDeleteDays;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileHandlerType() {
	 	return this.fileHandlerType;
	 }
	
	/**
	 * @param fileHandlerType string 
	 */
	 setFileHandlerType(fileHandlerType) {
	 	this.fileHandlerType = fileHandlerType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNamePatterns() {
	 	return this.fileNamePatterns;
	 }
	
	/**
	 * @param fileNamePatterns string 
	 */
	 setFileNamePatterns(fileNamePatterns) {
	 	this.fileNamePatterns = fileNamePatterns;
	 }
	
	/**
	 * 
	 * @return DropFolderFileHandlerConfig
	 */
	 getFileHandlerConfig() {
	 	return this.fileHandlerConfig;
	 }
	
	/**
	 * @param fileHandlerConfig DropFolderFileHandlerConfig 
	 */
	 setFileHandlerConfig(fileHandlerConfig) {
	 	this.fileHandlerConfig = fileHandlerConfig;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCode() {
	 	return this.errorCode;
	 }
	
	/**
	 * @param errorCode string 
	 */
	 setErrorCode(errorCode) {
	 	this.errorCode = errorCode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorDescription() {
	 	return this.errorDescription;
	 }
	
	/**
	 * @param errorDescription string 
	 */
	 setErrorDescription(errorDescription) {
	 	this.errorDescription = errorDescription;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIgnoreFileNamePatterns() {
	 	return this.ignoreFileNamePatterns;
	 }
	
	/**
	 * @param ignoreFileNamePatterns string 
	 */
	 setIgnoreFileNamePatterns(ignoreFileNamePatterns) {
	 	this.ignoreFileNamePatterns = ignoreFileNamePatterns;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastAccessedAt() {
	 	return this.lastAccessedAt;
	 }
	
	/**
	 * @param lastAccessedAt int 
	 */
	 setLastAccessedAt(lastAccessedAt) {
	 	this.lastAccessedAt = lastAccessedAt;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIncremental() {
	 	return this.incremental;
	 }
	
	/**
	 * @param incremental bool 
	 */
	 setIncremental(incremental) {
	 	this.incremental = incremental;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastFileTimestamp() {
	 	return this.lastFileTimestamp;
	 }
	
	/**
	 * @param lastFileTimestamp int 
	 */
	 setLastFileTimestamp(lastFileTimestamp) {
	 	this.lastFileTimestamp = lastFileTimestamp;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileId() {
	 	return this.metadataProfileId;
	 }
	
	/**
	 * @param metadataProfileId int 
	 */
	 setMetadataProfileId(metadataProfileId) {
	 	this.metadataProfileId = metadataProfileId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesMetadataFieldName() {
	 	return this.categoriesMetadataFieldName;
	 }
	
	/**
	 * @param categoriesMetadataFieldName string 
	 */
	 setCategoriesMetadataFieldName(categoriesMetadataFieldName) {
	 	this.categoriesMetadataFieldName = categoriesMetadataFieldName;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getEnforceEntitlement() {
	 	return this.enforceEntitlement;
	 }
	
	/**
	 * @param enforceEntitlement bool 
	 */
	 setEnforceEntitlement(enforceEntitlement) {
	 	this.enforceEntitlement = enforceEntitlement;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getShouldValidateKS() {
	 	return this.shouldValidateKS;
	 }
	
	/**
	 * @param shouldValidateKS bool 
	 */
	 setShouldValidateKS(shouldValidateKS) {
	 	this.shouldValidateKS = shouldValidateKS;
	 }
}
module.exports.DropFolder = DropFolder;

/**
 *
 */
class DropFolderFile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDropFolderId() {
	 	return this.dropFolderId;
	 }
	
	/**
	 * @param dropFolderId int 
	 */
	 setDropFolderId(dropFolderId) {
	 	this.dropFolderId = dropFolderId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileName() {
	 	return this.fileName;
	 }
	
	/**
	 * @param fileName string 
	 */
	 setFileName(fileName) {
	 	this.fileName = fileName;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * @param fileSize float 
	 */
	 setFileSize(fileSize) {
	 	this.fileSize = fileSize;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileSizeLastSetAt() {
	 	return this.fileSizeLastSetAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedSlug() {
	 	return this.parsedSlug;
	 }
	
	/**
	 * @param parsedSlug string 
	 */
	 setParsedSlug(parsedSlug) {
	 	this.parsedSlug = parsedSlug;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedFlavor() {
	 	return this.parsedFlavor;
	 }
	
	/**
	 * @param parsedFlavor string 
	 */
	 setParsedFlavor(parsedFlavor) {
	 	this.parsedFlavor = parsedFlavor;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedUserId() {
	 	return this.parsedUserId;
	 }
	
	/**
	 * @param parsedUserId string 
	 */
	 setParsedUserId(parsedUserId) {
	 	this.parsedUserId = parsedUserId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLeadDropFolderFileId() {
	 	return this.leadDropFolderFileId;
	 }
	
	/**
	 * @param leadDropFolderFileId int 
	 */
	 setLeadDropFolderFileId(leadDropFolderFileId) {
	 	this.leadDropFolderFileId = leadDropFolderFileId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedDropFolderFileId() {
	 	return this.deletedDropFolderFileId;
	 }
	
	/**
	 * @param deletedDropFolderFileId int 
	 */
	 setDeletedDropFolderFileId(deletedDropFolderFileId) {
	 	this.deletedDropFolderFileId = deletedDropFolderFileId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCode() {
	 	return this.errorCode;
	 }
	
	/**
	 * @param errorCode string 
	 */
	 setErrorCode(errorCode) {
	 	this.errorCode = errorCode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorDescription() {
	 	return this.errorDescription;
	 }
	
	/**
	 * @param errorDescription string 
	 */
	 setErrorDescription(errorDescription) {
	 	this.errorDescription = errorDescription;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLastModificationTime() {
	 	return this.lastModificationTime;
	 }
	
	/**
	 * @param lastModificationTime string 
	 */
	 setLastModificationTime(lastModificationTime) {
	 	this.lastModificationTime = lastModificationTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUploadStartDetectedAt() {
	 	return this.uploadStartDetectedAt;
	 }
	
	/**
	 * @param uploadStartDetectedAt int 
	 */
	 setUploadStartDetectedAt(uploadStartDetectedAt) {
	 	this.uploadStartDetectedAt = uploadStartDetectedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUploadEndDetectedAt() {
	 	return this.uploadEndDetectedAt;
	 }
	
	/**
	 * @param uploadEndDetectedAt int 
	 */
	 setUploadEndDetectedAt(uploadEndDetectedAt) {
	 	this.uploadEndDetectedAt = uploadEndDetectedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getImportStartedAt() {
	 	return this.importStartedAt;
	 }
	
	/**
	 * @param importStartedAt int 
	 */
	 setImportStartedAt(importStartedAt) {
	 	this.importStartedAt = importStartedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getImportEndedAt() {
	 	return this.importEndedAt;
	 }
	
	/**
	 * @param importEndedAt int 
	 */
	 setImportEndedAt(importEndedAt) {
	 	this.importEndedAt = importEndedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchJobId() {
	 	return this.batchJobId;
	 }
}
module.exports.DropFolderFile = DropFolderFile;

/**
 *
 */
class EmailIngestionProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailIngestionProfile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEmailAddress() {
	 	return this.emailAddress;
	 }
	
	/**
	 * @param emailAddress string 
	 */
	 setEmailAddress(emailAddress) {
	 	this.emailAddress = emailAddress;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMailboxId() {
	 	return this.mailboxId;
	 }
	
	/**
	 * @param mailboxId string 
	 */
	 setMailboxId(mailboxId) {
	 	this.mailboxId = mailboxId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getConversionProfile2Id() {
	 	return this.conversionProfile2Id;
	 }
	
	/**
	 * @param conversionProfile2Id int 
	 */
	 setConversionProfile2Id(conversionProfile2Id) {
	 	this.conversionProfile2Id = conversionProfile2Id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getModerationStatus() {
	 	return this.moderationStatus;
	 }
	
	/**
	 * @param moderationStatus int 
	 */
	 setModerationStatus(moderationStatus) {
	 	this.moderationStatus = moderationStatus;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultCategory() {
	 	return this.defaultCategory;
	 }
	
	/**
	 * @param defaultCategory string 
	 */
	 setDefaultCategory(defaultCategory) {
	 	this.defaultCategory = defaultCategory;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultUserId() {
	 	return this.defaultUserId;
	 }
	
	/**
	 * @param defaultUserId string 
	 */
	 setDefaultUserId(defaultUserId) {
	 	this.defaultUserId = defaultUserId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultTags() {
	 	return this.defaultTags;
	 }
	
	/**
	 * @param defaultTags string 
	 */
	 setDefaultTags(defaultTags) {
	 	this.defaultTags = defaultTags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultAdminTags() {
	 	return this.defaultAdminTags;
	 }
	
	/**
	 * @param defaultAdminTags string 
	 */
	 setDefaultAdminTags(defaultAdminTags) {
	 	this.defaultAdminTags = defaultAdminTags;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMaxAttachmentSizeKbytes() {
	 	return this.maxAttachmentSizeKbytes;
	 }
	
	/**
	 * @param maxAttachmentSizeKbytes int 
	 */
	 setMaxAttachmentSizeKbytes(maxAttachmentSizeKbytes) {
	 	this.maxAttachmentSizeKbytes = maxAttachmentSizeKbytes;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMaxAttachmentsPerMail() {
	 	return this.maxAttachmentsPerMail;
	 }
	
	/**
	 * @param maxAttachmentsPerMail int 
	 */
	 setMaxAttachmentsPerMail(maxAttachmentsPerMail) {
	 	this.maxAttachmentsPerMail = maxAttachmentsPerMail;
	 }
}
module.exports.EmailIngestionProfile = EmailIngestionProfile;

/**
 *
 */
class StringValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringValue';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.StringValue = StringValue;

/**
 *
 */
class EmailNotificationRecipient extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationRecipient';
	}
	
	/**
	 * Recipient e-mail address
	 * @return StringValue
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email StringValue Recipient e-mail address
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * Recipient name
	 * @return StringValue
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name StringValue Recipient name
	 */
	 setName(name) {
	 	this.name = name;
	 }
}
module.exports.EmailNotificationRecipient = EmailNotificationRecipient;

/**
 *
 */
class EmailNotificationRecipientJobData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationRecipientJobData';
	}
	
	/**
	 * Provider type of the job data
	 * @return string
	 */
	 getProviderType() {
	 	return this.providerType;
	 }
}
module.exports.EmailNotificationRecipientJobData = EmailNotificationRecipientJobData;

/**
 *
 */
class EmailNotificationRecipientProvider extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationRecipientProvider';
	}
}
module.exports.EmailNotificationRecipientProvider = EmailNotificationRecipientProvider;

/**
 *
 */
class EntryDistribution extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryDistribution';
	}
	
	/**
	 * Auto generated unique id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Entry distribution creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Entry distribution last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Entry distribution submission date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getSubmittedAt() {
	 	return this.submittedAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDistributionProfileId() {
	 	return this.distributionProfileId;
	 }
	
	/**
	 * @param distributionProfileId int 
	 */
	 setDistributionProfileId(distributionProfileId) {
	 	this.distributionProfileId = distributionProfileId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSunStatus() {
	 	return this.sunStatus;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDirtyStatus() {
	 	return this.dirtyStatus;
	 }
	
	/**
	 * Comma separated thumbnail asset ids
	 * @return string
	 */
	 getThumbAssetIds() {
	 	return this.thumbAssetIds;
	 }
	
	/**
	 * @param thumbAssetIds string Comma separated thumbnail asset ids
	 */
	 setThumbAssetIds(thumbAssetIds) {
	 	this.thumbAssetIds = thumbAssetIds;
	 }
	
	/**
	 * Comma separated flavor asset ids
	 * @return string
	 */
	 getFlavorAssetIds() {
	 	return this.flavorAssetIds;
	 }
	
	/**
	 * @param flavorAssetIds string Comma separated flavor asset ids
	 */
	 setFlavorAssetIds(flavorAssetIds) {
	 	this.flavorAssetIds = flavorAssetIds;
	 }
	
	/**
	 * Comma separated asset ids
	 * @return string
	 */
	 getAssetIds() {
	 	return this.assetIds;
	 }
	
	/**
	 * @param assetIds string Comma separated asset ids
	 */
	 setAssetIds(assetIds) {
	 	this.assetIds = assetIds;
	 }
	
	/**
	 * Entry distribution publish time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getSunrise() {
	 	return this.sunrise;
	 }
	
	/**
	 * @param sunrise int Entry distribution publish time as Unix timestamp (In seconds)
	 */
	 setSunrise(sunrise) {
	 	this.sunrise = sunrise;
	 }
	
	/**
	 * Entry distribution un-publish time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getSunset() {
	 	return this.sunset;
	 }
	
	/**
	 * @param sunset int Entry distribution un-publish time as Unix timestamp (In seconds)
	 */
	 setSunset(sunset) {
	 	this.sunset = sunset;
	 }
	
	/**
	 * The id as returned from the distributed destination
	 * @return string
	 */
	 getRemoteId() {
	 	return this.remoteId;
	 }
	
	/**
	 * The plays as retrieved from the remote destination reports
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * The views as retrieved from the remote destination reports
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getValidationErrors() {
	 	return this.validationErrors;
	 }
	
	/**
	 * @param validationErrors array 
	 */
	 setValidationErrors(validationErrors) {
	 	this.validationErrors = validationErrors;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorType() {
	 	return this.errorType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorNumber() {
	 	return this.errorNumber;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorDescription() {
	 	return this.errorDescription;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHasSubmitResultsLog() {
	 	return this.hasSubmitResultsLog;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHasSubmitSentDataLog() {
	 	return this.hasSubmitSentDataLog;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHasUpdateResultsLog() {
	 	return this.hasUpdateResultsLog;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHasUpdateSentDataLog() {
	 	return this.hasUpdateSentDataLog;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHasDeleteResultsLog() {
	 	return this.hasDeleteResultsLog;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHasDeleteSentDataLog() {
	 	return this.hasDeleteSentDataLog;
	 }
}
module.exports.EntryDistribution = EntryDistribution;

/**
 *
 */
class PluginReplacementOptionsItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPluginReplacementOptionsItem';
	}
}
module.exports.PluginReplacementOptionsItem = PluginReplacementOptionsItem;

/**
 *
 */
class EntryReplacementOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryReplacementOptions';
	}
	
	/**
	 * If true manually created thumbnails will not be deleted on entry replacement
	 * @return int
	 */
	 getKeepManualThumbnails() {
	 	return this.keepManualThumbnails;
	 }
	
	/**
	 * @param keepManualThumbnails int If true manually created thumbnails will not be deleted on entry replacement
	 */
	 setKeepManualThumbnails(keepManualThumbnails) {
	 	this.keepManualThumbnails = keepManualThumbnails;
	 }
	
	/**
	 * Array of plugin replacement options
	 * @return array
	 */
	 getPluginOptionItems() {
	 	return this.pluginOptionItems;
	 }
	
	/**
	 * @param pluginOptionItems array Array of plugin replacement options
	 */
	 setPluginOptionItems(pluginOptionItems) {
	 	this.pluginOptionItems = pluginOptionItems;
	 }
}
module.exports.EntryReplacementOptions = EntryReplacementOptions;

/**
 *
 */
class EntryServerNode extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryServerNode';
	}
	
	/**
	 * unique auto-generated identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getServerNodeId() {
	 	return this.serverNodeId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerType() {
	 	return this.serverType;
	 }
}
module.exports.EntryServerNode = EntryServerNode;

/**
 *
 */
class EventNotificationParameter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationParameter';
	}
	
	/**
	 * The key in the subject and body to be replaced with the dynamic value
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string The key in the subject and body to be replaced with the dynamic value
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * The dynamic value to be placed in the final output
	 * @return StringValue
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value StringValue The dynamic value to be placed in the final output
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.EventNotificationParameter = EventNotificationParameter;

/**
 *
 */
class EventNotificationTemplate extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationTemplate';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Define that the template could be dispatched manually from the API
	 * @return bool
	 */
	 getManualDispatchEnabled() {
	 	return this.manualDispatchEnabled;
	 }
	
	/**
	 * @param manualDispatchEnabled bool Define that the template could be dispatched manually from the API
	 */
	 setManualDispatchEnabled(manualDispatchEnabled) {
	 	this.manualDispatchEnabled = manualDispatchEnabled;
	 }
	
	/**
	 * Define that the template could be dispatched automatically by the system
	 * @return bool
	 */
	 getAutomaticDispatchEnabled() {
	 	return this.automaticDispatchEnabled;
	 }
	
	/**
	 * @param automaticDispatchEnabled bool Define that the template could be dispatched automatically by the system
	 */
	 setAutomaticDispatchEnabled(automaticDispatchEnabled) {
	 	this.automaticDispatchEnabled = automaticDispatchEnabled;
	 }
	
	/**
	 * Define the event that should trigger this notification
	 * @return string
	 */
	 getEventType() {
	 	return this.eventType;
	 }
	
	/**
	 * @param eventType string Define the event that should trigger this notification
	 */
	 setEventType(eventType) {
	 	this.eventType = eventType;
	 }
	
	/**
	 * Define the object that raied the event that should trigger this notification
	 * @return string
	 */
	 getEventObjectType() {
	 	return this.eventObjectType;
	 }
	
	/**
	 * @param eventObjectType string Define the object that raied the event that should trigger this notification
	 */
	 setEventObjectType(eventObjectType) {
	 	this.eventObjectType = eventObjectType;
	 }
	
	/**
	 * Define the conditions that cause this notification to be triggered
	 * @return array
	 */
	 getEventConditions() {
	 	return this.eventConditions;
	 }
	
	/**
	 * @param eventConditions array Define the conditions that cause this notification to be triggered
	 */
	 setEventConditions(eventConditions) {
	 	this.eventConditions = eventConditions;
	 }
	
	/**
	 * Define the content dynamic parameters
	 * @return array
	 */
	 getContentParameters() {
	 	return this.contentParameters;
	 }
	
	/**
	 * @param contentParameters array Define the content dynamic parameters
	 */
	 setContentParameters(contentParameters) {
	 	this.contentParameters = contentParameters;
	 }
	
	/**
	 * Define the content dynamic parameters
	 * @return array
	 */
	 getUserParameters() {
	 	return this.userParameters;
	 }
	
	/**
	 * @param userParameters array Define the content dynamic parameters
	 */
	 setUserParameters(userParameters) {
	 	this.userParameters = userParameters;
	 }
}
module.exports.EventNotificationTemplate = EventNotificationTemplate;

/**
 *
 */
class ObjectIdentifier extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaObjectIdentifier';
	}
	
	/**
	 * Comma separated string of enum values denoting which features of the item need to be included in the MRSS
	 * @return string
	 */
	 getExtendedFeatures() {
	 	return this.extendedFeatures;
	 }
	
	/**
	 * @param extendedFeatures string Comma separated string of enum values denoting which features of the item need to be included in the MRSS
	 */
	 setExtendedFeatures(extendedFeatures) {
	 	this.extendedFeatures = extendedFeatures;
	 }
}
module.exports.ObjectIdentifier = ObjectIdentifier;

/**
 *
 */
class ExtendingItemMrssParameter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExtendingItemMrssParameter';
	}
	
	/**
	 * XPath for the extending item
	 * @return string
	 */
	 getXpath() {
	 	return this.xpath;
	 }
	
	/**
	 * @param xpath string XPath for the extending item
	 */
	 setXpath(xpath) {
	 	this.xpath = xpath;
	 }
	
	/**
	 * Object identifier
	 * @return ObjectIdentifier
	 */
	 getIdentifier() {
	 	return this.identifier;
	 }
	
	/**
	 * @param identifier ObjectIdentifier Object identifier
	 */
	 setIdentifier(identifier) {
	 	this.identifier = identifier;
	 }
	
	/**
	 * Mode of extension - append to MRSS or replace the xpath content
	 * @return int
	 */
	 getExtensionMode() {
	 	return this.extensionMode;
	 }
	
	/**
	 * @param extensionMode int Mode of extension - append to MRSS or replace the xpath content
	 */
	 setExtensionMode(extensionMode) {
	 	this.extensionMode = extensionMode;
	 }
}
module.exports.ExtendingItemMrssParameter = ExtendingItemMrssParameter;

/**
 *
 */
class PlayableEntry extends BaseEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayableEntry';
	}
	
	/**
	 * Number of plays
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * Number of views
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * The last time the entry was played
	 * @return int
	 */
	 getLastPlayedAt() {
	 	return this.lastPlayedAt;
	 }
	
	/**
	 * The width in pixels
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * The height in pixels
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * The duration in seconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * The duration in miliseconds
	 * @return int
	 */
	 getMsDuration() {
	 	return this.msDuration;
	 }
	
	/**
	 * @param msDuration int The duration in miliseconds
	 */
	 setMsDuration(msDuration) {
	 	this.msDuration = msDuration;
	 }
	
	/**
	 * The duration type (short for 0-4 mins, medium for 4-20 mins, long for 20+ mins)
	 * @return string
	 */
	 getDurationType() {
	 	return this.durationType;
	 }
}
module.exports.PlayableEntry = PlayableEntry;

/**
 *
 */
class StreamContainer extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStreamContainer';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTrackIndex() {
	 	return this.trackIndex;
	 }
	
	/**
	 * @param trackIndex int 
	 */
	 setTrackIndex(trackIndex) {
	 	this.trackIndex = trackIndex;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string 
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getChannelIndex() {
	 	return this.channelIndex;
	 }
	
	/**
	 * @param channelIndex int 
	 */
	 setChannelIndex(channelIndex) {
	 	this.channelIndex = channelIndex;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string 
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getChannelLayout() {
	 	return this.channelLayout;
	 }
	
	/**
	 * @param channelLayout string 
	 */
	 setChannelLayout(channelLayout) {
	 	this.channelLayout = channelLayout;
	 }
}
module.exports.StreamContainer = StreamContainer;

/**
 *
 */
class MediaEntry extends PlayableEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaEntry';
	}
	
	/**
	 * The media type of the entry
	 * @return int
	 */
	 getMediaType() {
	 	return this.mediaType;
	 }
	
	/**
	 * @param mediaType int The media type of the entry
	 */
	 setMediaType(mediaType) {
	 	this.mediaType = mediaType;
	 }
	
	/**
	 * Override the default conversion quality
	 * @return string
	 */
	 getConversionQuality() {
	 	return this.conversionQuality;
	 }
	
	/**
	 * @param conversionQuality string Override the default conversion quality
	 */
	 setConversionQuality(conversionQuality) {
	 	this.conversionQuality = conversionQuality;
	 }
	
	/**
	 * The source type of the entry
	 * @return string
	 */
	 getSourceType() {
	 	return this.sourceType;
	 }
	
	/**
	 * @param sourceType string The source type of the entry
	 */
	 setSourceType(sourceType) {
	 	this.sourceType = sourceType;
	 }
	
	/**
	 * The search provider type used to import this entry
	 * @return int
	 */
	 getSearchProviderType() {
	 	return this.searchProviderType;
	 }
	
	/**
	 * @param searchProviderType int The search provider type used to import this entry
	 */
	 setSearchProviderType(searchProviderType) {
	 	this.searchProviderType = searchProviderType;
	 }
	
	/**
	 * The ID of the media in the importing site
	 * @return string
	 */
	 getSearchProviderId() {
	 	return this.searchProviderId;
	 }
	
	/**
	 * @param searchProviderId string The ID of the media in the importing site
	 */
	 setSearchProviderId(searchProviderId) {
	 	this.searchProviderId = searchProviderId;
	 }
	
	/**
	 * The user name used for credits
	 * @return string
	 */
	 getCreditUserName() {
	 	return this.creditUserName;
	 }
	
	/**
	 * @param creditUserName string The user name used for credits
	 */
	 setCreditUserName(creditUserName) {
	 	this.creditUserName = creditUserName;
	 }
	
	/**
	 * The URL for credits
	 * @return string
	 */
	 getCreditUrl() {
	 	return this.creditUrl;
	 }
	
	/**
	 * @param creditUrl string The URL for credits
	 */
	 setCreditUrl(creditUrl) {
	 	this.creditUrl = creditUrl;
	 }
	
	/**
	 * The media date extracted from EXIF data (For images) as Unix timestamp (In seconds)
	 * @return int
	 */
	 getMediaDate() {
	 	return this.mediaDate;
	 }
	
	/**
	 * The URL used for playback. This is not the download URL
	 * @return string
	 */
	 getDataUrl() {
	 	return this.dataUrl;
	 }
	
	/**
	 * Comma separated flavor params ids that exists for this media entry
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * True if trim action is disabled for this entry
	 * @return int
	 */
	 getIsTrimDisabled() {
	 	return this.isTrimDisabled;
	 }
	
	/**
	 * Array of streams that exists on the entry
	 * @return array
	 */
	 getStreams() {
	 	return this.streams;
	 }
	
	/**
	 * @param streams array Array of streams that exists on the entry
	 */
	 setStreams(streams) {
	 	this.streams = streams;
	 }
}
module.exports.MediaEntry = MediaEntry;

/**
 *
 */
class ExternalMediaEntry extends MediaEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalMediaEntry';
	}
	
	/**
	 * The source type of the external media
	 * @return string
	 */
	 getExternalSourceType() {
	 	return this.externalSourceType;
	 }
	
	/**
	 * @param externalSourceType string The source type of the external media
	 */
	 setExternalSourceType(externalSourceType) {
	 	this.externalSourceType = externalSourceType;
	 }
	
	/**
	 * Comma separated asset params ids that exists for this external media entry
	 * @return string
	 */
	 getAssetParamsIds() {
	 	return this.assetParamsIds;
	 }
}
module.exports.ExternalMediaEntry = ExternalMediaEntry;

/**
 *
 */
class FacebookCaptionDistributionInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookCaptionDistributionInfo';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string 
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string 
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFilePath() {
	 	return this.filePath;
	 }
	
	/**
	 * @param filePath string 
	 */
	 setFilePath(filePath) {
	 	this.filePath = filePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemoteId() {
	 	return this.remoteId;
	 }
	
	/**
	 * @param remoteId string 
	 */
	 setRemoteId(remoteId) {
	 	this.remoteId = remoteId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * @param version string 
	 */
	 setVersion(version) {
	 	this.version = version;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.FacebookCaptionDistributionInfo = FacebookCaptionDistributionInfo;

/**
 *
 */
class FeatureStatus extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeatureStatus';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.FeatureStatus = FeatureStatus;

/**
 *
 */
class FeedItemInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeedItemInfo';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getItemXPath() {
	 	return this.itemXPath;
	 }
	
	/**
	 * @param itemXPath string 
	 */
	 setItemXPath(itemXPath) {
	 	this.itemXPath = itemXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemPublishDateXPath() {
	 	return this.itemPublishDateXPath;
	 }
	
	/**
	 * @param itemPublishDateXPath string 
	 */
	 setItemPublishDateXPath(itemPublishDateXPath) {
	 	this.itemPublishDateXPath = itemPublishDateXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemUniqueIdentifierXPath() {
	 	return this.itemUniqueIdentifierXPath;
	 }
	
	/**
	 * @param itemUniqueIdentifierXPath string 
	 */
	 setItemUniqueIdentifierXPath(itemUniqueIdentifierXPath) {
	 	this.itemUniqueIdentifierXPath = itemUniqueIdentifierXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemContentFileSizeXPath() {
	 	return this.itemContentFileSizeXPath;
	 }
	
	/**
	 * @param itemContentFileSizeXPath string 
	 */
	 setItemContentFileSizeXPath(itemContentFileSizeXPath) {
	 	this.itemContentFileSizeXPath = itemContentFileSizeXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemContentUrlXPath() {
	 	return this.itemContentUrlXPath;
	 }
	
	/**
	 * @param itemContentUrlXPath string 
	 */
	 setItemContentUrlXPath(itemContentUrlXPath) {
	 	this.itemContentUrlXPath = itemContentUrlXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemContentBitrateXPath() {
	 	return this.itemContentBitrateXPath;
	 }
	
	/**
	 * @param itemContentBitrateXPath string 
	 */
	 setItemContentBitrateXPath(itemContentBitrateXPath) {
	 	this.itemContentBitrateXPath = itemContentBitrateXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemHashXPath() {
	 	return this.itemHashXPath;
	 }
	
	/**
	 * @param itemHashXPath string 
	 */
	 setItemHashXPath(itemHashXPath) {
	 	this.itemHashXPath = itemHashXPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getItemContentXpath() {
	 	return this.itemContentXpath;
	 }
	
	/**
	 * @param itemContentXpath string 
	 */
	 setItemContentXpath(itemContentXpath) {
	 	this.itemContentXpath = itemContentXpath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentBitrateAttributeName() {
	 	return this.contentBitrateAttributeName;
	 }
	
	/**
	 * @param contentBitrateAttributeName string 
	 */
	 setContentBitrateAttributeName(contentBitrateAttributeName) {
	 	this.contentBitrateAttributeName = contentBitrateAttributeName;
	 }
}
module.exports.FeedItemInfo = FeedItemInfo;

/**
 *
 */
class FileAsset extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileAsset';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileAssetObjectType() {
	 	return this.fileAssetObjectType;
	 }
	
	/**
	 * @param fileAssetObjectType string 
	 */
	 setFileAssetObjectType(fileAssetObjectType) {
	 	this.fileAssetObjectType = fileAssetObjectType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string 
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileExt() {
	 	return this.fileExt;
	 }
	
	/**
	 * @param fileExt string 
	 */
	 setFileExt(fileExt) {
	 	this.fileExt = fileExt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
}
module.exports.FileAsset = FileAsset;

/**
 *
 */
class FileSync extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileSync';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileObjectType() {
	 	return this.fileObjectType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getObjectSubType() {
	 	return this.objectSubType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDc() {
	 	return this.dc;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getOriginal() {
	 	return this.original;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyAt() {
	 	return this.readyAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSyncTime() {
	 	return this.syncTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileType() {
	 	return this.fileType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLinkedId() {
	 	return this.linkedId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLinkCount() {
	 	return this.linkCount;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileRoot() {
	 	return this.fileRoot;
	 }
	
	/**
	 * @param fileRoot string 
	 */
	 setFileRoot(fileRoot) {
	 	this.fileRoot = fileRoot;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFilePath() {
	 	return this.filePath;
	 }
	
	/**
	 * @param filePath string 
	 */
	 setFilePath(filePath) {
	 	this.filePath = filePath;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileUrl() {
	 	return this.fileUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileContent() {
	 	return this.fileContent;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getFileDiscSize() {
	 	return this.fileDiscSize;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsCurrentDc() {
	 	return this.isCurrentDc;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsDir() {
	 	return this.isDir;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getOriginalId() {
	 	return this.originalId;
	 }
}
module.exports.FileSync = FileSync;

/**
 *
 */
class FlavorAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorAsset';
	}
	
	/**
	 * The Flavor Params used to create this Flavor Asset
	 * @return int
	 */
	 getFlavorParamsId() {
	 	return this.flavorParamsId;
	 }
	
	/**
	 * @param flavorParamsId int The Flavor Params used to create this Flavor Asset
	 */
	 setFlavorParamsId(flavorParamsId) {
	 	this.flavorParamsId = flavorParamsId;
	 }
	
	/**
	 * The width of the Flavor Asset
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * The height of the Flavor Asset
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * The overall bitrate (in KBits) of the Flavor Asset
	 * @return int
	 */
	 getBitrate() {
	 	return this.bitrate;
	 }
	
	/**
	 * The frame rate (in FPS) of the Flavor Asset
	 * @return float
	 */
	 getFrameRate() {
	 	return this.frameRate;
	 }
	
	/**
	 * True if this Flavor Asset is the original source
	 * @return bool
	 */
	 getIsOriginal() {
	 	return this.isOriginal;
	 }
	
	/**
	 * True if this Flavor Asset is playable in KDP
	 * @return bool
	 */
	 getIsWeb() {
	 	return this.isWeb;
	 }
	
	/**
	 * The container format
	 * @return string
	 */
	 getContainerFormat() {
	 	return this.containerFormat;
	 }
	
	/**
	 * The video codec
	 * @return string
	 */
	 getVideoCodecId() {
	 	return this.videoCodecId;
	 }
	
	/**
	 * The status of the Flavor Asset
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * The language of the flavor asset
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string The language of the flavor asset
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * The label of the flavor asset
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
}
module.exports.FlavorAsset = FlavorAsset;

/**
 *
 */
class FlavorAssetUrlOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorAssetUrlOptions';
	}
	
	/**
	 * The name of the downloaded file
	 * @return string
	 */
	 getFileName() {
	 	return this.fileName;
	 }
	
	/**
	 * @param fileName string The name of the downloaded file
	 */
	 setFileName(fileName) {
	 	this.fileName = fileName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferrer() {
	 	return this.referrer;
	 }
	
	/**
	 * @param referrer string 
	 */
	 setReferrer(referrer) {
	 	this.referrer = referrer;
	 }
}
module.exports.FlavorAssetUrlOptions = FlavorAssetUrlOptions;

/**
 *
 */
class FlavorParams extends AssetParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorParams';
	}
	
	/**
	 * The video codec of the Flavor Params
	 * @return string
	 */
	 getVideoCodec() {
	 	return this.videoCodec;
	 }
	
	/**
	 * @param videoCodec string The video codec of the Flavor Params
	 */
	 setVideoCodec(videoCodec) {
	 	this.videoCodec = videoCodec;
	 }
	
	/**
	 * The video bitrate (in KBits) of the Flavor Params
	 * @return int
	 */
	 getVideoBitrate() {
	 	return this.videoBitrate;
	 }
	
	/**
	 * @param videoBitrate int The video bitrate (in KBits) of the Flavor Params
	 */
	 setVideoBitrate(videoBitrate) {
	 	this.videoBitrate = videoBitrate;
	 }
	
	/**
	 * The audio codec of the Flavor Params
	 * @return string
	 */
	 getAudioCodec() {
	 	return this.audioCodec;
	 }
	
	/**
	 * @param audioCodec string The audio codec of the Flavor Params
	 */
	 setAudioCodec(audioCodec) {
	 	this.audioCodec = audioCodec;
	 }
	
	/**
	 * The audio bitrate (in KBits) of the Flavor Params
	 * @return int
	 */
	 getAudioBitrate() {
	 	return this.audioBitrate;
	 }
	
	/**
	 * @param audioBitrate int The audio bitrate (in KBits) of the Flavor Params
	 */
	 setAudioBitrate(audioBitrate) {
	 	this.audioBitrate = audioBitrate;
	 }
	
	/**
	 * The number of audio channels for "downmixing"
	 * @return int
	 */
	 getAudioChannels() {
	 	return this.audioChannels;
	 }
	
	/**
	 * @param audioChannels int The number of audio channels for "downmixing"
	 */
	 setAudioChannels(audioChannels) {
	 	this.audioChannels = audioChannels;
	 }
	
	/**
	 * The audio sample rate of the Flavor Params
	 * @return int
	 */
	 getAudioSampleRate() {
	 	return this.audioSampleRate;
	 }
	
	/**
	 * @param audioSampleRate int The audio sample rate of the Flavor Params
	 */
	 setAudioSampleRate(audioSampleRate) {
	 	this.audioSampleRate = audioSampleRate;
	 }
	
	/**
	 * The desired width of the Flavor Params
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int The desired width of the Flavor Params
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * The desired height of the Flavor Params
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int The desired height of the Flavor Params
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * The frame rate of the Flavor Params
	 * @return float
	 */
	 getFrameRate() {
	 	return this.frameRate;
	 }
	
	/**
	 * @param frameRate float The frame rate of the Flavor Params
	 */
	 setFrameRate(frameRate) {
	 	this.frameRate = frameRate;
	 }
	
	/**
	 * The gop size of the Flavor Params
	 * @return int
	 */
	 getGopSize() {
	 	return this.gopSize;
	 }
	
	/**
	 * @param gopSize int The gop size of the Flavor Params
	 */
	 setGopSize(gopSize) {
	 	this.gopSize = gopSize;
	 }
	
	/**
	 * The list of conversion engines (comma separated)
	 * @return string
	 */
	 getConversionEngines() {
	 	return this.conversionEngines;
	 }
	
	/**
	 * @param conversionEngines string The list of conversion engines (comma separated)
	 */
	 setConversionEngines(conversionEngines) {
	 	this.conversionEngines = conversionEngines;
	 }
	
	/**
	 * The list of conversion engines extra params (separated with "|")
	 * @return string
	 */
	 getConversionEnginesExtraParams() {
	 	return this.conversionEnginesExtraParams;
	 }
	
	/**
	 * @param conversionEnginesExtraParams string The list of conversion engines extra params (separated with "|")
	 */
	 setConversionEnginesExtraParams(conversionEnginesExtraParams) {
	 	this.conversionEnginesExtraParams = conversionEnginesExtraParams;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getTwoPass() {
	 	return this.twoPass;
	 }
	
	/**
	 * @param twoPass bool 
	 */
	 setTwoPass(twoPass) {
	 	this.twoPass = twoPass;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeinterlice() {
	 	return this.deinterlice;
	 }
	
	/**
	 * @param deinterlice int 
	 */
	 setDeinterlice(deinterlice) {
	 	this.deinterlice = deinterlice;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getRotate() {
	 	return this.rotate;
	 }
	
	/**
	 * @param rotate int 
	 */
	 setRotate(rotate) {
	 	this.rotate = rotate;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOperators() {
	 	return this.operators;
	 }
	
	/**
	 * @param operators string 
	 */
	 setOperators(operators) {
	 	this.operators = operators;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEngineVersion() {
	 	return this.engineVersion;
	 }
	
	/**
	 * @param engineVersion int 
	 */
	 setEngineVersion(engineVersion) {
	 	this.engineVersion = engineVersion;
	 }
	
	/**
	 * The container format of the Flavor Params
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string The container format of the Flavor Params
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAspectRatioProcessingMode() {
	 	return this.aspectRatioProcessingMode;
	 }
	
	/**
	 * @param aspectRatioProcessingMode int 
	 */
	 setAspectRatioProcessingMode(aspectRatioProcessingMode) {
	 	this.aspectRatioProcessingMode = aspectRatioProcessingMode;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getForceFrameToMultiplication16() {
	 	return this.forceFrameToMultiplication16;
	 }
	
	/**
	 * @param forceFrameToMultiplication16 int 
	 */
	 setForceFrameToMultiplication16(forceFrameToMultiplication16) {
	 	this.forceFrameToMultiplication16 = forceFrameToMultiplication16;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsGopInSec() {
	 	return this.isGopInSec;
	 }
	
	/**
	 * @param isGopInSec int 
	 */
	 setIsGopInSec(isGopInSec) {
	 	this.isGopInSec = isGopInSec;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsAvoidVideoShrinkFramesizeToSource() {
	 	return this.isAvoidVideoShrinkFramesizeToSource;
	 }
	
	/**
	 * @param isAvoidVideoShrinkFramesizeToSource int 
	 */
	 setIsAvoidVideoShrinkFramesizeToSource(isAvoidVideoShrinkFramesizeToSource) {
	 	this.isAvoidVideoShrinkFramesizeToSource = isAvoidVideoShrinkFramesizeToSource;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsAvoidVideoShrinkBitrateToSource() {
	 	return this.isAvoidVideoShrinkBitrateToSource;
	 }
	
	/**
	 * @param isAvoidVideoShrinkBitrateToSource int 
	 */
	 setIsAvoidVideoShrinkBitrateToSource(isAvoidVideoShrinkBitrateToSource) {
	 	this.isAvoidVideoShrinkBitrateToSource = isAvoidVideoShrinkBitrateToSource;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsVideoFrameRateForLowBrAppleHls() {
	 	return this.isVideoFrameRateForLowBrAppleHls;
	 }
	
	/**
	 * @param isVideoFrameRateForLowBrAppleHls int 
	 */
	 setIsVideoFrameRateForLowBrAppleHls(isVideoFrameRateForLowBrAppleHls) {
	 	this.isVideoFrameRateForLowBrAppleHls = isVideoFrameRateForLowBrAppleHls;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMultiStream() {
	 	return this.multiStream;
	 }
	
	/**
	 * @param multiStream string 
	 */
	 setMultiStream(multiStream) {
	 	this.multiStream = multiStream;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getAnamorphicPixels() {
	 	return this.anamorphicPixels;
	 }
	
	/**
	 * @param anamorphicPixels float 
	 */
	 setAnamorphicPixels(anamorphicPixels) {
	 	this.anamorphicPixels = anamorphicPixels;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsAvoidForcedKeyFrames() {
	 	return this.isAvoidForcedKeyFrames;
	 }
	
	/**
	 * @param isAvoidForcedKeyFrames int 
	 */
	 setIsAvoidForcedKeyFrames(isAvoidForcedKeyFrames) {
	 	this.isAvoidForcedKeyFrames = isAvoidForcedKeyFrames;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsCropIMX() {
	 	return this.isCropIMX;
	 }
	
	/**
	 * @param isCropIMX int 
	 */
	 setIsCropIMX(isCropIMX) {
	 	this.isCropIMX = isCropIMX;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getOptimizationPolicy() {
	 	return this.optimizationPolicy;
	 }
	
	/**
	 * @param optimizationPolicy int 
	 */
	 setOptimizationPolicy(optimizationPolicy) {
	 	this.optimizationPolicy = optimizationPolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMaxFrameRate() {
	 	return this.maxFrameRate;
	 }
	
	/**
	 * @param maxFrameRate int 
	 */
	 setMaxFrameRate(maxFrameRate) {
	 	this.maxFrameRate = maxFrameRate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVideoConstantBitrate() {
	 	return this.videoConstantBitrate;
	 }
	
	/**
	 * @param videoConstantBitrate int 
	 */
	 setVideoConstantBitrate(videoConstantBitrate) {
	 	this.videoConstantBitrate = videoConstantBitrate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVideoBitrateTolerance() {
	 	return this.videoBitrateTolerance;
	 }
	
	/**
	 * @param videoBitrateTolerance int 
	 */
	 setVideoBitrateTolerance(videoBitrateTolerance) {
	 	this.videoBitrateTolerance = videoBitrateTolerance;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWatermarkData() {
	 	return this.watermarkData;
	 }
	
	/**
	 * @param watermarkData string 
	 */
	 setWatermarkData(watermarkData) {
	 	this.watermarkData = watermarkData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSubtitlesData() {
	 	return this.subtitlesData;
	 }
	
	/**
	 * @param subtitlesData string 
	 */
	 setSubtitlesData(subtitlesData) {
	 	this.subtitlesData = subtitlesData;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsEncrypted() {
	 	return this.isEncrypted;
	 }
	
	/**
	 * @param isEncrypted int 
	 */
	 setIsEncrypted(isEncrypted) {
	 	this.isEncrypted = isEncrypted;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getContentAwareness() {
	 	return this.contentAwareness;
	 }
	
	/**
	 * @param contentAwareness float 
	 */
	 setContentAwareness(contentAwareness) {
	 	this.contentAwareness = contentAwareness;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getClipOffset() {
	 	return this.clipOffset;
	 }
	
	/**
	 * @param clipOffset int 
	 */
	 setClipOffset(clipOffset) {
	 	this.clipOffset = clipOffset;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getClipDuration() {
	 	return this.clipDuration;
	 }
	
	/**
	 * @param clipDuration int 
	 */
	 setClipDuration(clipDuration) {
	 	this.clipDuration = clipDuration;
	 }
}
module.exports.FlavorParams = FlavorParams;

/**
 *
 */
class FlavorAssetWithParams extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorAssetWithParams';
	}
	
	/**
	 * The Flavor Asset (Can be null when there are params without asset)
	 * @return FlavorAsset
	 */
	 getFlavorAsset() {
	 	return this.flavorAsset;
	 }
	
	/**
	 * @param flavorAsset FlavorAsset The Flavor Asset (Can be null when there are params without asset)
	 */
	 setFlavorAsset(flavorAsset) {
	 	this.flavorAsset = flavorAsset;
	 }
	
	/**
	 * The Flavor Params
	 * @return FlavorParams
	 */
	 getFlavorParams() {
	 	return this.flavorParams;
	 }
	
	/**
	 * @param flavorParams FlavorParams The Flavor Params
	 */
	 setFlavorParams(flavorParams) {
	 	this.flavorParams = flavorParams;
	 }
	
	/**
	 * The entry id
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string The entry id
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
}
module.exports.FlavorAssetWithParams = FlavorAssetWithParams;

/**
 *
 */
class FlavorParamsOutput extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorParamsOutput';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getFlavorParamsId() {
	 	return this.flavorParamsId;
	 }
	
	/**
	 * @param flavorParamsId int 
	 */
	 setFlavorParamsId(flavorParamsId) {
	 	this.flavorParamsId = flavorParamsId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCommandLinesStr() {
	 	return this.commandLinesStr;
	 }
	
	/**
	 * @param commandLinesStr string 
	 */
	 setCommandLinesStr(commandLinesStr) {
	 	this.commandLinesStr = commandLinesStr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorParamsVersion() {
	 	return this.flavorParamsVersion;
	 }
	
	/**
	 * @param flavorParamsVersion string 
	 */
	 setFlavorParamsVersion(flavorParamsVersion) {
	 	this.flavorParamsVersion = flavorParamsVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetVersion() {
	 	return this.flavorAssetVersion;
	 }
	
	/**
	 * @param flavorAssetVersion string 
	 */
	 setFlavorAssetVersion(flavorAssetVersion) {
	 	this.flavorAssetVersion = flavorAssetVersion;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyBehavior() {
	 	return this.readyBehavior;
	 }
	
	/**
	 * @param readyBehavior int 
	 */
	 setReadyBehavior(readyBehavior) {
	 	this.readyBehavior = readyBehavior;
	 }
}
module.exports.FlavorParamsOutput = FlavorParamsOutput;

/**
 *
 */
class SchedulerStatus extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSchedulerStatus';
	}
	
	/**
	 * The id of the Category
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The configured id of the scheduler
	 * @return int
	 */
	 getSchedulerConfiguredId() {
	 	return this.schedulerConfiguredId;
	 }
	
	/**
	 * @param schedulerConfiguredId int The configured id of the scheduler
	 */
	 setSchedulerConfiguredId(schedulerConfiguredId) {
	 	this.schedulerConfiguredId = schedulerConfiguredId;
	 }
	
	/**
	 * The configured id of the job worker
	 * @return int
	 */
	 getWorkerConfiguredId() {
	 	return this.workerConfiguredId;
	 }
	
	/**
	 * @param workerConfiguredId int The configured id of the job worker
	 */
	 setWorkerConfiguredId(workerConfiguredId) {
	 	this.workerConfiguredId = workerConfiguredId;
	 }
	
	/**
	 * The type of the job worker
	 * @return string
	 */
	 getWorkerType() {
	 	return this.workerType;
	 }
	
	/**
	 * @param workerType string The type of the job worker
	 */
	 setWorkerType(workerType) {
	 	this.workerType = workerType;
	 }
	
	/**
	 * The status type
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int The status type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * The status value
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int The status value
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * The id of the scheduler
	 * @return int
	 */
	 getSchedulerId() {
	 	return this.schedulerId;
	 }
	
	/**
	 * The id of the worker
	 * @return int
	 */
	 getWorkerId() {
	 	return this.workerId;
	 }
}
module.exports.SchedulerStatus = SchedulerStatus;

/**
 *
 */
class SchedulerConfig extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSchedulerConfig';
	}
	
	/**
	 * The id of the Category
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Creator name
	 * @return string
	 */
	 getCreatedBy() {
	 	return this.createdBy;
	 }
	
	/**
	 * @param createdBy string Creator name
	 */
	 setCreatedBy(createdBy) {
	 	this.createdBy = createdBy;
	 }
	
	/**
	 * Updater name
	 * @return string
	 */
	 getUpdatedBy() {
	 	return this.updatedBy;
	 }
	
	/**
	 * @param updatedBy string Updater name
	 */
	 setUpdatedBy(updatedBy) {
	 	this.updatedBy = updatedBy;
	 }
	
	/**
	 * Id of the control panel command that created this config item
	 * @return string
	 */
	 getCommandId() {
	 	return this.commandId;
	 }
	
	/**
	 * @param commandId string Id of the control panel command that created this config item
	 */
	 setCommandId(commandId) {
	 	this.commandId = commandId;
	 }
	
	/**
	 * The status of the control panel command
	 * @return string
	 */
	 getCommandStatus() {
	 	return this.commandStatus;
	 }
	
	/**
	 * @param commandStatus string The status of the control panel command
	 */
	 setCommandStatus(commandStatus) {
	 	this.commandStatus = commandStatus;
	 }
	
	/**
	 * The id of the scheduler
	 * @return int
	 */
	 getSchedulerId() {
	 	return this.schedulerId;
	 }
	
	/**
	 * @param schedulerId int The id of the scheduler
	 */
	 setSchedulerId(schedulerId) {
	 	this.schedulerId = schedulerId;
	 }
	
	/**
	 * The configured id of the scheduler
	 * @return int
	 */
	 getSchedulerConfiguredId() {
	 	return this.schedulerConfiguredId;
	 }
	
	/**
	 * @param schedulerConfiguredId int The configured id of the scheduler
	 */
	 setSchedulerConfiguredId(schedulerConfiguredId) {
	 	this.schedulerConfiguredId = schedulerConfiguredId;
	 }
	
	/**
	 * The name of the scheduler
	 * @return string
	 */
	 getSchedulerName() {
	 	return this.schedulerName;
	 }
	
	/**
	 * @param schedulerName string The name of the scheduler
	 */
	 setSchedulerName(schedulerName) {
	 	this.schedulerName = schedulerName;
	 }
	
	/**
	 * The id of the job worker
	 * @return int
	 */
	 getWorkerId() {
	 	return this.workerId;
	 }
	
	/**
	 * @param workerId int The id of the job worker
	 */
	 setWorkerId(workerId) {
	 	this.workerId = workerId;
	 }
	
	/**
	 * The configured id of the job worker
	 * @return int
	 */
	 getWorkerConfiguredId() {
	 	return this.workerConfiguredId;
	 }
	
	/**
	 * @param workerConfiguredId int The configured id of the job worker
	 */
	 setWorkerConfiguredId(workerConfiguredId) {
	 	this.workerConfiguredId = workerConfiguredId;
	 }
	
	/**
	 * The name of the job worker
	 * @return string
	 */
	 getWorkerName() {
	 	return this.workerName;
	 }
	
	/**
	 * @param workerName string The name of the job worker
	 */
	 setWorkerName(workerName) {
	 	this.workerName = workerName;
	 }
	
	/**
	 * The name of the variable
	 * @return string
	 */
	 getVariable() {
	 	return this.variable;
	 }
	
	/**
	 * @param variable string The name of the variable
	 */
	 setVariable(variable) {
	 	this.variable = variable;
	 }
	
	/**
	 * The part of the variable
	 * @return string
	 */
	 getVariablePart() {
	 	return this.variablePart;
	 }
	
	/**
	 * @param variablePart string The part of the variable
	 */
	 setVariablePart(variablePart) {
	 	this.variablePart = variablePart;
	 }
	
	/**
	 * The value of the variable
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string The value of the variable
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.SchedulerConfig = SchedulerConfig;

/**
 *
 */
class SchedulerWorker extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSchedulerWorker';
	}
	
	/**
	 * The id of the Worker
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The id as configured in the batch config
	 * @return int
	 */
	 getConfiguredId() {
	 	return this.configuredId;
	 }
	
	/**
	 * @param configuredId int The id as configured in the batch config
	 */
	 setConfiguredId(configuredId) {
	 	this.configuredId = configuredId;
	 }
	
	/**
	 * The id of the Scheduler
	 * @return int
	 */
	 getSchedulerId() {
	 	return this.schedulerId;
	 }
	
	/**
	 * @param schedulerId int The id of the Scheduler
	 */
	 setSchedulerId(schedulerId) {
	 	this.schedulerId = schedulerId;
	 }
	
	/**
	 * The id of the scheduler as configured in the batch config
	 * @return int
	 */
	 getSchedulerConfiguredId() {
	 	return this.schedulerConfiguredId;
	 }
	
	/**
	 * @param schedulerConfiguredId int The id of the scheduler as configured in the batch config
	 */
	 setSchedulerConfiguredId(schedulerConfiguredId) {
	 	this.schedulerConfiguredId = schedulerConfiguredId;
	 }
	
	/**
	 * The worker type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string The worker type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * The friendly name of the type
	 * @return string
	 */
	 getTypeName() {
	 	return this.typeName;
	 }
	
	/**
	 * @param typeName string The friendly name of the type
	 */
	 setTypeName(typeName) {
	 	this.typeName = typeName;
	 }
	
	/**
	 * The scheduler name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The scheduler name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Array of the last statuses
	 * @return array
	 */
	 getStatuses() {
	 	return this.statuses;
	 }
	
	/**
	 * @param statuses array Array of the last statuses
	 */
	 setStatuses(statuses) {
	 	this.statuses = statuses;
	 }
	
	/**
	 * Array of the last configs
	 * @return array
	 */
	 getConfigs() {
	 	return this.configs;
	 }
	
	/**
	 * @param configs array Array of the last configs
	 */
	 setConfigs(configs) {
	 	this.configs = configs;
	 }
	
	/**
	 * Array of jobs that locked to this worker
	 * @return array
	 */
	 getLockedJobs() {
	 	return this.lockedJobs;
	 }
	
	/**
	 * @param lockedJobs array Array of jobs that locked to this worker
	 */
	 setLockedJobs(lockedJobs) {
	 	this.lockedJobs = lockedJobs;
	 }
	
	/**
	 * Avarage time between creation and queue time
	 * @return int
	 */
	 getAvgWait() {
	 	return this.avgWait;
	 }
	
	/**
	 * @param avgWait int Avarage time between creation and queue time
	 */
	 setAvgWait(avgWait) {
	 	this.avgWait = avgWait;
	 }
	
	/**
	 * Avarage time between queue time end finish time
	 * @return int
	 */
	 getAvgWork() {
	 	return this.avgWork;
	 }
	
	/**
	 * @param avgWork int Avarage time between queue time end finish time
	 */
	 setAvgWork(avgWork) {
	 	this.avgWork = avgWork;
	 }
	
	/**
	 * last status time
	 * @return int
	 */
	 getLastStatus() {
	 	return this.lastStatus;
	 }
	
	/**
	 * @param lastStatus int last status time
	 */
	 setLastStatus(lastStatus) {
	 	this.lastStatus = lastStatus;
	 }
	
	/**
	 * last status formated
	 * @return string
	 */
	 getLastStatusStr() {
	 	return this.lastStatusStr;
	 }
	
	/**
	 * @param lastStatusStr string last status formated
	 */
	 setLastStatusStr(lastStatusStr) {
	 	this.lastStatusStr = lastStatusStr;
	 }
}
module.exports.SchedulerWorker = SchedulerWorker;

/**
 *
 */
class Scheduler extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduler';
	}
	
	/**
	 * The id of the Scheduler
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The id as configured in the batch config
	 * @return int
	 */
	 getConfiguredId() {
	 	return this.configuredId;
	 }
	
	/**
	 * @param configuredId int The id as configured in the batch config
	 */
	 setConfiguredId(configuredId) {
	 	this.configuredId = configuredId;
	 }
	
	/**
	 * The scheduler name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string The scheduler name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * The host name
	 * @return string
	 */
	 getHost() {
	 	return this.host;
	 }
	
	/**
	 * @param host string The host name
	 */
	 setHost(host) {
	 	this.host = host;
	 }
	
	/**
	 * Array of the last statuses
	 * @return array
	 */
	 getStatuses() {
	 	return this.statuses;
	 }
	
	/**
	 * Array of the last configs
	 * @return array
	 */
	 getConfigs() {
	 	return this.configs;
	 }
	
	/**
	 * Array of the workers
	 * @return array
	 */
	 getWorkers() {
	 	return this.workers;
	 }
	
	/**
	 * creation time
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * last status time
	 * @return int
	 */
	 getLastStatus() {
	 	return this.lastStatus;
	 }
	
	/**
	 * last status formated
	 * @return string
	 */
	 getLastStatusStr() {
	 	return this.lastStatusStr;
	 }
}
module.exports.Scheduler = Scheduler;

/**
 *
 */
class GenericDistributionProfileAction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProfileAction';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getProtocol() {
	 	return this.protocol;
	 }
	
	/**
	 * @param protocol int 
	 */
	 setProtocol(protocol) {
	 	this.protocol = protocol;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerUrl() {
	 	return this.serverUrl;
	 }
	
	/**
	 * @param serverUrl string 
	 */
	 setServerUrl(serverUrl) {
	 	this.serverUrl = serverUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerPath() {
	 	return this.serverPath;
	 }
	
	/**
	 * @param serverPath string 
	 */
	 setServerPath(serverPath) {
	 	this.serverPath = serverPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string 
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getFtpPassiveMode() {
	 	return this.ftpPassiveMode;
	 }
	
	/**
	 * @param ftpPassiveMode bool 
	 */
	 setFtpPassiveMode(ftpPassiveMode) {
	 	this.ftpPassiveMode = ftpPassiveMode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHttpFieldName() {
	 	return this.httpFieldName;
	 }
	
	/**
	 * @param httpFieldName string 
	 */
	 setHttpFieldName(httpFieldName) {
	 	this.httpFieldName = httpFieldName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHttpFileName() {
	 	return this.httpFileName;
	 }
	
	/**
	 * @param httpFileName string 
	 */
	 setHttpFileName(httpFileName) {
	 	this.httpFileName = httpFileName;
	 }
}
module.exports.GenericDistributionProfileAction = GenericDistributionProfileAction;

/**
 *
 */
class GenericDistributionProviderAction extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProviderAction';
	}
	
	/**
	 * Auto generated
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Generic distribution provider action creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Generic distribution provider action last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getGenericDistributionProviderId() {
	 	return this.genericDistributionProviderId;
	 }
	
	/**
	 * @param genericDistributionProviderId int 
	 */
	 setGenericDistributionProviderId(genericDistributionProviderId) {
	 	this.genericDistributionProviderId = genericDistributionProviderId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action int 
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getResultsParser() {
	 	return this.resultsParser;
	 }
	
	/**
	 * @param resultsParser int 
	 */
	 setResultsParser(resultsParser) {
	 	this.resultsParser = resultsParser;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getProtocol() {
	 	return this.protocol;
	 }
	
	/**
	 * @param protocol int 
	 */
	 setProtocol(protocol) {
	 	this.protocol = protocol;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerAddress() {
	 	return this.serverAddress;
	 }
	
	/**
	 * @param serverAddress string 
	 */
	 setServerAddress(serverAddress) {
	 	this.serverAddress = serverAddress;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemotePath() {
	 	return this.remotePath;
	 }
	
	/**
	 * @param remotePath string 
	 */
	 setRemotePath(remotePath) {
	 	this.remotePath = remotePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemoteUsername() {
	 	return this.remoteUsername;
	 }
	
	/**
	 * @param remoteUsername string 
	 */
	 setRemoteUsername(remoteUsername) {
	 	this.remoteUsername = remoteUsername;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemotePassword() {
	 	return this.remotePassword;
	 }
	
	/**
	 * @param remotePassword string 
	 */
	 setRemotePassword(remotePassword) {
	 	this.remotePassword = remotePassword;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEditableFields() {
	 	return this.editableFields;
	 }
	
	/**
	 * @param editableFields string 
	 */
	 setEditableFields(editableFields) {
	 	this.editableFields = editableFields;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMandatoryFields() {
	 	return this.mandatoryFields;
	 }
	
	/**
	 * @param mandatoryFields string 
	 */
	 setMandatoryFields(mandatoryFields) {
	 	this.mandatoryFields = mandatoryFields;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMrssTransformer() {
	 	return this.mrssTransformer;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMrssValidator() {
	 	return this.mrssValidator;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResultsTransformer() {
	 	return this.resultsTransformer;
	 }
}
module.exports.GenericDistributionProviderAction = GenericDistributionProviderAction;

/**
 *
 */
class GenericDistributionProvider extends DistributionProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProvider';
	}
	
	/**
	 * Auto generated
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Generic distribution provider creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Generic distribution provider last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsDefault() {
	 	return this.isDefault;
	 }
	
	/**
	 * @param isDefault bool 
	 */
	 setIsDefault(isDefault) {
	 	this.isDefault = isDefault;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOptionalFlavorParamsIds() {
	 	return this.optionalFlavorParamsIds;
	 }
	
	/**
	 * @param optionalFlavorParamsIds string 
	 */
	 setOptionalFlavorParamsIds(optionalFlavorParamsIds) {
	 	this.optionalFlavorParamsIds = optionalFlavorParamsIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRequiredFlavorParamsIds() {
	 	return this.requiredFlavorParamsIds;
	 }
	
	/**
	 * @param requiredFlavorParamsIds string 
	 */
	 setRequiredFlavorParamsIds(requiredFlavorParamsIds) {
	 	this.requiredFlavorParamsIds = requiredFlavorParamsIds;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getOptionalThumbDimensions() {
	 	return this.optionalThumbDimensions;
	 }
	
	/**
	 * @param optionalThumbDimensions array 
	 */
	 setOptionalThumbDimensions(optionalThumbDimensions) {
	 	this.optionalThumbDimensions = optionalThumbDimensions;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getRequiredThumbDimensions() {
	 	return this.requiredThumbDimensions;
	 }
	
	/**
	 * @param requiredThumbDimensions array 
	 */
	 setRequiredThumbDimensions(requiredThumbDimensions) {
	 	this.requiredThumbDimensions = requiredThumbDimensions;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEditableFields() {
	 	return this.editableFields;
	 }
	
	/**
	 * @param editableFields string 
	 */
	 setEditableFields(editableFields) {
	 	this.editableFields = editableFields;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMandatoryFields() {
	 	return this.mandatoryFields;
	 }
	
	/**
	 * @param mandatoryFields string 
	 */
	 setMandatoryFields(mandatoryFields) {
	 	this.mandatoryFields = mandatoryFields;
	 }
}
module.exports.GenericDistributionProvider = GenericDistributionProvider;

/**
 *
 */
class GroupUser extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGroupUser';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGroupId() {
	 	return this.groupId;
	 }
	
	/**
	 * @param groupId string 
	 */
	 setGroupId(groupId) {
	 	this.groupId = groupId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.GroupUser = GroupUser;

/**
 *
 */
class Object extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaObject';
	}
	
	/**
	 * 
	 * @return map
	 */
	 getRelatedObjects() {
	 	return this.relatedObjects;
	 }
}
module.exports.Object = Object;

/**
 *
 */
class HttpNotification extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotification';
	}
	
	/**
	 * Object that triggered the notification
	 * @return ObjectBase
	 */
	 getObject() {
	 	return this.object;
	 }
	
	/**
	 * @param object ObjectBase Object that triggered the notification
	 */
	 setObject(object) {
	 	this.object = object;
	 }
	
	/**
	 * Object type that triggered the notification
	 * @return string
	 */
	 getEventObjectType() {
	 	return this.eventObjectType;
	 }
	
	/**
	 * @param eventObjectType string Object type that triggered the notification
	 */
	 setEventObjectType(eventObjectType) {
	 	this.eventObjectType = eventObjectType;
	 }
	
	/**
	 * ID of the batch job that execute the notification
	 * @return int
	 */
	 getEventNotificationJobId() {
	 	return this.eventNotificationJobId;
	 }
	
	/**
	 * @param eventNotificationJobId int ID of the batch job that execute the notification
	 */
	 setEventNotificationJobId(eventNotificationJobId) {
	 	this.eventNotificationJobId = eventNotificationJobId;
	 }
	
	/**
	 * ID of the template that triggered the notification
	 * @return int
	 */
	 getTemplateId() {
	 	return this.templateId;
	 }
	
	/**
	 * @param templateId int ID of the template that triggered the notification
	 */
	 setTemplateId(templateId) {
	 	this.templateId = templateId;
	 }
	
	/**
	 * Name of the template that triggered the notification
	 * @return string
	 */
	 getTemplateName() {
	 	return this.templateName;
	 }
	
	/**
	 * @param templateName string Name of the template that triggered the notification
	 */
	 setTemplateName(templateName) {
	 	this.templateName = templateName;
	 }
	
	/**
	 * System name of the template that triggered the notification
	 * @return string
	 */
	 getTemplateSystemName() {
	 	return this.templateSystemName;
	 }
	
	/**
	 * @param templateSystemName string System name of the template that triggered the notification
	 */
	 setTemplateSystemName(templateSystemName) {
	 	this.templateSystemName = templateSystemName;
	 }
	
	/**
	 * Ecent type that triggered the notification
	 * @return string
	 */
	 getEventType() {
	 	return this.eventType;
	 }
	
	/**
	 * @param eventType string Ecent type that triggered the notification
	 */
	 setEventType(eventType) {
	 	this.eventType = eventType;
	 }
}
module.exports.HttpNotification = HttpNotification;

/**
 *
 */
class HttpNotificationData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationData';
	}
}
module.exports.HttpNotificationData = HttpNotificationData;

/**
 *
 */
class IntegerValue extends Value{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegerValue';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value int 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.IntegerValue = IntegerValue;

/**
 *
 */
class IntegrationJobProviderData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegrationJobProviderData';
	}
}
module.exports.IntegrationJobProviderData = IntegrationJobProviderData;

/**
 *
 */
class IntegrationJobTriggerData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegrationJobTriggerData';
	}
}
module.exports.IntegrationJobTriggerData = IntegrationJobTriggerData;

/**
 *
 */
class FileSyncListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileSyncListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.FileSyncListResponse = FileSyncListResponse;

/**
 *
 */
class BatchJobListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBatchJobListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.BatchJobListResponse = BatchJobListResponse;

/**
 *
 */
class MediaInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaInfo';
	}
	
	/**
	 * The id of the media info
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * The id of the related flavor asset
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string The id of the related flavor asset
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * The file size
	 * @return int
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * @param fileSize int The file size
	 */
	 setFileSize(fileSize) {
	 	this.fileSize = fileSize;
	 }
	
	/**
	 * The container format
	 * @return string
	 */
	 getContainerFormat() {
	 	return this.containerFormat;
	 }
	
	/**
	 * @param containerFormat string The container format
	 */
	 setContainerFormat(containerFormat) {
	 	this.containerFormat = containerFormat;
	 }
	
	/**
	 * The container id
	 * @return string
	 */
	 getContainerId() {
	 	return this.containerId;
	 }
	
	/**
	 * @param containerId string The container id
	 */
	 setContainerId(containerId) {
	 	this.containerId = containerId;
	 }
	
	/**
	 * The container profile
	 * @return string
	 */
	 getContainerProfile() {
	 	return this.containerProfile;
	 }
	
	/**
	 * @param containerProfile string The container profile
	 */
	 setContainerProfile(containerProfile) {
	 	this.containerProfile = containerProfile;
	 }
	
	/**
	 * The container duration
	 * @return int
	 */
	 getContainerDuration() {
	 	return this.containerDuration;
	 }
	
	/**
	 * @param containerDuration int The container duration
	 */
	 setContainerDuration(containerDuration) {
	 	this.containerDuration = containerDuration;
	 }
	
	/**
	 * The container bit rate
	 * @return int
	 */
	 getContainerBitRate() {
	 	return this.containerBitRate;
	 }
	
	/**
	 * @param containerBitRate int The container bit rate
	 */
	 setContainerBitRate(containerBitRate) {
	 	this.containerBitRate = containerBitRate;
	 }
	
	/**
	 * The video format
	 * @return string
	 */
	 getVideoFormat() {
	 	return this.videoFormat;
	 }
	
	/**
	 * @param videoFormat string The video format
	 */
	 setVideoFormat(videoFormat) {
	 	this.videoFormat = videoFormat;
	 }
	
	/**
	 * The video codec id
	 * @return string
	 */
	 getVideoCodecId() {
	 	return this.videoCodecId;
	 }
	
	/**
	 * @param videoCodecId string The video codec id
	 */
	 setVideoCodecId(videoCodecId) {
	 	this.videoCodecId = videoCodecId;
	 }
	
	/**
	 * The video duration
	 * @return int
	 */
	 getVideoDuration() {
	 	return this.videoDuration;
	 }
	
	/**
	 * @param videoDuration int The video duration
	 */
	 setVideoDuration(videoDuration) {
	 	this.videoDuration = videoDuration;
	 }
	
	/**
	 * The video bit rate
	 * @return int
	 */
	 getVideoBitRate() {
	 	return this.videoBitRate;
	 }
	
	/**
	 * @param videoBitRate int The video bit rate
	 */
	 setVideoBitRate(videoBitRate) {
	 	this.videoBitRate = videoBitRate;
	 }
	
	/**
	 * The video bit rate mode
	 * @return int
	 */
	 getVideoBitRateMode() {
	 	return this.videoBitRateMode;
	 }
	
	/**
	 * @param videoBitRateMode int The video bit rate mode
	 */
	 setVideoBitRateMode(videoBitRateMode) {
	 	this.videoBitRateMode = videoBitRateMode;
	 }
	
	/**
	 * The video width
	 * @return int
	 */
	 getVideoWidth() {
	 	return this.videoWidth;
	 }
	
	/**
	 * @param videoWidth int The video width
	 */
	 setVideoWidth(videoWidth) {
	 	this.videoWidth = videoWidth;
	 }
	
	/**
	 * The video height
	 * @return int
	 */
	 getVideoHeight() {
	 	return this.videoHeight;
	 }
	
	/**
	 * @param videoHeight int The video height
	 */
	 setVideoHeight(videoHeight) {
	 	this.videoHeight = videoHeight;
	 }
	
	/**
	 * The video frame rate
	 * @return float
	 */
	 getVideoFrameRate() {
	 	return this.videoFrameRate;
	 }
	
	/**
	 * @param videoFrameRate float The video frame rate
	 */
	 setVideoFrameRate(videoFrameRate) {
	 	this.videoFrameRate = videoFrameRate;
	 }
	
	/**
	 * The video display aspect ratio (dar)
	 * @return float
	 */
	 getVideoDar() {
	 	return this.videoDar;
	 }
	
	/**
	 * @param videoDar float The video display aspect ratio (dar)
	 */
	 setVideoDar(videoDar) {
	 	this.videoDar = videoDar;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVideoRotation() {
	 	return this.videoRotation;
	 }
	
	/**
	 * @param videoRotation int 
	 */
	 setVideoRotation(videoRotation) {
	 	this.videoRotation = videoRotation;
	 }
	
	/**
	 * The audio format
	 * @return string
	 */
	 getAudioFormat() {
	 	return this.audioFormat;
	 }
	
	/**
	 * @param audioFormat string The audio format
	 */
	 setAudioFormat(audioFormat) {
	 	this.audioFormat = audioFormat;
	 }
	
	/**
	 * The audio codec id
	 * @return string
	 */
	 getAudioCodecId() {
	 	return this.audioCodecId;
	 }
	
	/**
	 * @param audioCodecId string The audio codec id
	 */
	 setAudioCodecId(audioCodecId) {
	 	this.audioCodecId = audioCodecId;
	 }
	
	/**
	 * The audio duration
	 * @return int
	 */
	 getAudioDuration() {
	 	return this.audioDuration;
	 }
	
	/**
	 * @param audioDuration int The audio duration
	 */
	 setAudioDuration(audioDuration) {
	 	this.audioDuration = audioDuration;
	 }
	
	/**
	 * The audio bit rate
	 * @return int
	 */
	 getAudioBitRate() {
	 	return this.audioBitRate;
	 }
	
	/**
	 * @param audioBitRate int The audio bit rate
	 */
	 setAudioBitRate(audioBitRate) {
	 	this.audioBitRate = audioBitRate;
	 }
	
	/**
	 * The audio bit rate mode
	 * @return int
	 */
	 getAudioBitRateMode() {
	 	return this.audioBitRateMode;
	 }
	
	/**
	 * @param audioBitRateMode int The audio bit rate mode
	 */
	 setAudioBitRateMode(audioBitRateMode) {
	 	this.audioBitRateMode = audioBitRateMode;
	 }
	
	/**
	 * The number of audio channels
	 * @return int
	 */
	 getAudioChannels() {
	 	return this.audioChannels;
	 }
	
	/**
	 * @param audioChannels int The number of audio channels
	 */
	 setAudioChannels(audioChannels) {
	 	this.audioChannels = audioChannels;
	 }
	
	/**
	 * The audio sampling rate
	 * @return int
	 */
	 getAudioSamplingRate() {
	 	return this.audioSamplingRate;
	 }
	
	/**
	 * @param audioSamplingRate int The audio sampling rate
	 */
	 setAudioSamplingRate(audioSamplingRate) {
	 	this.audioSamplingRate = audioSamplingRate;
	 }
	
	/**
	 * The audio resolution
	 * @return int
	 */
	 getAudioResolution() {
	 	return this.audioResolution;
	 }
	
	/**
	 * @param audioResolution int The audio resolution
	 */
	 setAudioResolution(audioResolution) {
	 	this.audioResolution = audioResolution;
	 }
	
	/**
	 * The writing library
	 * @return string
	 */
	 getWritingLib() {
	 	return this.writingLib;
	 }
	
	/**
	 * @param writingLib string The writing library
	 */
	 setWritingLib(writingLib) {
	 	this.writingLib = writingLib;
	 }
	
	/**
	 * The data as returned by the mediainfo command line
	 * @return string
	 */
	 getRawData() {
	 	return this.rawData;
	 }
	
	/**
	 * @param rawData string The data as returned by the mediainfo command line
	 */
	 setRawData(rawData) {
	 	this.rawData = rawData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMultiStreamInfo() {
	 	return this.multiStreamInfo;
	 }
	
	/**
	 * @param multiStreamInfo string 
	 */
	 setMultiStreamInfo(multiStreamInfo) {
	 	this.multiStreamInfo = multiStreamInfo;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getScanType() {
	 	return this.scanType;
	 }
	
	/**
	 * @param scanType int 
	 */
	 setScanType(scanType) {
	 	this.scanType = scanType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMultiStream() {
	 	return this.multiStream;
	 }
	
	/**
	 * @param multiStream string 
	 */
	 setMultiStream(multiStream) {
	 	this.multiStream = multiStream;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsFastStart() {
	 	return this.isFastStart;
	 }
	
	/**
	 * @param isFastStart int 
	 */
	 setIsFastStart(isFastStart) {
	 	this.isFastStart = isFastStart;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentStreams() {
	 	return this.contentStreams;
	 }
	
	/**
	 * @param contentStreams string 
	 */
	 setContentStreams(contentStreams) {
	 	this.contentStreams = contentStreams;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getComplexityValue() {
	 	return this.complexityValue;
	 }
	
	/**
	 * @param complexityValue int 
	 */
	 setComplexityValue(complexityValue) {
	 	this.complexityValue = complexityValue;
	 }
}
module.exports.MediaInfo = MediaInfo;

/**
 *
 */
class MediaInfoListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaInfoListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.MediaInfoListResponse = MediaInfoListResponse;

/**
 *
 */
class FlavorParamsOutputListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorParamsOutputListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.FlavorParamsOutputListResponse = FlavorParamsOutputListResponse;

/**
 *
 */
class ThumbAsset extends Asset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbAsset';
	}
	
	/**
	 * The Flavor Params used to create this Flavor Asset
	 * @return int
	 */
	 getThumbParamsId() {
	 	return this.thumbParamsId;
	 }
	
	/**
	 * @param thumbParamsId int The Flavor Params used to create this Flavor Asset
	 */
	 setThumbParamsId(thumbParamsId) {
	 	this.thumbParamsId = thumbParamsId;
	 }
	
	/**
	 * The width of the Flavor Asset
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * The height of the Flavor Asset
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * The status of the asset
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
}
module.exports.ThumbAsset = ThumbAsset;

/**
 *
 */
class ThumbParams extends AssetParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbParams';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCropType() {
	 	return this.cropType;
	 }
	
	/**
	 * @param cropType int 
	 */
	 setCropType(cropType) {
	 	this.cropType = cropType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getQuality() {
	 	return this.quality;
	 }
	
	/**
	 * @param quality int 
	 */
	 setQuality(quality) {
	 	this.quality = quality;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCropX() {
	 	return this.cropX;
	 }
	
	/**
	 * @param cropX int 
	 */
	 setCropX(cropX) {
	 	this.cropX = cropX;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCropY() {
	 	return this.cropY;
	 }
	
	/**
	 * @param cropY int 
	 */
	 setCropY(cropY) {
	 	this.cropY = cropY;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCropWidth() {
	 	return this.cropWidth;
	 }
	
	/**
	 * @param cropWidth int 
	 */
	 setCropWidth(cropWidth) {
	 	this.cropWidth = cropWidth;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCropHeight() {
	 	return this.cropHeight;
	 }
	
	/**
	 * @param cropHeight int 
	 */
	 setCropHeight(cropHeight) {
	 	this.cropHeight = cropHeight;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getVideoOffset() {
	 	return this.videoOffset;
	 }
	
	/**
	 * @param videoOffset float 
	 */
	 setVideoOffset(videoOffset) {
	 	this.videoOffset = videoOffset;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int 
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int 
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getScaleWidth() {
	 	return this.scaleWidth;
	 }
	
	/**
	 * @param scaleWidth float 
	 */
	 setScaleWidth(scaleWidth) {
	 	this.scaleWidth = scaleWidth;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getScaleHeight() {
	 	return this.scaleHeight;
	 }
	
	/**
	 * @param scaleHeight float 
	 */
	 setScaleHeight(scaleHeight) {
	 	this.scaleHeight = scaleHeight;
	 }
	
	/**
	 * Hexadecimal value
	 * @return string
	 */
	 getBackgroundColor() {
	 	return this.backgroundColor;
	 }
	
	/**
	 * @param backgroundColor string Hexadecimal value
	 */
	 setBackgroundColor(backgroundColor) {
	 	this.backgroundColor = backgroundColor;
	 }
	
	/**
	 * Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation
	 * @return int
	 */
	 getSourceParamsId() {
	 	return this.sourceParamsId;
	 }
	
	/**
	 * @param sourceParamsId int Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation
	 */
	 setSourceParamsId(sourceParamsId) {
	 	this.sourceParamsId = sourceParamsId;
	 }
	
	/**
	 * The container format of the Flavor Params
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string The container format of the Flavor Params
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * The image density (dpi) for example: 72 or 96
	 * @return int
	 */
	 getDensity() {
	 	return this.density;
	 }
	
	/**
	 * @param density int The image density (dpi) for example: 72 or 96
	 */
	 setDensity(density) {
	 	this.density = density;
	 }
	
	/**
	 * Strip profiles and comments
	 * @return bool
	 */
	 getStripProfiles() {
	 	return this.stripProfiles;
	 }
	
	/**
	 * @param stripProfiles bool Strip profiles and comments
	 */
	 setStripProfiles(stripProfiles) {
	 	this.stripProfiles = stripProfiles;
	 }
	
	/**
	 * Create thumbnail from the videoLengthpercentage second
	 * @return int
	 */
	 getVideoOffsetInPercentage() {
	 	return this.videoOffsetInPercentage;
	 }
	
	/**
	 * @param videoOffsetInPercentage int Create thumbnail from the videoLengthpercentage second
	 */
	 setVideoOffsetInPercentage(videoOffsetInPercentage) {
	 	this.videoOffsetInPercentage = videoOffsetInPercentage;
	 }
}
module.exports.ThumbParams = ThumbParams;

/**
 *
 */
class ThumbParamsOutput extends ThumbParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbParamsOutput';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getThumbParamsId() {
	 	return this.thumbParamsId;
	 }
	
	/**
	 * @param thumbParamsId int 
	 */
	 setThumbParamsId(thumbParamsId) {
	 	this.thumbParamsId = thumbParamsId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbParamsVersion() {
	 	return this.thumbParamsVersion;
	 }
	
	/**
	 * @param thumbParamsVersion string 
	 */
	 setThumbParamsVersion(thumbParamsVersion) {
	 	this.thumbParamsVersion = thumbParamsVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbAssetId() {
	 	return this.thumbAssetId;
	 }
	
	/**
	 * @param thumbAssetId string 
	 */
	 setThumbAssetId(thumbAssetId) {
	 	this.thumbAssetId = thumbAssetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbAssetVersion() {
	 	return this.thumbAssetVersion;
	 }
	
	/**
	 * @param thumbAssetVersion string 
	 */
	 setThumbAssetVersion(thumbAssetVersion) {
	 	this.thumbAssetVersion = thumbAssetVersion;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getRotate() {
	 	return this.rotate;
	 }
	
	/**
	 * @param rotate int 
	 */
	 setRotate(rotate) {
	 	this.rotate = rotate;
	 }
}
module.exports.ThumbParamsOutput = ThumbParamsOutput;

/**
 *
 */
class ThumbParamsOutputListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbParamsOutputListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ThumbParamsOutputListResponse = ThumbParamsOutputListResponse;

/**
 *
 */
class TrackEntry extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTrackEntry';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTrackEventType() {
	 	return this.trackEventType;
	 }
	
	/**
	 * @param trackEventType int 
	 */
	 setTrackEventType(trackEventType) {
	 	this.trackEventType = trackEventType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPsVersion() {
	 	return this.psVersion;
	 }
	
	/**
	 * @param psVersion string 
	 */
	 setPsVersion(psVersion) {
	 	this.psVersion = psVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContext() {
	 	return this.context;
	 }
	
	/**
	 * @param context string 
	 */
	 setContext(context) {
	 	this.context = context;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHostName() {
	 	return this.hostName;
	 }
	
	/**
	 * @param hostName string 
	 */
	 setHostName(hostName) {
	 	this.hostName = hostName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getChangedProperties() {
	 	return this.changedProperties;
	 }
	
	/**
	 * @param changedProperties string 
	 */
	 setChangedProperties(changedProperties) {
	 	this.changedProperties = changedProperties;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParamStr1() {
	 	return this.paramStr1;
	 }
	
	/**
	 * @param paramStr1 string 
	 */
	 setParamStr1(paramStr1) {
	 	this.paramStr1 = paramStr1;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParamStr2() {
	 	return this.paramStr2;
	 }
	
	/**
	 * @param paramStr2 string 
	 */
	 setParamStr2(paramStr2) {
	 	this.paramStr2 = paramStr2;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParamStr3() {
	 	return this.paramStr3;
	 }
	
	/**
	 * @param paramStr3 string 
	 */
	 setParamStr3(paramStr3) {
	 	this.paramStr3 = paramStr3;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string 
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * @param createdAt int 
	 */
	 setCreatedAt(createdAt) {
	 	this.createdAt = createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * @param updatedAt int 
	 */
	 setUpdatedAt(updatedAt) {
	 	this.updatedAt = updatedAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIp() {
	 	return this.userIp;
	 }
	
	/**
	 * @param userIp string 
	 */
	 setUserIp(userIp) {
	 	this.userIp = userIp;
	 }
}
module.exports.TrackEntry = TrackEntry;

/**
 *
 */
class Like extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLike';
	}
	
	/**
	 * The id of the entry that the like belongs to
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string The id of the entry that the like belongs to
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * The id of user that the like belongs to
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string The id of user that the like belongs to
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * The date of the like's creation
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * @param createdAt int The date of the like's creation
	 */
	 setCreatedAt(createdAt) {
	 	this.createdAt = createdAt;
	 }
}
module.exports.Like = Like;

/**
 *
 */
class LiveStreamConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamConfiguration';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getProtocol() {
	 	return this.protocol;
	 }
	
	/**
	 * @param protocol string 
	 */
	 setProtocol(protocol) {
	 	this.protocol = protocol;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string 
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPublishUrl() {
	 	return this.publishUrl;
	 }
	
	/**
	 * @param publishUrl string 
	 */
	 setPublishUrl(publishUrl) {
	 	this.publishUrl = publishUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBackupUrl() {
	 	return this.backupUrl;
	 }
	
	/**
	 * @param backupUrl string 
	 */
	 setBackupUrl(backupUrl) {
	 	this.backupUrl = backupUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamName() {
	 	return this.streamName;
	 }
	
	/**
	 * @param streamName string 
	 */
	 setStreamName(streamName) {
	 	this.streamName = streamName;
	 }
}
module.exports.LiveStreamConfiguration = LiveStreamConfiguration;

/**
 *
 */
class LiveStreamPushPublishConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamPushPublishConfiguration';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPublishUrl() {
	 	return this.publishUrl;
	 }
	
	/**
	 * @param publishUrl string 
	 */
	 setPublishUrl(publishUrl) {
	 	this.publishUrl = publishUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBackupPublishUrl() {
	 	return this.backupPublishUrl;
	 }
	
	/**
	 * @param backupPublishUrl string 
	 */
	 setBackupPublishUrl(backupPublishUrl) {
	 	this.backupPublishUrl = backupPublishUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPort() {
	 	return this.port;
	 }
	
	/**
	 * @param port string 
	 */
	 setPort(port) {
	 	this.port = port;
	 }
}
module.exports.LiveStreamPushPublishConfiguration = LiveStreamPushPublishConfiguration;

/**
 *
 */
class LiveEntryRecordingOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveEntryRecordingOptions';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getShouldCopyEntitlement() {
	 	return this.shouldCopyEntitlement;
	 }
	
	/**
	 * @param shouldCopyEntitlement int 
	 */
	 setShouldCopyEntitlement(shouldCopyEntitlement) {
	 	this.shouldCopyEntitlement = shouldCopyEntitlement;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShouldCopyScheduling() {
	 	return this.shouldCopyScheduling;
	 }
	
	/**
	 * @param shouldCopyScheduling int 
	 */
	 setShouldCopyScheduling(shouldCopyScheduling) {
	 	this.shouldCopyScheduling = shouldCopyScheduling;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShouldCopyThumbnail() {
	 	return this.shouldCopyThumbnail;
	 }
	
	/**
	 * @param shouldCopyThumbnail int 
	 */
	 setShouldCopyThumbnail(shouldCopyThumbnail) {
	 	this.shouldCopyThumbnail = shouldCopyThumbnail;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShouldMakeHidden() {
	 	return this.shouldMakeHidden;
	 }
	
	/**
	 * @param shouldMakeHidden int 
	 */
	 setShouldMakeHidden(shouldMakeHidden) {
	 	this.shouldMakeHidden = shouldMakeHidden;
	 }
}
module.exports.LiveEntryRecordingOptions = LiveEntryRecordingOptions;

/**
 *
 */
class LiveEntry extends MediaEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveEntry';
	}
	
	/**
	 * The message to be presented when the stream is offline
	 * @return string
	 */
	 getOfflineMessage() {
	 	return this.offlineMessage;
	 }
	
	/**
	 * @param offlineMessage string The message to be presented when the stream is offline
	 */
	 setOfflineMessage(offlineMessage) {
	 	this.offlineMessage = offlineMessage;
	 }
	
	/**
	 * Recording Status Enabled/Disabled
	 * @return int
	 */
	 getRecordStatus() {
	 	return this.recordStatus;
	 }
	
	/**
	 * @param recordStatus int Recording Status Enabled/Disabled
	 */
	 setRecordStatus(recordStatus) {
	 	this.recordStatus = recordStatus;
	 }
	
	/**
	 * DVR Status Enabled/Disabled
	 * @return int
	 */
	 getDvrStatus() {
	 	return this.dvrStatus;
	 }
	
	/**
	 * @param dvrStatus int DVR Status Enabled/Disabled
	 */
	 setDvrStatus(dvrStatus) {
	 	this.dvrStatus = dvrStatus;
	 }
	
	/**
	 * Window of time which the DVR allows for backwards scrubbing (in minutes)
	 * @return int
	 */
	 getDvrWindow() {
	 	return this.dvrWindow;
	 }
	
	/**
	 * @param dvrWindow int Window of time which the DVR allows for backwards scrubbing (in minutes)
	 */
	 setDvrWindow(dvrWindow) {
	 	this.dvrWindow = dvrWindow;
	 }
	
	/**
	 * Elapsed recording time (in msec) up to the point where the live stream was last stopped (unpublished)
	 * @return int
	 */
	 getLastElapsedRecordingTime() {
	 	return this.lastElapsedRecordingTime;
	 }
	
	/**
	 * @param lastElapsedRecordingTime int Elapsed recording time (in msec) up to the point where the live stream was last stopped (unpublished)
	 */
	 setLastElapsedRecordingTime(lastElapsedRecordingTime) {
	 	this.lastElapsedRecordingTime = lastElapsedRecordingTime;
	 }
	
	/**
	 * Array of key value protocol->live stream url objects
	 * @return array
	 */
	 getLiveStreamConfigurations() {
	 	return this.liveStreamConfigurations;
	 }
	
	/**
	 * @param liveStreamConfigurations array Array of key value protocol->live stream url objects
	 */
	 setLiveStreamConfigurations(liveStreamConfigurations) {
	 	this.liveStreamConfigurations = liveStreamConfigurations;
	 }
	
	/**
	 * Recorded entry id
	 * @return string
	 */
	 getRecordedEntryId() {
	 	return this.recordedEntryId;
	 }
	
	/**
	 * @param recordedEntryId string Recorded entry id
	 */
	 setRecordedEntryId(recordedEntryId) {
	 	this.recordedEntryId = recordedEntryId;
	 }
	
	/**
	 * Flag denoting whether entry should be published by the media server
	 * @return int
	 */
	 getPushPublishEnabled() {
	 	return this.pushPublishEnabled;
	 }
	
	/**
	 * @param pushPublishEnabled int Flag denoting whether entry should be published by the media server
	 */
	 setPushPublishEnabled(pushPublishEnabled) {
	 	this.pushPublishEnabled = pushPublishEnabled;
	 }
	
	/**
	 * Array of publish configurations
	 * @return array
	 */
	 getPublishConfigurations() {
	 	return this.publishConfigurations;
	 }
	
	/**
	 * @param publishConfigurations array Array of publish configurations
	 */
	 setPublishConfigurations(publishConfigurations) {
	 	this.publishConfigurations = publishConfigurations;
	 }
	
	/**
	 * The first time in which the entry was broadcast
	 * @return int
	 */
	 getFirstBroadcast() {
	 	return this.firstBroadcast;
	 }
	
	/**
	 * The Last time in which the entry was broadcast
	 * @return int
	 */
	 getLastBroadcast() {
	 	return this.lastBroadcast;
	 }
	
	/**
	 * The time (unix timestamp in milliseconds) in which the entry broadcast started or 0 when the entry is off the air
	 * @return float
	 */
	 getCurrentBroadcastStartTime() {
	 	return this.currentBroadcastStartTime;
	 }
	
	/**
	 * @param currentBroadcastStartTime float The time (unix timestamp in milliseconds) in which the entry broadcast started or 0 when the entry is off the air
	 */
	 setCurrentBroadcastStartTime(currentBroadcastStartTime) {
	 	this.currentBroadcastStartTime = currentBroadcastStartTime;
	 }
	
	/**
	 * 
	 * @return LiveEntryRecordingOptions
	 */
	 getRecordingOptions() {
	 	return this.recordingOptions;
	 }
	
	/**
	 * @param recordingOptions LiveEntryRecordingOptions 
	 */
	 setRecordingOptions(recordingOptions) {
	 	this.recordingOptions = recordingOptions;
	 }
	
	/**
	 * the status of the entry of type EntryServerNodeStatus
	 * @return int
	 */
	 getLiveStatus() {
	 	return this.liveStatus;
	 }
}
module.exports.LiveEntry = LiveEntry;

/**
 *
 */
class LiveChannel extends LiveEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannel';
	}
	
	/**
	 * Playlist id to be played
	 * @return string
	 */
	 getPlaylistId() {
	 	return this.playlistId;
	 }
	
	/**
	 * @param playlistId string Playlist id to be played
	 */
	 setPlaylistId(playlistId) {
	 	this.playlistId = playlistId;
	 }
	
	/**
	 * Indicates that the segments should be repeated for ever
	 * @return int
	 */
	 getRepeat() {
	 	return this.repeat;
	 }
	
	/**
	 * @param repeat int Indicates that the segments should be repeated for ever
	 */
	 setRepeat(repeat) {
	 	this.repeat = repeat;
	 }
}
module.exports.LiveChannel = LiveChannel;

/**
 *
 */
class LiveChannelSegment extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelSegment';
	}
	
	/**
	 * Unique identifier
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Segment creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Segment update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Segment name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Segment name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Segment description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Segment description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Segment tags
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string Segment tags
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Segment could be associated with the main stream, as additional stream or as overlay
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Segment could be associated with the main stream, as additional stream or as overlay
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Live channel id
	 * @return string
	 */
	 getChannelId() {
	 	return this.channelId;
	 }
	
	/**
	 * @param channelId string Live channel id
	 */
	 setChannelId(channelId) {
	 	this.channelId = channelId;
	 }
	
	/**
	 * Entry id to be played
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string Entry id to be played
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * Segment start time trigger type
	 * @return string
	 */
	 getTriggerType() {
	 	return this.triggerType;
	 }
	
	/**
	 * @param triggerType string Segment start time trigger type
	 */
	 setTriggerType(triggerType) {
	 	this.triggerType = triggerType;
	 }
	
	/**
	 * Live channel segment that the trigger relates to
	 * @return string
	 */
	 getTriggerSegmentId() {
	 	return this.triggerSegmentId;
	 }
	
	/**
	 * @param triggerSegmentId string Live channel segment that the trigger relates to
	 */
	 setTriggerSegmentId(triggerSegmentId) {
	 	this.triggerSegmentId = triggerSegmentId;
	 }
	
	/**
	 * Segment play start time, in mili-seconds, according to trigger type
	 * @return float
	 */
	 getStartTime() {
	 	return this.startTime;
	 }
	
	/**
	 * @param startTime float Segment play start time, in mili-seconds, according to trigger type
	 */
	 setStartTime(startTime) {
	 	this.startTime = startTime;
	 }
	
	/**
	 * Segment play duration time, in mili-seconds
	 * @return float
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration float Segment play duration time, in mili-seconds
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
}
module.exports.LiveChannelSegment = LiveChannelSegment;

/**
 *
 */
class LiveReportExportParams extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveReportExportParams';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIds() {
	 	return this.entryIds;
	 }
	
	/**
	 * @param entryIds string 
	 */
	 setEntryIds(entryIds) {
	 	this.entryIds = entryIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRecpientEmail() {
	 	return this.recpientEmail;
	 }
	
	/**
	 * @param recpientEmail string 
	 */
	 setRecpientEmail(recpientEmail) {
	 	this.recpientEmail = recpientEmail;
	 }
	
	/**
	 * Time zone offset in minutes (between client to UTC)
	 * @return int
	 */
	 getTimeZoneOffset() {
	 	return this.timeZoneOffset;
	 }
	
	/**
	 * @param timeZoneOffset int Time zone offset in minutes (between client to UTC)
	 */
	 setTimeZoneOffset(timeZoneOffset) {
	 	this.timeZoneOffset = timeZoneOffset;
	 }
	
	/**
	 * Optional argument that allows controlling the prefix of the exported csv url
	 * @return string
	 */
	 getApplicationUrlTemplate() {
	 	return this.applicationUrlTemplate;
	 }
	
	/**
	 * @param applicationUrlTemplate string Optional argument that allows controlling the prefix of the exported csv url
	 */
	 setApplicationUrlTemplate(applicationUrlTemplate) {
	 	this.applicationUrlTemplate = applicationUrlTemplate;
	 }
}
module.exports.LiveReportExportParams = LiveReportExportParams;

/**
 *
 */
class LiveReportExportResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveReportExportResponse';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getReferenceJobId() {
	 	return this.referenceJobId;
	 }
	
	/**
	 * @param referenceJobId int 
	 */
	 setReferenceJobId(referenceJobId) {
	 	this.referenceJobId = referenceJobId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReportEmail() {
	 	return this.reportEmail;
	 }
	
	/**
	 * @param reportEmail string 
	 */
	 setReportEmail(reportEmail) {
	 	this.reportEmail = reportEmail;
	 }
}
module.exports.LiveReportExportResponse = LiveReportExportResponse;

/**
 *
 */
class LiveReportInputFilter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveReportInputFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIds() {
	 	return this.entryIds;
	 }
	
	/**
	 * @param entryIds string 
	 */
	 setEntryIds(entryIds) {
	 	this.entryIds = entryIds;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFromTime() {
	 	return this.fromTime;
	 }
	
	/**
	 * @param fromTime int 
	 */
	 setFromTime(fromTime) {
	 	this.fromTime = fromTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getToTime() {
	 	return this.toTime;
	 }
	
	/**
	 * @param toTime int 
	 */
	 setToTime(toTime) {
	 	this.toTime = toTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLive() {
	 	return this.live;
	 }
	
	/**
	 * @param live int 
	 */
	 setLive(live) {
	 	this.live = live;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string 
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
}
module.exports.LiveReportInputFilter = LiveReportInputFilter;

/**
 *
 */
class LiveStats extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStats';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getAudience() {
	 	return this.audience;
	 }
	
	/**
	 * @param audience int 
	 */
	 setAudience(audience) {
	 	this.audience = audience;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDvrAudience() {
	 	return this.dvrAudience;
	 }
	
	/**
	 * @param dvrAudience int 
	 */
	 setDvrAudience(dvrAudience) {
	 	this.dvrAudience = dvrAudience;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getAvgBitrate() {
	 	return this.avgBitrate;
	 }
	
	/**
	 * @param avgBitrate float 
	 */
	 setAvgBitrate(avgBitrate) {
	 	this.avgBitrate = avgBitrate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBufferTime() {
	 	return this.bufferTime;
	 }
	
	/**
	 * @param bufferTime int 
	 */
	 setBufferTime(bufferTime) {
	 	this.bufferTime = bufferTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * @param plays int 
	 */
	 setPlays(plays) {
	 	this.plays = plays;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSecondsViewed() {
	 	return this.secondsViewed;
	 }
	
	/**
	 * @param secondsViewed int 
	 */
	 setSecondsViewed(secondsViewed) {
	 	this.secondsViewed = secondsViewed;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartEvent() {
	 	return this.startEvent;
	 }
	
	/**
	 * @param startEvent int 
	 */
	 setStartEvent(startEvent) {
	 	this.startEvent = startEvent;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTimestamp() {
	 	return this.timestamp;
	 }
	
	/**
	 * @param timestamp int 
	 */
	 setTimestamp(timestamp) {
	 	this.timestamp = timestamp;
	 }
}
module.exports.LiveStats = LiveStats;

/**
 *
 */
class LiveStatsEvent extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStatsEvent';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * an integer representing the type of event being sent from the player
	 * @return int
	 */
	 getEventType() {
	 	return this.eventType;
	 }
	
	/**
	 * @param eventType int an integer representing the type of event being sent from the player
	 */
	 setEventType(eventType) {
	 	this.eventType = eventType;
	 }
	
	/**
	 * a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it
	 * @return string
	 */
	 getSessionId() {
	 	return this.sessionId;
	 }
	
	/**
	 * @param sessionId string a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it
	 */
	 setSessionId(sessionId) {
	 	this.sessionId = sessionId;
	 }
	
	/**
	 * incremental sequence of the event
	 * @return int
	 */
	 getEventIndex() {
	 	return this.eventIndex;
	 }
	
	/**
	 * @param eventIndex int incremental sequence of the event
	 */
	 setEventIndex(eventIndex) {
	 	this.eventIndex = eventIndex;
	 }
	
	/**
	 * buffer time in seconds from the last 10 seconds
	 * @return int
	 */
	 getBufferTime() {
	 	return this.bufferTime;
	 }
	
	/**
	 * @param bufferTime int buffer time in seconds from the last 10 seconds
	 */
	 setBufferTime(bufferTime) {
	 	this.bufferTime = bufferTime;
	 }
	
	/**
	 * bitrate used in the last 10 seconds
	 * @return int
	 */
	 getBitrate() {
	 	return this.bitrate;
	 }
	
	/**
	 * @param bitrate int bitrate used in the last 10 seconds
	 */
	 setBitrate(bitrate) {
	 	this.bitrate = bitrate;
	 }
	
	/**
	 * the referrer of the client
	 * @return string
	 */
	 getReferrer() {
	 	return this.referrer;
	 }
	
	/**
	 * @param referrer string the referrer of the client
	 */
	 setReferrer(referrer) {
	 	this.referrer = referrer;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsLive() {
	 	return this.isLive;
	 }
	
	/**
	 * @param isLive bool 
	 */
	 setIsLive(isLive) {
	 	this.isLive = isLive;
	 }
	
	/**
	 * the event start time as string
	 * @return string
	 */
	 getStartTime() {
	 	return this.startTime;
	 }
	
	/**
	 * @param startTime string the event start time as string
	 */
	 setStartTime(startTime) {
	 	this.startTime = startTime;
	 }
	
	/**
	 * delivery type used for this stream
	 * @return string
	 */
	 getDeliveryType() {
	 	return this.deliveryType;
	 }
	
	/**
	 * @param deliveryType string delivery type used for this stream
	 */
	 setDeliveryType(deliveryType) {
	 	this.deliveryType = deliveryType;
	 }
}
module.exports.LiveStatsEvent = LiveStatsEvent;

/**
 *
 */
class LiveStreamBitrate extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamBitrate';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getBitrate() {
	 	return this.bitrate;
	 }
	
	/**
	 * @param bitrate int 
	 */
	 setBitrate(bitrate) {
	 	this.bitrate = bitrate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int 
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int 
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
}
module.exports.LiveStreamBitrate = LiveStreamBitrate;

/**
 *
 */
class LiveStreamEntry extends LiveEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamEntry';
	}
	
	/**
	 * The stream id as provided by the provider
	 * @return string
	 */
	 getStreamRemoteId() {
	 	return this.streamRemoteId;
	 }
	
	/**
	 * The backup stream id as provided by the provider
	 * @return string
	 */
	 getStreamRemoteBackupId() {
	 	return this.streamRemoteBackupId;
	 }
	
	/**
	 * Array of supported bitrates
	 * @return array
	 */
	 getBitrates() {
	 	return this.bitrates;
	 }
	
	/**
	 * @param bitrates array Array of supported bitrates
	 */
	 setBitrates(bitrates) {
	 	this.bitrates = bitrates;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrimaryBroadcastingUrl() {
	 	return this.primaryBroadcastingUrl;
	 }
	
	/**
	 * @param primaryBroadcastingUrl string 
	 */
	 setPrimaryBroadcastingUrl(primaryBroadcastingUrl) {
	 	this.primaryBroadcastingUrl = primaryBroadcastingUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSecondaryBroadcastingUrl() {
	 	return this.secondaryBroadcastingUrl;
	 }
	
	/**
	 * @param secondaryBroadcastingUrl string 
	 */
	 setSecondaryBroadcastingUrl(secondaryBroadcastingUrl) {
	 	this.secondaryBroadcastingUrl = secondaryBroadcastingUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrimaryRtspBroadcastingUrl() {
	 	return this.primaryRtspBroadcastingUrl;
	 }
	
	/**
	 * @param primaryRtspBroadcastingUrl string 
	 */
	 setPrimaryRtspBroadcastingUrl(primaryRtspBroadcastingUrl) {
	 	this.primaryRtspBroadcastingUrl = primaryRtspBroadcastingUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSecondaryRtspBroadcastingUrl() {
	 	return this.secondaryRtspBroadcastingUrl;
	 }
	
	/**
	 * @param secondaryRtspBroadcastingUrl string 
	 */
	 setSecondaryRtspBroadcastingUrl(secondaryRtspBroadcastingUrl) {
	 	this.secondaryRtspBroadcastingUrl = secondaryRtspBroadcastingUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamName() {
	 	return this.streamName;
	 }
	
	/**
	 * @param streamName string 
	 */
	 setStreamName(streamName) {
	 	this.streamName = streamName;
	 }
	
	/**
	 * The stream url
	 * @return string
	 */
	 getStreamUrl() {
	 	return this.streamUrl;
	 }
	
	/**
	 * @param streamUrl string The stream url
	 */
	 setStreamUrl(streamUrl) {
	 	this.streamUrl = streamUrl;
	 }
	
	/**
	 * HLS URL - URL for live stream playback on mobile device
	 * @return string
	 */
	 getHlsStreamUrl() {
	 	return this.hlsStreamUrl;
	 }
	
	/**
	 * @param hlsStreamUrl string HLS URL - URL for live stream playback on mobile device
	 */
	 setHlsStreamUrl(hlsStreamUrl) {
	 	this.hlsStreamUrl = hlsStreamUrl;
	 }
	
	/**
	 * URL Manager to handle the live stream URL (for instance, add token)
	 * @return string
	 */
	 getUrlManager() {
	 	return this.urlManager;
	 }
	
	/**
	 * @param urlManager string URL Manager to handle the live stream URL (for instance, add token)
	 */
	 setUrlManager(urlManager) {
	 	this.urlManager = urlManager;
	 }
	
	/**
	 * The broadcast primary ip
	 * @return string
	 */
	 getEncodingIP1() {
	 	return this.encodingIP1;
	 }
	
	/**
	 * @param encodingIP1 string The broadcast primary ip
	 */
	 setEncodingIP1(encodingIP1) {
	 	this.encodingIP1 = encodingIP1;
	 }
	
	/**
	 * The broadcast secondary ip
	 * @return string
	 */
	 getEncodingIP2() {
	 	return this.encodingIP2;
	 }
	
	/**
	 * @param encodingIP2 string The broadcast secondary ip
	 */
	 setEncodingIP2(encodingIP2) {
	 	this.encodingIP2 = encodingIP2;
	 }
	
	/**
	 * The broadcast password
	 * @return string
	 */
	 getStreamPassword() {
	 	return this.streamPassword;
	 }
	
	/**
	 * @param streamPassword string The broadcast password
	 */
	 setStreamPassword(streamPassword) {
	 	this.streamPassword = streamPassword;
	 }
	
	/**
	 * The broadcast username
	 * @return string
	 */
	 getStreamUsername() {
	 	return this.streamUsername;
	 }
	
	/**
	 * The Streams primary server node id
	 * @return int
	 */
	 getPrimaryServerNodeId() {
	 	return this.primaryServerNodeId;
	 }
}
module.exports.LiveStreamEntry = LiveStreamEntry;

/**
 *
 */
class LiveStreamParams extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamParams';
	}
	
	/**
	 * Bit rate of the stream. (i.e. 900)
	 * @return int
	 */
	 getBitrate() {
	 	return this.bitrate;
	 }
	
	/**
	 * @param bitrate int Bit rate of the stream. (i.e. 900)
	 */
	 setBitrate(bitrate) {
	 	this.bitrate = bitrate;
	 }
	
	/**
	 * flavor asset id
	 * @return string
	 */
	 getFlavorId() {
	 	return this.flavorId;
	 }
	
	/**
	 * @param flavorId string flavor asset id
	 */
	 setFlavorId(flavorId) {
	 	this.flavorId = flavorId;
	 }
	
	/**
	 * Stream's width
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int Stream's width
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * Stream's height
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int Stream's height
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * Live stream's codec
	 * @return string
	 */
	 getCodec() {
	 	return this.codec;
	 }
	
	/**
	 * @param codec string Live stream's codec
	 */
	 setCodec(codec) {
	 	this.codec = codec;
	 }
	
	/**
	 * Live stream's farme rate
	 * @return int
	 */
	 getFrameRate() {
	 	return this.frameRate;
	 }
	
	/**
	 * @param frameRate int Live stream's farme rate
	 */
	 setFrameRate(frameRate) {
	 	this.frameRate = frameRate;
	 }
	
	/**
	 * Live stream's key frame interval
	 * @return float
	 */
	 getKeyFrameInterval() {
	 	return this.keyFrameInterval;
	 }
	
	/**
	 * @param keyFrameInterval float Live stream's key frame interval
	 */
	 setKeyFrameInterval(keyFrameInterval) {
	 	this.keyFrameInterval = keyFrameInterval;
	 }
}
module.exports.LiveStreamParams = LiveStreamParams;

/**
 *
 */
class BaseEntryBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryBaseFilter';
	}
	
	/**
	 * This filter should be in use for retrieving only a specific entry (identified by its entryId)
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string This filter should be in use for retrieving only a specific entry (identified by its entryId)
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings)
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings)
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdNotIn() {
	 	return this.idNotIn;
	 }
	
	/**
	 * @param idNotIn string 
	 */
	 setIdNotIn(idNotIn) {
	 	this.idNotIn = idNotIn;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getNameLike() {
	 	return this.nameLike;
	 }
	
	/**
	 * @param nameLike string This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string)
	 */
	 setNameLike(nameLike) {
	 	this.nameLike = nameLike;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getNameMultiLikeOr() {
	 	return this.nameMultiLikeOr;
	 }
	
	/**
	 * @param nameMultiLikeOr string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)
	 */
	 setNameMultiLikeOr(nameMultiLikeOr) {
	 	this.nameMultiLikeOr = nameMultiLikeOr;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getNameMultiLikeAnd() {
	 	return this.nameMultiLikeAnd;
	 }
	
	/**
	 * @param nameMultiLikeAnd string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)
	 */
	 setNameMultiLikeAnd(nameMultiLikeAnd) {
	 	this.nameMultiLikeAnd = nameMultiLikeAnd;
	 }
	
	/**
	 * This filter should be in use for retrieving entries with a specific name
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string This filter should be in use for retrieving entries with a specific name
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID)
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID)
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs)
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs)
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id)
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id)
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdNotIn() {
	 	return this.userIdNotIn;
	 }
	
	/**
	 * @param userIdNotIn string 
	 */
	 setUserIdNotIn(userIdNotIn) {
	 	this.userIdNotIn = userIdNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreatorIdEqual() {
	 	return this.creatorIdEqual;
	 }
	
	/**
	 * @param creatorIdEqual string 
	 */
	 setCreatorIdEqual(creatorIdEqual) {
	 	this.creatorIdEqual = creatorIdEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string)
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getAdminTagsLike() {
	 	return this.adminTagsLike;
	 }
	
	/**
	 * @param adminTagsLike string This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string)
	 */
	 setAdminTagsLike(adminTagsLike) {
	 	this.adminTagsLike = adminTagsLike;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getAdminTagsMultiLikeOr() {
	 	return this.adminTagsMultiLikeOr;
	 }
	
	/**
	 * @param adminTagsMultiLikeOr string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string)
	 */
	 setAdminTagsMultiLikeOr(adminTagsMultiLikeOr) {
	 	this.adminTagsMultiLikeOr = adminTagsMultiLikeOr;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)
	 * @return string
	 */
	 getAdminTagsMultiLikeAnd() {
	 	return this.adminTagsMultiLikeAnd;
	 }
	
	/**
	 * @param adminTagsMultiLikeAnd string This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string)
	 */
	 setAdminTagsMultiLikeAnd(adminTagsMultiLikeAnd) {
	 	this.adminTagsMultiLikeAnd = adminTagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesMatchAnd() {
	 	return this.categoriesMatchAnd;
	 }
	
	/**
	 * @param categoriesMatchAnd string 
	 */
	 setCategoriesMatchAnd(categoriesMatchAnd) {
	 	this.categoriesMatchAnd = categoriesMatchAnd;
	 }
	
	/**
	 * All entries within these categories or their child categories
	 * @return string
	 */
	 getCategoriesMatchOr() {
	 	return this.categoriesMatchOr;
	 }
	
	/**
	 * @param categoriesMatchOr string All entries within these categories or their child categories
	 */
	 setCategoriesMatchOr(categoriesMatchOr) {
	 	this.categoriesMatchOr = categoriesMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesNotContains() {
	 	return this.categoriesNotContains;
	 }
	
	/**
	 * @param categoriesNotContains string 
	 */
	 setCategoriesNotContains(categoriesNotContains) {
	 	this.categoriesNotContains = categoriesNotContains;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesIdsMatchAnd() {
	 	return this.categoriesIdsMatchAnd;
	 }
	
	/**
	 * @param categoriesIdsMatchAnd string 
	 */
	 setCategoriesIdsMatchAnd(categoriesIdsMatchAnd) {
	 	this.categoriesIdsMatchAnd = categoriesIdsMatchAnd;
	 }
	
	/**
	 * All entries of the categories, excluding their child categories.
 * To include entries of the child categories, use categoryAncestorIdIn, or categoriesMatchOr
	 * @return string
	 */
	 getCategoriesIdsMatchOr() {
	 	return this.categoriesIdsMatchOr;
	 }
	
	/**
	 * @param categoriesIdsMatchOr string All entries of the categories, excluding their child categories.
 * To include entries of the child categories, use categoryAncestorIdIn, or categoriesMatchOr
	 */
	 setCategoriesIdsMatchOr(categoriesIdsMatchOr) {
	 	this.categoriesIdsMatchOr = categoriesIdsMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesIdsNotContains() {
	 	return this.categoriesIdsNotContains;
	 }
	
	/**
	 * @param categoriesIdsNotContains string 
	 */
	 setCategoriesIdsNotContains(categoriesIdsNotContains) {
	 	this.categoriesIdsNotContains = categoriesIdsNotContains;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCategoriesIdsEmpty() {
	 	return this.categoriesIdsEmpty;
	 }
	
	/**
	 * @param categoriesIdsEmpty int 
	 */
	 setCategoriesIdsEmpty(categoriesIdsEmpty) {
	 	this.categoriesIdsEmpty = categoriesIdsEmpty;
	 }
	
	/**
	 * This filter should be in use for retrieving only entries, at a specific {
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string This filter should be in use for retrieving only entries, at a specific {
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving only entries, not at a specific {
	 * @return string
	 */
	 getStatusNotEqual() {
	 	return this.statusNotEqual;
	 }
	
	/**
	 * @param statusNotEqual string This filter should be in use for retrieving only entries, not at a specific {
	 */
	 setStatusNotEqual(statusNotEqual) {
	 	this.statusNotEqual = statusNotEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving only entries, at few specific {
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string This filter should be in use for retrieving only entries, at few specific {
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * This filter should be in use for retrieving only entries, not at few specific {
	 * @return string
	 */
	 getStatusNotIn() {
	 	return this.statusNotIn;
	 }
	
	/**
	 * @param statusNotIn string This filter should be in use for retrieving only entries, not at few specific {
	 */
	 setStatusNotIn(statusNotIn) {
	 	this.statusNotIn = statusNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getModerationStatusEqual() {
	 	return this.moderationStatusEqual;
	 }
	
	/**
	 * @param moderationStatusEqual int 
	 */
	 setModerationStatusEqual(moderationStatusEqual) {
	 	this.moderationStatusEqual = moderationStatusEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getModerationStatusNotEqual() {
	 	return this.moderationStatusNotEqual;
	 }
	
	/**
	 * @param moderationStatusNotEqual int 
	 */
	 setModerationStatusNotEqual(moderationStatusNotEqual) {
	 	this.moderationStatusNotEqual = moderationStatusNotEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getModerationStatusIn() {
	 	return this.moderationStatusIn;
	 }
	
	/**
	 * @param moderationStatusIn string 
	 */
	 setModerationStatusIn(moderationStatusIn) {
	 	this.moderationStatusIn = moderationStatusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getModerationStatusNotIn() {
	 	return this.moderationStatusNotIn;
	 }
	
	/**
	 * @param moderationStatusNotIn string 
	 */
	 setModerationStatusNotIn(moderationStatusNotIn) {
	 	this.moderationStatusNotIn = moderationStatusNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving entries of few {
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string This filter should be in use for retrieving entries of few {
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format)
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format)
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format)
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format)
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTotalRankLessThanOrEqual() {
	 	return this.totalRankLessThanOrEqual;
	 }
	
	/**
	 * @param totalRankLessThanOrEqual int 
	 */
	 setTotalRankLessThanOrEqual(totalRankLessThanOrEqual) {
	 	this.totalRankLessThanOrEqual = totalRankLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTotalRankGreaterThanOrEqual() {
	 	return this.totalRankGreaterThanOrEqual;
	 }
	
	/**
	 * @param totalRankGreaterThanOrEqual int 
	 */
	 setTotalRankGreaterThanOrEqual(totalRankGreaterThanOrEqual) {
	 	this.totalRankGreaterThanOrEqual = totalRankGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getGroupIdEqual() {
	 	return this.groupIdEqual;
	 }
	
	/**
	 * @param groupIdEqual int 
	 */
	 setGroupIdEqual(groupIdEqual) {
	 	this.groupIdEqual = groupIdEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags
	 * @return string
	 */
	 getSearchTextMatchAnd() {
	 	return this.searchTextMatchAnd;
	 }
	
	/**
	 * @param searchTextMatchAnd string This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags
	 */
	 setSearchTextMatchAnd(searchTextMatchAnd) {
	 	this.searchTextMatchAnd = searchTextMatchAnd;
	 }
	
	/**
	 * This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags
	 * @return string
	 */
	 getSearchTextMatchOr() {
	 	return this.searchTextMatchOr;
	 }
	
	/**
	 * @param searchTextMatchOr string This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags
	 */
	 setSearchTextMatchOr(searchTextMatchOr) {
	 	this.searchTextMatchOr = searchTextMatchOr;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAccessControlIdEqual() {
	 	return this.accessControlIdEqual;
	 }
	
	/**
	 * @param accessControlIdEqual int 
	 */
	 setAccessControlIdEqual(accessControlIdEqual) {
	 	this.accessControlIdEqual = accessControlIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAccessControlIdIn() {
	 	return this.accessControlIdIn;
	 }
	
	/**
	 * @param accessControlIdIn string 
	 */
	 setAccessControlIdIn(accessControlIdIn) {
	 	this.accessControlIdIn = accessControlIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDateGreaterThanOrEqual() {
	 	return this.startDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqual int 
	 */
	 setStartDateGreaterThanOrEqual(startDateGreaterThanOrEqual) {
	 	this.startDateGreaterThanOrEqual = startDateGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDateLessThanOrEqual() {
	 	return this.startDateLessThanOrEqual;
	 }
	
	/**
	 * @param startDateLessThanOrEqual int 
	 */
	 setStartDateLessThanOrEqual(startDateLessThanOrEqual) {
	 	this.startDateLessThanOrEqual = startDateLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDateGreaterThanOrEqualOrNull() {
	 	return this.startDateGreaterThanOrEqualOrNull;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqualOrNull int 
	 */
	 setStartDateGreaterThanOrEqualOrNull(startDateGreaterThanOrEqualOrNull) {
	 	this.startDateGreaterThanOrEqualOrNull = startDateGreaterThanOrEqualOrNull;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDateLessThanOrEqualOrNull() {
	 	return this.startDateLessThanOrEqualOrNull;
	 }
	
	/**
	 * @param startDateLessThanOrEqualOrNull int 
	 */
	 setStartDateLessThanOrEqualOrNull(startDateLessThanOrEqualOrNull) {
	 	this.startDateLessThanOrEqualOrNull = startDateLessThanOrEqualOrNull;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDateGreaterThanOrEqual() {
	 	return this.endDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param endDateGreaterThanOrEqual int 
	 */
	 setEndDateGreaterThanOrEqual(endDateGreaterThanOrEqual) {
	 	this.endDateGreaterThanOrEqual = endDateGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDateLessThanOrEqual() {
	 	return this.endDateLessThanOrEqual;
	 }
	
	/**
	 * @param endDateLessThanOrEqual int 
	 */
	 setEndDateLessThanOrEqual(endDateLessThanOrEqual) {
	 	this.endDateLessThanOrEqual = endDateLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDateGreaterThanOrEqualOrNull() {
	 	return this.endDateGreaterThanOrEqualOrNull;
	 }
	
	/**
	 * @param endDateGreaterThanOrEqualOrNull int 
	 */
	 setEndDateGreaterThanOrEqualOrNull(endDateGreaterThanOrEqualOrNull) {
	 	this.endDateGreaterThanOrEqualOrNull = endDateGreaterThanOrEqualOrNull;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDateLessThanOrEqualOrNull() {
	 	return this.endDateLessThanOrEqualOrNull;
	 }
	
	/**
	 * @param endDateLessThanOrEqualOrNull int 
	 */
	 setEndDateLessThanOrEqualOrNull(endDateLessThanOrEqualOrNull) {
	 	this.endDateLessThanOrEqualOrNull = endDateLessThanOrEqualOrNull;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceIdEqual() {
	 	return this.referenceIdEqual;
	 }
	
	/**
	 * @param referenceIdEqual string 
	 */
	 setReferenceIdEqual(referenceIdEqual) {
	 	this.referenceIdEqual = referenceIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceIdIn() {
	 	return this.referenceIdIn;
	 }
	
	/**
	 * @param referenceIdIn string 
	 */
	 setReferenceIdIn(referenceIdIn) {
	 	this.referenceIdIn = referenceIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReplacingEntryIdEqual() {
	 	return this.replacingEntryIdEqual;
	 }
	
	/**
	 * @param replacingEntryIdEqual string 
	 */
	 setReplacingEntryIdEqual(replacingEntryIdEqual) {
	 	this.replacingEntryIdEqual = replacingEntryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReplacingEntryIdIn() {
	 	return this.replacingEntryIdIn;
	 }
	
	/**
	 * @param replacingEntryIdIn string 
	 */
	 setReplacingEntryIdIn(replacingEntryIdIn) {
	 	this.replacingEntryIdIn = replacingEntryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReplacedEntryIdEqual() {
	 	return this.replacedEntryIdEqual;
	 }
	
	/**
	 * @param replacedEntryIdEqual string 
	 */
	 setReplacedEntryIdEqual(replacedEntryIdEqual) {
	 	this.replacedEntryIdEqual = replacedEntryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReplacedEntryIdIn() {
	 	return this.replacedEntryIdIn;
	 }
	
	/**
	 * @param replacedEntryIdIn string 
	 */
	 setReplacedEntryIdIn(replacedEntryIdIn) {
	 	this.replacedEntryIdIn = replacedEntryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReplacementStatusEqual() {
	 	return this.replacementStatusEqual;
	 }
	
	/**
	 * @param replacementStatusEqual string 
	 */
	 setReplacementStatusEqual(replacementStatusEqual) {
	 	this.replacementStatusEqual = replacementStatusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReplacementStatusIn() {
	 	return this.replacementStatusIn;
	 }
	
	/**
	 * @param replacementStatusIn string 
	 */
	 setReplacementStatusIn(replacementStatusIn) {
	 	this.replacementStatusIn = replacementStatusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueGreaterThanOrEqual() {
	 	return this.partnerSortValueGreaterThanOrEqual;
	 }
	
	/**
	 * @param partnerSortValueGreaterThanOrEqual int 
	 */
	 setPartnerSortValueGreaterThanOrEqual(partnerSortValueGreaterThanOrEqual) {
	 	this.partnerSortValueGreaterThanOrEqual = partnerSortValueGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueLessThanOrEqual() {
	 	return this.partnerSortValueLessThanOrEqual;
	 }
	
	/**
	 * @param partnerSortValueLessThanOrEqual int 
	 */
	 setPartnerSortValueLessThanOrEqual(partnerSortValueLessThanOrEqual) {
	 	this.partnerSortValueLessThanOrEqual = partnerSortValueLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootEntryIdEqual() {
	 	return this.rootEntryIdEqual;
	 }
	
	/**
	 * @param rootEntryIdEqual string 
	 */
	 setRootEntryIdEqual(rootEntryIdEqual) {
	 	this.rootEntryIdEqual = rootEntryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootEntryIdIn() {
	 	return this.rootEntryIdIn;
	 }
	
	/**
	 * @param rootEntryIdIn string 
	 */
	 setRootEntryIdIn(rootEntryIdIn) {
	 	this.rootEntryIdIn = rootEntryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentEntryIdEqual() {
	 	return this.parentEntryIdEqual;
	 }
	
	/**
	 * @param parentEntryIdEqual string 
	 */
	 setParentEntryIdEqual(parentEntryIdEqual) {
	 	this.parentEntryIdEqual = parentEntryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntitledUsersEditMatchAnd() {
	 	return this.entitledUsersEditMatchAnd;
	 }
	
	/**
	 * @param entitledUsersEditMatchAnd string 
	 */
	 setEntitledUsersEditMatchAnd(entitledUsersEditMatchAnd) {
	 	this.entitledUsersEditMatchAnd = entitledUsersEditMatchAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntitledUsersEditMatchOr() {
	 	return this.entitledUsersEditMatchOr;
	 }
	
	/**
	 * @param entitledUsersEditMatchOr string 
	 */
	 setEntitledUsersEditMatchOr(entitledUsersEditMatchOr) {
	 	this.entitledUsersEditMatchOr = entitledUsersEditMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntitledUsersPublishMatchAnd() {
	 	return this.entitledUsersPublishMatchAnd;
	 }
	
	/**
	 * @param entitledUsersPublishMatchAnd string 
	 */
	 setEntitledUsersPublishMatchAnd(entitledUsersPublishMatchAnd) {
	 	this.entitledUsersPublishMatchAnd = entitledUsersPublishMatchAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntitledUsersPublishMatchOr() {
	 	return this.entitledUsersPublishMatchOr;
	 }
	
	/**
	 * @param entitledUsersPublishMatchOr string 
	 */
	 setEntitledUsersPublishMatchOr(entitledUsersPublishMatchOr) {
	 	this.entitledUsersPublishMatchOr = entitledUsersPublishMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsNameMultiLikeOr() {
	 	return this.tagsNameMultiLikeOr;
	 }
	
	/**
	 * @param tagsNameMultiLikeOr string 
	 */
	 setTagsNameMultiLikeOr(tagsNameMultiLikeOr) {
	 	this.tagsNameMultiLikeOr = tagsNameMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsAdminTagsMultiLikeOr() {
	 	return this.tagsAdminTagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsAdminTagsMultiLikeOr string 
	 */
	 setTagsAdminTagsMultiLikeOr(tagsAdminTagsMultiLikeOr) {
	 	this.tagsAdminTagsMultiLikeOr = tagsAdminTagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsAdminTagsNameMultiLikeOr() {
	 	return this.tagsAdminTagsNameMultiLikeOr;
	 }
	
	/**
	 * @param tagsAdminTagsNameMultiLikeOr string 
	 */
	 setTagsAdminTagsNameMultiLikeOr(tagsAdminTagsNameMultiLikeOr) {
	 	this.tagsAdminTagsNameMultiLikeOr = tagsAdminTagsNameMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsNameMultiLikeAnd() {
	 	return this.tagsNameMultiLikeAnd;
	 }
	
	/**
	 * @param tagsNameMultiLikeAnd string 
	 */
	 setTagsNameMultiLikeAnd(tagsNameMultiLikeAnd) {
	 	this.tagsNameMultiLikeAnd = tagsNameMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsAdminTagsMultiLikeAnd() {
	 	return this.tagsAdminTagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsAdminTagsMultiLikeAnd string 
	 */
	 setTagsAdminTagsMultiLikeAnd(tagsAdminTagsMultiLikeAnd) {
	 	this.tagsAdminTagsMultiLikeAnd = tagsAdminTagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsAdminTagsNameMultiLikeAnd() {
	 	return this.tagsAdminTagsNameMultiLikeAnd;
	 }
	
	/**
	 * @param tagsAdminTagsNameMultiLikeAnd string 
	 */
	 setTagsAdminTagsNameMultiLikeAnd(tagsAdminTagsNameMultiLikeAnd) {
	 	this.tagsAdminTagsNameMultiLikeAnd = tagsAdminTagsNameMultiLikeAnd;
	 }
}
module.exports.BaseEntryBaseFilter = BaseEntryBaseFilter;

/**
 *
 */
class BaseEntryFilter extends BaseEntryBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string 
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsRoot() {
	 	return this.isRoot;
	 }
	
	/**
	 * @param isRoot int 
	 */
	 setIsRoot(isRoot) {
	 	this.isRoot = isRoot;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesFullNameIn() {
	 	return this.categoriesFullNameIn;
	 }
	
	/**
	 * @param categoriesFullNameIn string 
	 */
	 setCategoriesFullNameIn(categoriesFullNameIn) {
	 	this.categoriesFullNameIn = categoriesFullNameIn;
	 }
	
	/**
	 * All entries within this categoy or in child categories
	 * @return string
	 */
	 getCategoryAncestorIdIn() {
	 	return this.categoryAncestorIdIn;
	 }
	
	/**
	 * @param categoryAncestorIdIn string All entries within this categoy or in child categories
	 */
	 setCategoryAncestorIdIn(categoryAncestorIdIn) {
	 	this.categoryAncestorIdIn = categoryAncestorIdIn;
	 }
	
	/**
	 * The id of the original entry
	 * @return string
	 */
	 getRedirectFromEntryId() {
	 	return this.redirectFromEntryId;
	 }
	
	/**
	 * @param redirectFromEntryId string The id of the original entry
	 */
	 setRedirectFromEntryId(redirectFromEntryId) {
	 	this.redirectFromEntryId = redirectFromEntryId;
	 }
}
module.exports.BaseEntryFilter = BaseEntryFilter;

/**
 *
 */
class PlayableEntryBaseFilter extends BaseEntryFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayableEntryBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getLastPlayedAtGreaterThanOrEqual() {
	 	return this.lastPlayedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param lastPlayedAtGreaterThanOrEqual int 
	 */
	 setLastPlayedAtGreaterThanOrEqual(lastPlayedAtGreaterThanOrEqual) {
	 	this.lastPlayedAtGreaterThanOrEqual = lastPlayedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastPlayedAtLessThanOrEqual() {
	 	return this.lastPlayedAtLessThanOrEqual;
	 }
	
	/**
	 * @param lastPlayedAtLessThanOrEqual int 
	 */
	 setLastPlayedAtLessThanOrEqual(lastPlayedAtLessThanOrEqual) {
	 	this.lastPlayedAtLessThanOrEqual = lastPlayedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDurationLessThan() {
	 	return this.durationLessThan;
	 }
	
	/**
	 * @param durationLessThan int 
	 */
	 setDurationLessThan(durationLessThan) {
	 	this.durationLessThan = durationLessThan;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDurationGreaterThan() {
	 	return this.durationGreaterThan;
	 }
	
	/**
	 * @param durationGreaterThan int 
	 */
	 setDurationGreaterThan(durationGreaterThan) {
	 	this.durationGreaterThan = durationGreaterThan;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDurationLessThanOrEqual() {
	 	return this.durationLessThanOrEqual;
	 }
	
	/**
	 * @param durationLessThanOrEqual int 
	 */
	 setDurationLessThanOrEqual(durationLessThanOrEqual) {
	 	this.durationLessThanOrEqual = durationLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDurationGreaterThanOrEqual() {
	 	return this.durationGreaterThanOrEqual;
	 }
	
	/**
	 * @param durationGreaterThanOrEqual int 
	 */
	 setDurationGreaterThanOrEqual(durationGreaterThanOrEqual) {
	 	this.durationGreaterThanOrEqual = durationGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDurationTypeMatchOr() {
	 	return this.durationTypeMatchOr;
	 }
	
	/**
	 * @param durationTypeMatchOr string 
	 */
	 setDurationTypeMatchOr(durationTypeMatchOr) {
	 	this.durationTypeMatchOr = durationTypeMatchOr;
	 }
}
module.exports.PlayableEntryBaseFilter = PlayableEntryBaseFilter;

/**
 *
 */
class PlayableEntryFilter extends PlayableEntryBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayableEntryFilter';
	}
}
module.exports.PlayableEntryFilter = PlayableEntryFilter;

/**
 *
 */
class MediaEntryBaseFilter extends PlayableEntryFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaEntryBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getMediaTypeEqual() {
	 	return this.mediaTypeEqual;
	 }
	
	/**
	 * @param mediaTypeEqual int 
	 */
	 setMediaTypeEqual(mediaTypeEqual) {
	 	this.mediaTypeEqual = mediaTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMediaTypeIn() {
	 	return this.mediaTypeIn;
	 }
	
	/**
	 * @param mediaTypeIn string 
	 */
	 setMediaTypeIn(mediaTypeIn) {
	 	this.mediaTypeIn = mediaTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceTypeEqual() {
	 	return this.sourceTypeEqual;
	 }
	
	/**
	 * @param sourceTypeEqual string 
	 */
	 setSourceTypeEqual(sourceTypeEqual) {
	 	this.sourceTypeEqual = sourceTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceTypeNotEqual() {
	 	return this.sourceTypeNotEqual;
	 }
	
	/**
	 * @param sourceTypeNotEqual string 
	 */
	 setSourceTypeNotEqual(sourceTypeNotEqual) {
	 	this.sourceTypeNotEqual = sourceTypeNotEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceTypeIn() {
	 	return this.sourceTypeIn;
	 }
	
	/**
	 * @param sourceTypeIn string 
	 */
	 setSourceTypeIn(sourceTypeIn) {
	 	this.sourceTypeIn = sourceTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceTypeNotIn() {
	 	return this.sourceTypeNotIn;
	 }
	
	/**
	 * @param sourceTypeNotIn string 
	 */
	 setSourceTypeNotIn(sourceTypeNotIn) {
	 	this.sourceTypeNotIn = sourceTypeNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMediaDateGreaterThanOrEqual() {
	 	return this.mediaDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param mediaDateGreaterThanOrEqual int 
	 */
	 setMediaDateGreaterThanOrEqual(mediaDateGreaterThanOrEqual) {
	 	this.mediaDateGreaterThanOrEqual = mediaDateGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMediaDateLessThanOrEqual() {
	 	return this.mediaDateLessThanOrEqual;
	 }
	
	/**
	 * @param mediaDateLessThanOrEqual int 
	 */
	 setMediaDateLessThanOrEqual(mediaDateLessThanOrEqual) {
	 	this.mediaDateLessThanOrEqual = mediaDateLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorParamsIdsMatchOr() {
	 	return this.flavorParamsIdsMatchOr;
	 }
	
	/**
	 * @param flavorParamsIdsMatchOr string 
	 */
	 setFlavorParamsIdsMatchOr(flavorParamsIdsMatchOr) {
	 	this.flavorParamsIdsMatchOr = flavorParamsIdsMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorParamsIdsMatchAnd() {
	 	return this.flavorParamsIdsMatchAnd;
	 }
	
	/**
	 * @param flavorParamsIdsMatchAnd string 
	 */
	 setFlavorParamsIdsMatchAnd(flavorParamsIdsMatchAnd) {
	 	this.flavorParamsIdsMatchAnd = flavorParamsIdsMatchAnd;
	 }
}
module.exports.MediaEntryBaseFilter = MediaEntryBaseFilter;

/**
 *
 */
class MediaEntryFilter extends MediaEntryBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaEntryFilter';
	}
}
module.exports.MediaEntryFilter = MediaEntryFilter;

/**
 *
 */
class MediaEntryFilterForPlaylist extends MediaEntryFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaEntryFilterForPlaylist';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getLimit() {
	 	return this.limit;
	 }
	
	/**
	 * @param limit int 
	 */
	 setLimit(limit) {
	 	this.limit = limit;
	 }
}
module.exports.MediaEntryFilterForPlaylist = MediaEntryFilterForPlaylist;

/**
 *
 */
class Metadata extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadata';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileId() {
	 	return this.metadataProfileId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileVersion() {
	 	return this.metadataProfileVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMetadataObjectType() {
	 	return this.metadataObjectType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getXml() {
	 	return this.xml;
	 }
}
module.exports.Metadata = Metadata;

/**
 *
 */
class MetadataProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataProfile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMetadataObjectType() {
	 	return this.metadataObjectType;
	 }
	
	/**
	 * @param metadataObjectType string 
	 */
	 setMetadataObjectType(metadataObjectType) {
	 	this.metadataObjectType = metadataObjectType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getXsd() {
	 	return this.xsd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getXslt() {
	 	return this.xslt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreateMode() {
	 	return this.createMode;
	 }
	
	/**
	 * @param createMode int 
	 */
	 setCreateMode(createMode) {
	 	this.createMode = createMode;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getDisableReIndexing() {
	 	return this.disableReIndexing;
	 }
	
	/**
	 * @param disableReIndexing bool 
	 */
	 setDisableReIndexing(disableReIndexing) {
	 	this.disableReIndexing = disableReIndexing;
	 }
}
module.exports.MetadataProfile = MetadataProfile;

/**
 *
 */
class MetadataProfileField extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataProfileField';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getXPath() {
	 	return this.xPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
}
module.exports.MetadataProfileField = MetadataProfileField;

/**
 *
 */
class MixEntry extends PlayableEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMixEntry';
	}
	
	/**
	 * Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly)
	 * @return bool
	 */
	 getHasRealThumbnail() {
	 	return this.hasRealThumbnail;
	 }
	
	/**
	 * The editor type used to edit the metadata
	 * @return int
	 */
	 getEditorType() {
	 	return this.editorType;
	 }
	
	/**
	 * @param editorType int The editor type used to edit the metadata
	 */
	 setEditorType(editorType) {
	 	this.editorType = editorType;
	 }
	
	/**
	 * The xml data of the mix
	 * @return string
	 */
	 getDataContent() {
	 	return this.dataContent;
	 }
	
	/**
	 * @param dataContent string The xml data of the mix
	 */
	 setDataContent(dataContent) {
	 	this.dataContent = dataContent;
	 }
}
module.exports.MixEntry = MixEntry;

/**
 *
 */
class ModerationFlag extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaModerationFlag';
	}
	
	/**
	 * Moderation flag id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * The user id that added the moderation flag
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The type of the moderation flag (entry or user)
	 * @return string
	 */
	 getModerationObjectType() {
	 	return this.moderationObjectType;
	 }
	
	/**
	 * If moderation flag is set for entry, this is the flagged entry id
	 * @return string
	 */
	 getFlaggedEntryId() {
	 	return this.flaggedEntryId;
	 }
	
	/**
	 * @param flaggedEntryId string If moderation flag is set for entry, this is the flagged entry id
	 */
	 setFlaggedEntryId(flaggedEntryId) {
	 	this.flaggedEntryId = flaggedEntryId;
	 }
	
	/**
	 * If moderation flag is set for user, this is the flagged user id
	 * @return string
	 */
	 getFlaggedUserId() {
	 	return this.flaggedUserId;
	 }
	
	/**
	 * @param flaggedUserId string If moderation flag is set for user, this is the flagged user id
	 */
	 setFlaggedUserId(flaggedUserId) {
	 	this.flaggedUserId = flaggedUserId;
	 }
	
	/**
	 * The moderation flag status
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * The comment that was added to the flag
	 * @return string
	 */
	 getComments() {
	 	return this.comments;
	 }
	
	/**
	 * @param comments string The comment that was added to the flag
	 */
	 setComments(comments) {
	 	this.comments = comments;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFlagType() {
	 	return this.flagType;
	 }
	
	/**
	 * @param flagType int 
	 */
	 setFlagType(flagType) {
	 	this.flagType = flagType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.ModerationFlag = ModerationFlag;

/**
 *
 */
class ObjectTask extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaObjectTask';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getStopProcessingOnError() {
	 	return this.stopProcessingOnError;
	 }
	
	/**
	 * @param stopProcessingOnError bool 
	 */
	 setStopProcessingOnError(stopProcessingOnError) {
	 	this.stopProcessingOnError = stopProcessingOnError;
	 }
}
module.exports.ObjectTask = ObjectTask;

/**
 *
 */
class OptionalAnswer extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOptionalAnswer';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getKey() {
	 	return this.key;
	 }
	
	/**
	 * @param key string 
	 */
	 setKey(key) {
	 	this.key = key;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getText() {
	 	return this.text;
	 }
	
	/**
	 * @param text string 
	 */
	 setText(text) {
	 	this.text = text;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getWeight() {
	 	return this.weight;
	 }
	
	/**
	 * @param weight float 
	 */
	 setWeight(weight) {
	 	this.weight = weight;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsCorrect() {
	 	return this.isCorrect;
	 }
	
	/**
	 * @param isCorrect int 
	 */
	 setIsCorrect(isCorrect) {
	 	this.isCorrect = isCorrect;
	 }
}
module.exports.OptionalAnswer = OptionalAnswer;

/**
 *
 */
class PartnerStatistics extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerStatistics';
	}
	
	/**
	 * Package total allowed bandwidth and storage
	 * @return int
	 */
	 getPackageBandwidthAndStorage() {
	 	return this.packageBandwidthAndStorage;
	 }
	
	/**
	 * Partner total hosting in GB on the disk
	 * @return float
	 */
	 getHosting() {
	 	return this.hosting;
	 }
	
	/**
	 * Partner total bandwidth in GB
	 * @return float
	 */
	 getBandwidth() {
	 	return this.bandwidth;
	 }
	
	/**
	 * total usage in GB - including bandwidth and storage
	 * @return int
	 */
	 getUsage() {
	 	return this.usage;
	 }
	
	/**
	 * Percent of usage out of partner's package. if usage is 5GB and package is 10GB, this value will be 50
	 * @return float
	 */
	 getUsagePercent() {
	 	return this.usagePercent;
	 }
	
	/**
	 * date when partner reached the limit of his package (timestamp)
	 * @return int
	 */
	 getReachedLimitDate() {
	 	return this.reachedLimitDate;
	 }
}
module.exports.PartnerStatistics = PartnerStatistics;

/**
 *
 */
class PartnerUsage extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerUsage';
	}
	
	/**
	 * Partner total hosting in GB on the disk
	 * @return float
	 */
	 getHostingGB() {
	 	return this.hostingGB;
	 }
	
	/**
	 * percent of usage out of partner's package. if usageGB is 5 and package is 10GB, this value will be 50
	 * @return float
	 */
	 getPercent() {
	 	return this.Percent;
	 }
	
	/**
	 * package total BW - actually this is usage, which represents BW+storage
	 * @return int
	 */
	 getPackageBW() {
	 	return this.packageBW;
	 }
	
	/**
	 * total usage in GB - including bandwidth and storage
	 * @return float
	 */
	 getUsageGB() {
	 	return this.usageGB;
	 }
	
	/**
	 * date when partner reached the limit of his package (timestamp)
	 * @return int
	 */
	 getReachedLimitDate() {
	 	return this.reachedLimitDate;
	 }
	
	/**
	 * a semi-colon separated list of comma-separated key-values to represent a usage graph.
 * keys could be 1-12 for a year view (1,1.2;2,1.1;3,0.9;...;12,1.4;)
 * keys could be 1-[28,29,30,31] depending on the requested month, for a daily view in a given month (1,0.4;2,0.2;...;31,0.1;)
	 * @return string
	 */
	 getUsageGraph() {
	 	return this.usageGraph;
	 }
}
module.exports.PartnerUsage = PartnerUsage;

/**
 *
 */
class Permission extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermission';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFriendlyName() {
	 	return this.friendlyName;
	 }
	
	/**
	 * @param friendlyName string 
	 */
	 setFriendlyName(friendlyName) {
	 	this.friendlyName = friendlyName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDependsOnPermissionNames() {
	 	return this.dependsOnPermissionNames;
	 }
	
	/**
	 * @param dependsOnPermissionNames string 
	 */
	 setDependsOnPermissionNames(dependsOnPermissionNames) {
	 	this.dependsOnPermissionNames = dependsOnPermissionNames;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionItemsIds() {
	 	return this.permissionItemsIds;
	 }
	
	/**
	 * @param permissionItemsIds string 
	 */
	 setPermissionItemsIds(permissionItemsIds) {
	 	this.permissionItemsIds = permissionItemsIds;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerGroup() {
	 	return this.partnerGroup;
	 }
	
	/**
	 * @param partnerGroup string 
	 */
	 setPartnerGroup(partnerGroup) {
	 	this.partnerGroup = partnerGroup;
	 }
}
module.exports.Permission = Permission;

/**
 *
 */
class PermissionItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionItem';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.PermissionItem = PermissionItem;

/**
 *
 */
class PluginData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPluginData';
	}
}
module.exports.PluginData = PluginData;

/**
 *
 */
class DrmPlaybackPluginData extends PluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDrmPlaybackPluginData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getScheme() {
	 	return this.scheme;
	 }
	
	/**
	 * @param scheme string 
	 */
	 setScheme(scheme) {
	 	this.scheme = scheme;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLicenseURL() {
	 	return this.licenseURL;
	 }
	
	/**
	 * @param licenseURL string 
	 */
	 setLicenseURL(licenseURL) {
	 	this.licenseURL = licenseURL;
	 }
}
module.exports.DrmPlaybackPluginData = DrmPlaybackPluginData;

/**
 *
 */
class PlaybackSource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackSource';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getDeliveryProfileId() {
	 	return this.deliveryProfileId;
	 }
	
	/**
	 * @param deliveryProfileId string 
	 */
	 setDeliveryProfileId(deliveryProfileId) {
	 	this.deliveryProfileId = deliveryProfileId;
	 }
	
	/**
	 * source format according to delivery profile streamer type (applehttp, mpegdash etc.)
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string source format according to delivery profile streamer type (applehttp, mpegdash etc.)
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * comma separated string according to deliveryProfile media protocols ('http,https' etc.)
	 * @return string
	 */
	 getProtocols() {
	 	return this.protocols;
	 }
	
	/**
	 * @param protocols string comma separated string according to deliveryProfile media protocols ('http,https' etc.)
	 */
	 setProtocols(protocols) {
	 	this.protocols = protocols;
	 }
	
	/**
	 * comma separated string of flavor ids
	 * @return string
	 */
	 getFlavorIds() {
	 	return this.flavorIds;
	 }
	
	/**
	 * @param flavorIds string comma separated string of flavor ids
	 */
	 setFlavorIds(flavorIds) {
	 	this.flavorIds = flavorIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string 
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * drm data object containing relevant license url ,scheme name and certificate
	 * @return array
	 */
	 getDrm() {
	 	return this.drm;
	 }
	
	/**
	 * @param drm array drm data object containing relevant license url ,scheme name and certificate
	 */
	 setDrm(drm) {
	 	this.drm = drm;
	 }
}
module.exports.PlaybackSource = PlaybackSource;

/**
 *
 */
class PlaybackContext extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackContext';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getSources() {
	 	return this.sources;
	 }
	
	/**
	 * @param sources array 
	 */
	 setSources(sources) {
	 	this.sources = sources;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getFlavorAssets() {
	 	return this.flavorAssets;
	 }
	
	/**
	 * @param flavorAssets array 
	 */
	 setFlavorAssets(flavorAssets) {
	 	this.flavorAssets = flavorAssets;
	 }
	
	/**
	 * Array of actions as received from the rules that invalidated
	 * @return array
	 */
	 getActions() {
	 	return this.actions;
	 }
	
	/**
	 * @param actions array Array of actions as received from the rules that invalidated
	 */
	 setActions(actions) {
	 	this.actions = actions;
	 }
	
	/**
	 * Array of actions as received from the rules that invalidated
	 * @return array
	 */
	 getMessages() {
	 	return this.messages;
	 }
	
	/**
	 * @param messages array Array of actions as received from the rules that invalidated
	 */
	 setMessages(messages) {
	 	this.messages = messages;
	 }
}
module.exports.PlaybackContext = PlaybackContext;

/**
 *
 */
class Playlist extends BaseEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaylist';
	}
	
	/**
	 * Content of the playlist -
 * XML if the playlistType is dynamic
 * text if the playlistType is static
 * url if the playlistType is mRss
	 * @return string
	 */
	 getPlaylistContent() {
	 	return this.playlistContent;
	 }
	
	/**
	 * @param playlistContent string Content of the playlist -
 * XML if the playlistType is dynamic
 * text if the playlistType is static
 * url if the playlistType is mRss
	 */
	 setPlaylistContent(playlistContent) {
	 	this.playlistContent = playlistContent;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getFilters() {
	 	return this.filters;
	 }
	
	/**
	 * @param filters array 
	 */
	 setFilters(filters) {
	 	this.filters = filters;
	 }
	
	/**
	 * Maximum count of results to be returned in playlist execution
	 * @return int
	 */
	 getTotalResults() {
	 	return this.totalResults;
	 }
	
	/**
	 * @param totalResults int Maximum count of results to be returned in playlist execution
	 */
	 setTotalResults(totalResults) {
	 	this.totalResults = totalResults;
	 }
	
	/**
	 * Type of playlist
	 * @return int
	 */
	 getPlaylistType() {
	 	return this.playlistType;
	 }
	
	/**
	 * @param playlistType int Type of playlist
	 */
	 setPlaylistType(playlistType) {
	 	this.playlistType = playlistType;
	 }
	
	/**
	 * Number of plays
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * Number of views
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * The duration in seconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * The url for this playlist
	 * @return string
	 */
	 getExecuteUrl() {
	 	return this.executeUrl;
	 }
}
module.exports.Playlist = Playlist;

/**
 *
 */
class Quiz extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaQuiz';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * Array of key value ui related objects
	 * @return array
	 */
	 getUiAttributes() {
	 	return this.uiAttributes;
	 }
	
	/**
	 * @param uiAttributes array Array of key value ui related objects
	 */
	 setUiAttributes(uiAttributes) {
	 	this.uiAttributes = uiAttributes;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShowResultOnAnswer() {
	 	return this.showResultOnAnswer;
	 }
	
	/**
	 * @param showResultOnAnswer int 
	 */
	 setShowResultOnAnswer(showResultOnAnswer) {
	 	this.showResultOnAnswer = showResultOnAnswer;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShowCorrectKeyOnAnswer() {
	 	return this.showCorrectKeyOnAnswer;
	 }
	
	/**
	 * @param showCorrectKeyOnAnswer int 
	 */
	 setShowCorrectKeyOnAnswer(showCorrectKeyOnAnswer) {
	 	this.showCorrectKeyOnAnswer = showCorrectKeyOnAnswer;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAllowAnswerUpdate() {
	 	return this.allowAnswerUpdate;
	 }
	
	/**
	 * @param allowAnswerUpdate int 
	 */
	 setAllowAnswerUpdate(allowAnswerUpdate) {
	 	this.allowAnswerUpdate = allowAnswerUpdate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShowCorrectAfterSubmission() {
	 	return this.showCorrectAfterSubmission;
	 }
	
	/**
	 * @param showCorrectAfterSubmission int 
	 */
	 setShowCorrectAfterSubmission(showCorrectAfterSubmission) {
	 	this.showCorrectAfterSubmission = showCorrectAfterSubmission;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAllowDownload() {
	 	return this.allowDownload;
	 }
	
	/**
	 * @param allowDownload int 
	 */
	 setAllowDownload(allowDownload) {
	 	this.allowDownload = allowDownload;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getShowGradeAfterSubmission() {
	 	return this.showGradeAfterSubmission;
	 }
	
	/**
	 * @param showGradeAfterSubmission int 
	 */
	 setShowGradeAfterSubmission(showGradeAfterSubmission) {
	 	this.showGradeAfterSubmission = showGradeAfterSubmission;
	 }
}
module.exports.Quiz = Quiz;

/**
 *
 */
class RemotePath extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRemotePath';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getStorageProfileId() {
	 	return this.storageProfileId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUri() {
	 	return this.uri;
	 }
}
module.exports.RemotePath = RemotePath;

/**
 *
 */
class UrlResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlResource';
	}
	
	/**
	 * Remote URL, FTP, HTTP or HTTPS
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string Remote URL, FTP, HTTP or HTTPS
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Force Import Job
	 * @return bool
	 */
	 getForceAsyncDownload() {
	 	return this.forceAsyncDownload;
	 }
	
	/**
	 * @param forceAsyncDownload bool Force Import Job
	 */
	 setForceAsyncDownload(forceAsyncDownload) {
	 	this.forceAsyncDownload = forceAsyncDownload;
	 }
}
module.exports.UrlResource = UrlResource;

/**
 *
 */
class RemoteStorageResource extends UrlResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRemoteStorageResource';
	}
	
	/**
	 * ID of storage profile to be associated with the created file sync, used for file serving URL composing
	 * @return int
	 */
	 getStorageProfileId() {
	 	return this.storageProfileId;
	 }
	
	/**
	 * @param storageProfileId int ID of storage profile to be associated with the created file sync, used for file serving URL composing
	 */
	 setStorageProfileId(storageProfileId) {
	 	this.storageProfileId = storageProfileId;
	 }
}
module.exports.RemoteStorageResource = RemoteStorageResource;

/**
 *
 */
class Report extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReport';
	}
	
	/**
	 * Report id
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Partner id associated with the report
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner id associated with the report
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Report name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Report name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Used to identify system reports in a friendly way
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Used to identify system reports in a friendly way
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * Report description
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string Report description
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * Report query
	 * @return string
	 */
	 getQuery() {
	 	return this.query;
	 }
	
	/**
	 * @param query string Report query
	 */
	 setQuery(query) {
	 	this.query = query;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.Report = Report;

/**
 *
 */
class ReportBaseTotal extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportBaseTotal';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string 
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.ReportBaseTotal = ReportBaseTotal;

/**
 *
 */
class ReportGraph extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportGraph';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string 
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.ReportGraph = ReportGraph;

/**
 *
 */
class ReportInputBaseFilter extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportInputBaseFilter';
	}
	
	/**
	 * Start date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getFromDate() {
	 	return this.fromDate;
	 }
	
	/**
	 * @param fromDate int Start date as Unix timestamp (In seconds)
	 */
	 setFromDate(fromDate) {
	 	this.fromDate = fromDate;
	 }
	
	/**
	 * End date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getToDate() {
	 	return this.toDate;
	 }
	
	/**
	 * @param toDate int End date as Unix timestamp (In seconds)
	 */
	 setToDate(toDate) {
	 	this.toDate = toDate;
	 }
	
	/**
	 * Start day as string (YYYYMMDD)
	 * @return string
	 */
	 getFromDay() {
	 	return this.fromDay;
	 }
	
	/**
	 * @param fromDay string Start day as string (YYYYMMDD)
	 */
	 setFromDay(fromDay) {
	 	this.fromDay = fromDay;
	 }
	
	/**
	 * End date as string (YYYYMMDD)
	 * @return string
	 */
	 getToDay() {
	 	return this.toDay;
	 }
	
	/**
	 * @param toDay string End date as string (YYYYMMDD)
	 */
	 setToDay(toDay) {
	 	this.toDay = toDay;
	 }
}
module.exports.ReportInputBaseFilter = ReportInputBaseFilter;

/**
 *
 */
class ReportResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportResponse';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getColumns() {
	 	return this.columns;
	 }
	
	/**
	 * @param columns string 
	 */
	 setColumns(columns) {
	 	this.columns = columns;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getResults() {
	 	return this.results;
	 }
	
	/**
	 * @param results array 
	 */
	 setResults(results) {
	 	this.results = results;
	 }
}
module.exports.ReportResponse = ReportResponse;

/**
 *
 */
class ReportTable extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportTable';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getHeader() {
	 	return this.header;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTotalCount() {
	 	return this.totalCount;
	 }
}
module.exports.ReportTable = ReportTable;

/**
 *
 */
class ReportTotal extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportTotal';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getHeader() {
	 	return this.header;
	 }
	
	/**
	 * @param header string 
	 */
	 setHeader(header) {
	 	this.header = header;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string 
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.ReportTotal = ReportTotal;

/**
 *
 */
class RequestConfiguration extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRequestConfiguration';
	}
	
	/**
	 * Impersonated partner id
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Impersonated partner id
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Kaltura API session
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * @param ks string Kaltura API session
	 */
	 setKs(ks) {
	 	this.ks = ks;
	 }
	
	/**
	 * Response profile - this attribute will be automatically unset after every API call
	 * @return BaseResponseProfile
	 */
	 getResponseProfile() {
	 	return this.responseProfile;
	 }
	
	/**
	 * @param responseProfile BaseResponseProfile Response profile - this attribute will be automatically unset after every API call
	 */
	 setResponseProfile(responseProfile) {
	 	this.responseProfile = responseProfile;
	 }
}
module.exports.RequestConfiguration = RequestConfiguration;

/**
 *
 */
class ResponseProfile extends DetachedResponseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfile';
	}
	
	/**
	 * Auto generated numeric identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Unique system name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Unique system name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Creation time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Update time as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersion() {
	 	return this.version;
	 }
}
module.exports.ResponseProfile = ResponseProfile;

/**
 *
 */
class ResponseProfileCacheRecalculateOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileCacheRecalculateOptions';
	}
	
	/**
	 * Maximum number of keys to recalculate
	 * @return int
	 */
	 getLimit() {
	 	return this.limit;
	 }
	
	/**
	 * @param limit int Maximum number of keys to recalculate
	 */
	 setLimit(limit) {
	 	this.limit = limit;
	 }
	
	/**
	 * Class name
	 * @return string
	 */
	 getCachedObjectType() {
	 	return this.cachedObjectType;
	 }
	
	/**
	 * @param cachedObjectType string Class name
	 */
	 setCachedObjectType(cachedObjectType) {
	 	this.cachedObjectType = cachedObjectType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string 
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStartObjectKey() {
	 	return this.startObjectKey;
	 }
	
	/**
	 * @param startObjectKey string 
	 */
	 setStartObjectKey(startObjectKey) {
	 	this.startObjectKey = startObjectKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEndObjectKey() {
	 	return this.endObjectKey;
	 }
	
	/**
	 * @param endObjectKey string 
	 */
	 setEndObjectKey(endObjectKey) {
	 	this.endObjectKey = endObjectKey;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getJobCreatedAt() {
	 	return this.jobCreatedAt;
	 }
	
	/**
	 * @param jobCreatedAt int 
	 */
	 setJobCreatedAt(jobCreatedAt) {
	 	this.jobCreatedAt = jobCreatedAt;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsFirstLoop() {
	 	return this.isFirstLoop;
	 }
	
	/**
	 * @param isFirstLoop bool 
	 */
	 setIsFirstLoop(isFirstLoop) {
	 	this.isFirstLoop = isFirstLoop;
	 }
}
module.exports.ResponseProfileCacheRecalculateOptions = ResponseProfileCacheRecalculateOptions;

/**
 *
 */
class ResponseProfileCacheRecalculateResults extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileCacheRecalculateResults';
	}
	
	/**
	 * Last recalculated id
	 * @return string
	 */
	 getLastObjectKey() {
	 	return this.lastObjectKey;
	 }
	
	/**
	 * @param lastObjectKey string Last recalculated id
	 */
	 setLastObjectKey(lastObjectKey) {
	 	this.lastObjectKey = lastObjectKey;
	 }
	
	/**
	 * Number of recalculated keys
	 * @return int
	 */
	 getRecalculated() {
	 	return this.recalculated;
	 }
	
	/**
	 * @param recalculated int Number of recalculated keys
	 */
	 setRecalculated(recalculated) {
	 	this.recalculated = recalculated;
	 }
}
module.exports.ResponseProfileCacheRecalculateResults = ResponseProfileCacheRecalculateResults;

/**
 *
 */
class ScheduleEventRecurrence extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventRecurrence';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFrequency() {
	 	return this.frequency;
	 }
	
	/**
	 * @param frequency string 
	 */
	 setFrequency(frequency) {
	 	this.frequency = frequency;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUntil() {
	 	return this.until;
	 }
	
	/**
	 * @param until int 
	 */
	 setUntil(until) {
	 	this.until = until;
	 }
	
	/**
	 * TimeZone String
	 * @return string
	 */
	 getTimeZone() {
	 	return this.timeZone;
	 }
	
	/**
	 * @param timeZone string TimeZone String
	 */
	 setTimeZone(timeZone) {
	 	this.timeZone = timeZone;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCount() {
	 	return this.count;
	 }
	
	/**
	 * @param count int 
	 */
	 setCount(count) {
	 	this.count = count;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInterval() {
	 	return this.interval;
	 }
	
	/**
	 * @param interval int 
	 */
	 setInterval(interval) {
	 	this.interval = interval;
	 }
	
	/**
	 * Comma separated numbers between 0 to 59
	 * @return string
	 */
	 getBySecond() {
	 	return this.bySecond;
	 }
	
	/**
	 * @param bySecond string Comma separated numbers between 0 to 59
	 */
	 setBySecond(bySecond) {
	 	this.bySecond = bySecond;
	 }
	
	/**
	 * Comma separated numbers between 0 to 59
	 * @return string
	 */
	 getByMinute() {
	 	return this.byMinute;
	 }
	
	/**
	 * @param byMinute string Comma separated numbers between 0 to 59
	 */
	 setByMinute(byMinute) {
	 	this.byMinute = byMinute;
	 }
	
	/**
	 * Comma separated numbers between 0 to 23
	 * @return string
	 */
	 getByHour() {
	 	return this.byHour;
	 }
	
	/**
	 * @param byHour string Comma separated numbers between 0 to 23
	 */
	 setByHour(byHour) {
	 	this.byHour = byHour;
	 }
	
	/**
	 * Comma separated of KalturaScheduleEventRecurrenceDay
 * Each byDay value can also be preceded by a positive (+n) or negative (-n) integer.
 * If present, this indicates the nth occurrence of the specific day within the MONTHLY or YEARLY RRULE.
 * For example, within a MONTHLY rule, +1MO (or simply 1MO) represents the first Monday within the month, whereas -1MO represents the last Monday of the month.
 * If an integer modifier is not present, it means all days of this type within the specified frequency.
 * For example, within a MONTHLY rule, MO represents all Mondays within the month
	 * @return string
	 */
	 getByDay() {
	 	return this.byDay;
	 }
	
	/**
	 * @param byDay string Comma separated of KalturaScheduleEventRecurrenceDay
 * Each byDay value can also be preceded by a positive (+n) or negative (-n) integer.
 * If present, this indicates the nth occurrence of the specific day within the MONTHLY or YEARLY RRULE.
 * For example, within a MONTHLY rule, +1MO (or simply 1MO) represents the first Monday within the month, whereas -1MO represents the last Monday of the month.
 * If an integer modifier is not present, it means all days of this type within the specified frequency.
 * For example, within a MONTHLY rule, MO represents all Mondays within the month
	 */
	 setByDay(byDay) {
	 	this.byDay = byDay;
	 }
	
	/**
	 * Comma separated of numbers between -31 to 31, excluding 0.
 * For example, -10 represents the tenth to the last day of the month
	 * @return string
	 */
	 getByMonthDay() {
	 	return this.byMonthDay;
	 }
	
	/**
	 * @param byMonthDay string Comma separated of numbers between -31 to 31, excluding 0.
 * For example, -10 represents the tenth to the last day of the month
	 */
	 setByMonthDay(byMonthDay) {
	 	this.byMonthDay = byMonthDay;
	 }
	
	/**
	 * Comma separated of numbers between -366 to 366, excluding 0.
 * For example, -1 represents the last day of the year (December 31st) and -306 represents the 306th to the last day of the year (March 1st)
	 * @return string
	 */
	 getByYearDay() {
	 	return this.byYearDay;
	 }
	
	/**
	 * @param byYearDay string Comma separated of numbers between -366 to 366, excluding 0.
 * For example, -1 represents the last day of the year (December 31st) and -306 represents the 306th to the last day of the year (March 1st)
	 */
	 setByYearDay(byYearDay) {
	 	this.byYearDay = byYearDay;
	 }
	
	/**
	 * Comma separated of numbers between -53 to 53, excluding 0.
 * This corresponds to weeks according to week numbering.
 * A week is defined as a seven day period, starting on the day of the week defined to be the week start.
 * Week number one of the calendar year is the first week which contains at least four (4) days in that calendar year.
 * This rule part is only valid for YEARLY frequency.
 * For example, 3 represents the third week of the year
	 * @return string
	 */
	 getByWeekNumber() {
	 	return this.byWeekNumber;
	 }
	
	/**
	 * @param byWeekNumber string Comma separated of numbers between -53 to 53, excluding 0.
 * This corresponds to weeks according to week numbering.
 * A week is defined as a seven day period, starting on the day of the week defined to be the week start.
 * Week number one of the calendar year is the first week which contains at least four (4) days in that calendar year.
 * This rule part is only valid for YEARLY frequency.
 * For example, 3 represents the third week of the year
	 */
	 setByWeekNumber(byWeekNumber) {
	 	this.byWeekNumber = byWeekNumber;
	 }
	
	/**
	 * Comma separated numbers between 1 to 12
	 * @return string
	 */
	 getByMonth() {
	 	return this.byMonth;
	 }
	
	/**
	 * @param byMonth string Comma separated numbers between 1 to 12
	 */
	 setByMonth(byMonth) {
	 	this.byMonth = byMonth;
	 }
	
	/**
	 * Comma separated of numbers between -366 to 366, excluding 0.
 * Corresponds to the nth occurrence within the set of events specified by the rule.
 * It must only be used in conjunction with another byrule part.
 * For example "the last work day of the month" could be represented as: frequency=MONTHLY;byDay=MO,TU,WE,TH,FR;byOffset=-1
 * Each byOffset value can include a positive (+n) or negative (-n) integer.
 * If present, this indicates the nth occurrence of the specific occurrence within the set of events specified by the rule
	 * @return string
	 */
	 getByOffset() {
	 	return this.byOffset;
	 }
	
	/**
	 * @param byOffset string Comma separated of numbers between -366 to 366, excluding 0.
 * Corresponds to the nth occurrence within the set of events specified by the rule.
 * It must only be used in conjunction with another byrule part.
 * For example "the last work day of the month" could be represented as: frequency=MONTHLY;byDay=MO,TU,WE,TH,FR;byOffset=-1
 * Each byOffset value can include a positive (+n) or negative (-n) integer.
 * If present, this indicates the nth occurrence of the specific occurrence within the set of events specified by the rule
	 */
	 setByOffset(byOffset) {
	 	this.byOffset = byOffset;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWeekStartDay() {
	 	return this.weekStartDay;
	 }
	
	/**
	 * @param weekStartDay string 
	 */
	 setWeekStartDay(weekStartDay) {
	 	this.weekStartDay = weekStartDay;
	 }
}
module.exports.ScheduleEventRecurrence = ScheduleEventRecurrence;

/**
 *
 */
class ScheduleEvent extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEvent';
	}
	
	/**
	 * Auto-generated unique identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * Defines a short summary or subject for the event
	 * @return string
	 */
	 getSummary() {
	 	return this.summary;
	 }
	
	/**
	 * @param summary string Defines a short summary or subject for the event
	 */
	 setSummary(summary) {
	 	this.summary = summary;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDate() {
	 	return this.startDate;
	 }
	
	/**
	 * @param startDate int 
	 */
	 setStartDate(startDate) {
	 	this.startDate = startDate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int 
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string 
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getClassificationType() {
	 	return this.classificationType;
	 }
	
	/**
	 * @param classificationType int 
	 */
	 setClassificationType(classificationType) {
	 	this.classificationType = classificationType;
	 }
	
	/**
	 * Specifies the global position for the activity
	 * @return float
	 */
	 getGeoLatitude() {
	 	return this.geoLatitude;
	 }
	
	/**
	 * @param geoLatitude float Specifies the global position for the activity
	 */
	 setGeoLatitude(geoLatitude) {
	 	this.geoLatitude = geoLatitude;
	 }
	
	/**
	 * Specifies the global position for the activity
	 * @return float
	 */
	 getGeoLongitude() {
	 	return this.geoLongitude;
	 }
	
	/**
	 * @param geoLongitude float Specifies the global position for the activity
	 */
	 setGeoLongitude(geoLongitude) {
	 	this.geoLongitude = geoLongitude;
	 }
	
	/**
	 * Defines the intended venue for the activity
	 * @return string
	 */
	 getLocation() {
	 	return this.location;
	 }
	
	/**
	 * @param location string Defines the intended venue for the activity
	 */
	 setLocation(location) {
	 	this.location = location;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOrganizer() {
	 	return this.organizer;
	 }
	
	/**
	 * @param organizer string 
	 */
	 setOrganizer(organizer) {
	 	this.organizer = organizer;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOwnerId() {
	 	return this.ownerId;
	 }
	
	/**
	 * @param ownerId string 
	 */
	 setOwnerId(ownerId) {
	 	this.ownerId = ownerId;
	 }
	
	/**
	 * The value for the priority field
	 * @return int
	 */
	 getPriority() {
	 	return this.priority;
	 }
	
	/**
	 * @param priority int The value for the priority field
	 */
	 setPriority(priority) {
	 	this.priority = priority;
	 }
	
	/**
	 * Defines the revision sequence number
	 * @return int
	 */
	 getSequence() {
	 	return this.sequence;
	 }
	
	/**
	 * @param sequence int Defines the revision sequence number
	 */
	 setSequence(sequence) {
	 	this.sequence = sequence;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getRecurrenceType() {
	 	return this.recurrenceType;
	 }
	
	/**
	 * @param recurrenceType int 
	 */
	 setRecurrenceType(recurrenceType) {
	 	this.recurrenceType = recurrenceType;
	 }
	
	/**
	 * Duration in seconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration int Duration in seconds
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
	
	/**
	 * Used to represent contact information or alternately a reference to contact information
	 * @return string
	 */
	 getContact() {
	 	return this.contact;
	 }
	
	/**
	 * @param contact string Used to represent contact information or alternately a reference to contact information
	 */
	 setContact(contact) {
	 	this.contact = contact;
	 }
	
	/**
	 * Specifies non-processing information intended to provide a comment to the calendar user
	 * @return string
	 */
	 getComment() {
	 	return this.comment;
	 }
	
	/**
	 * @param comment string Specifies non-processing information intended to provide a comment to the calendar user
	 */
	 setComment(comment) {
	 	this.comment = comment;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return ScheduleEventRecurrence
	 */
	 getRecurrence() {
	 	return this.recurrence;
	 }
	
	/**
	 * @param recurrence ScheduleEventRecurrence 
	 */
	 setRecurrence(recurrence) {
	 	this.recurrence = recurrence;
	 }
}
module.exports.ScheduleEvent = ScheduleEvent;

/**
 *
 */
class ScheduleEventResource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventResource';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getEventId() {
	 	return this.eventId;
	 }
	
	/**
	 * @param eventId int 
	 */
	 setEventId(eventId) {
	 	this.eventId = eventId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getResourceId() {
	 	return this.resourceId;
	 }
	
	/**
	 * @param resourceId int 
	 */
	 setResourceId(resourceId) {
	 	this.resourceId = resourceId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.ScheduleEventResource = ScheduleEventResource;

/**
 *
 */
class ScheduleResource extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleResource';
	}
	
	/**
	 * Auto-generated unique identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId int 
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * Defines a short name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Defines a short name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * Defines a unique system-name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Defines a unique system-name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.ScheduleResource = ScheduleResource;

/**
 *
 */
class ScheduledTaskProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduledTaskProfile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * The type of engine to use to list objects using the given "objectFilter"
	 * @return string
	 */
	 getObjectFilterEngineType() {
	 	return this.objectFilterEngineType;
	 }
	
	/**
	 * @param objectFilterEngineType string The type of engine to use to list objects using the given "objectFilter"
	 */
	 setObjectFilterEngineType(objectFilterEngineType) {
	 	this.objectFilterEngineType = objectFilterEngineType;
	 }
	
	/**
	 * A filter object (inherits KalturaFilter) that is used to list objects for scheduled tasks
	 * @return Filter
	 */
	 getObjectFilter() {
	 	return this.objectFilter;
	 }
	
	/**
	 * @param objectFilter Filter A filter object (inherits KalturaFilter) that is used to list objects for scheduled tasks
	 */
	 setObjectFilter(objectFilter) {
	 	this.objectFilter = objectFilter;
	 }
	
	/**
	 * A list of tasks to execute on the founded objects
	 * @return array
	 */
	 getObjectTasks() {
	 	return this.objectTasks;
	 }
	
	/**
	 * @param objectTasks array A list of tasks to execute on the founded objects
	 */
	 setObjectTasks(objectTasks) {
	 	this.objectTasks = objectTasks;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastExecutionStartedAt() {
	 	return this.lastExecutionStartedAt;
	 }
	
	/**
	 * @param lastExecutionStartedAt int 
	 */
	 setLastExecutionStartedAt(lastExecutionStartedAt) {
	 	this.lastExecutionStartedAt = lastExecutionStartedAt;
	 }
	
	/**
	 * The maximum number of result count allowed to be processed by this profile per execution
	 * @return int
	 */
	 getMaxTotalCountAllowed() {
	 	return this.maxTotalCountAllowed;
	 }
	
	/**
	 * @param maxTotalCountAllowed int The maximum number of result count allowed to be processed by this profile per execution
	 */
	 setMaxTotalCountAllowed(maxTotalCountAllowed) {
	 	this.maxTotalCountAllowed = maxTotalCountAllowed;
	 }
}
module.exports.ScheduledTaskProfile = ScheduledTaskProfile;

/**
 *
 */
class Scope extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScope';
	}
}
module.exports.Scope = Scope;

/**
 *
 */
class Search extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearch';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getKeyWords() {
	 	return this.keyWords;
	 }
	
	/**
	 * @param keyWords string 
	 */
	 setKeyWords(keyWords) {
	 	this.keyWords = keyWords;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSearchSource() {
	 	return this.searchSource;
	 }
	
	/**
	 * @param searchSource int 
	 */
	 setSearchSource(searchSource) {
	 	this.searchSource = searchSource;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMediaType() {
	 	return this.mediaType;
	 }
	
	/**
	 * @param mediaType int 
	 */
	 setMediaType(mediaType) {
	 	this.mediaType = mediaType;
	 }
	
	/**
	 * Use this field to pass dynamic data for searching
 * For example - if you set this field to "mymovies_$partner_id"
 * The $partner_id will be automatically replcaed with your real partner Id
	 * @return string
	 */
	 getExtraData() {
	 	return this.extraData;
	 }
	
	/**
	 * @param extraData string Use this field to pass dynamic data for searching
 * For example - if you set this field to "mymovies_$partner_id"
 * The $partner_id will be automatically replcaed with your real partner Id
	 */
	 setExtraData(extraData) {
	 	this.extraData = extraData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAuthData() {
	 	return this.authData;
	 }
	
	/**
	 * @param authData string 
	 */
	 setAuthData(authData) {
	 	this.authData = authData;
	 }
}
module.exports.Search = Search;

/**
 *
 */
class SearchAuthData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchAuthData';
	}
	
	/**
	 * The authentication data that further should be used for search
	 * @return string
	 */
	 getAuthData() {
	 	return this.authData;
	 }
	
	/**
	 * @param authData string The authentication data that further should be used for search
	 */
	 setAuthData(authData) {
	 	this.authData = authData;
	 }
	
	/**
	 * Login URL when user need to sign-in and authorize the search
	 * @return string
	 */
	 getLoginUrl() {
	 	return this.loginUrl;
	 }
	
	/**
	 * @param loginUrl string Login URL when user need to sign-in and authorize the search
	 */
	 setLoginUrl(loginUrl) {
	 	this.loginUrl = loginUrl;
	 }
	
	/**
	 * Information when there was an error
	 * @return string
	 */
	 getMessage() {
	 	return this.message;
	 }
	
	/**
	 * @param message string Information when there was an error
	 */
	 setMessage(message) {
	 	this.message = message;
	 }
}
module.exports.SearchAuthData = SearchAuthData;

/**
 *
 */
class SearchResult extends Search{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchResult';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * @param title string 
	 */
	 setTitle(title) {
	 	this.title = title;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbUrl() {
	 	return this.thumbUrl;
	 }
	
	/**
	 * @param thumbUrl string 
	 */
	 setThumbUrl(thumbUrl) {
	 	this.thumbUrl = thumbUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string 
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceLink() {
	 	return this.sourceLink;
	 }
	
	/**
	 * @param sourceLink string 
	 */
	 setSourceLink(sourceLink) {
	 	this.sourceLink = sourceLink;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCredit() {
	 	return this.credit;
	 }
	
	/**
	 * @param credit string 
	 */
	 setCredit(credit) {
	 	this.credit = credit;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLicenseType() {
	 	return this.licenseType;
	 }
	
	/**
	 * @param licenseType int 
	 */
	 setLicenseType(licenseType) {
	 	this.licenseType = licenseType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlashPlaybackType() {
	 	return this.flashPlaybackType;
	 }
	
	/**
	 * @param flashPlaybackType string 
	 */
	 setFlashPlaybackType(flashPlaybackType) {
	 	this.flashPlaybackType = flashPlaybackType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileExt() {
	 	return this.fileExt;
	 }
	
	/**
	 * @param fileExt string 
	 */
	 setFileExt(fileExt) {
	 	this.fileExt = fileExt;
	 }
}
module.exports.SearchResult = SearchResult;

/**
 *
 */
class SearchResultResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchResultResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getNeedMediaInfo() {
	 	return this.needMediaInfo;
	 }
}
module.exports.SearchResultResponse = SearchResultResponse;

/**
 *
 */
class ServerNode extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaServerNode';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeartbeatTime() {
	 	return this.heartbeatTime;
	 }
	
	/**
	 * serverNode name
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string serverNode name
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * serverNode uniqe system name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string serverNode uniqe system name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * serverNode hostName
	 * @return string
	 */
	 getHostName() {
	 	return this.hostName;
	 }
	
	/**
	 * @param hostName string serverNode hostName
	 */
	 setHostName(hostName) {
	 	this.hostName = hostName;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * serverNode tags
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string serverNode tags
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * DC where the serverNode is located
	 * @return int
	 */
	 getDc() {
	 	return this.dc;
	 }
	
	/**
	 * Id of the parent serverNode
	 * @return int
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId int Id of the parent serverNode
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
}
module.exports.ServerNode = ServerNode;

/**
 *
 */
class SessionInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSessionInfo';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSessionType() {
	 	return this.sessionType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExpiry() {
	 	return this.expiry;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrivileges() {
	 	return this.privileges;
	 }
}
module.exports.SessionInfo = SessionInfo;

/**
 *
 */
class ShortLink extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaShortLink';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExpiresAt() {
	 	return this.expiresAt;
	 }
	
	/**
	 * @param expiresAt int 
	 */
	 setExpiresAt(expiresAt) {
	 	this.expiresAt = expiresAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullUrl() {
	 	return this.fullUrl;
	 }
	
	/**
	 * @param fullUrl string 
	 */
	 setFullUrl(fullUrl) {
	 	this.fullUrl = fullUrl;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
}
module.exports.ShortLink = ShortLink;

/**
 *
 */
class SourceFileSyncDescriptor extends FileSyncDescriptor{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSourceFileSyncDescriptor';
	}
	
	/**
	 * The translated path as used by the scheduler
	 * @return string
	 */
	 getActualFileSyncLocalPath() {
	 	return this.actualFileSyncLocalPath;
	 }
	
	/**
	 * @param actualFileSyncLocalPath string The translated path as used by the scheduler
	 */
	 setActualFileSyncLocalPath(actualFileSyncLocalPath) {
	 	this.actualFileSyncLocalPath = actualFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAssetParamsId() {
	 	return this.assetParamsId;
	 }
	
	/**
	 * @param assetParamsId int 
	 */
	 setAssetParamsId(assetParamsId) {
	 	this.assetParamsId = assetParamsId;
	 }
}
module.exports.SourceFileSyncDescriptor = SourceFileSyncDescriptor;

/**
 *
 */
class StartWidgetSessionResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStartWidgetSessionResponse';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getKs() {
	 	return this.ks;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
}
module.exports.StartWidgetSessionResponse = StartWidgetSessionResponse;

/**
 *
 */
class StatsEvent extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStatsEvent';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getClientVer() {
	 	return this.clientVer;
	 }
	
	/**
	 * @param clientVer string 
	 */
	 setClientVer(clientVer) {
	 	this.clientVer = clientVer;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEventType() {
	 	return this.eventType;
	 }
	
	/**
	 * @param eventType int 
	 */
	 setEventType(eventType) {
	 	this.eventType = eventType;
	 }
	
	/**
	 * the client's timestamp of this event
	 * @return float
	 */
	 getEventTimestamp() {
	 	return this.eventTimestamp;
	 }
	
	/**
	 * @param eventTimestamp float the client's timestamp of this event
	 */
	 setEventTimestamp(eventTimestamp) {
	 	this.eventTimestamp = eventTimestamp;
	 }
	
	/**
	 * a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it
	 * @return string
	 */
	 getSessionId() {
	 	return this.sessionId;
	 }
	
	/**
	 * @param sessionId string a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it
	 */
	 setSessionId(sessionId) {
	 	this.sessionId = sessionId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * the UV cookie - creates in the operational system and should be passed on ofr every event
	 * @return string
	 */
	 getUniqueViewer() {
	 	return this.uniqueViewer;
	 }
	
	/**
	 * @param uniqueViewer string the UV cookie - creates in the operational system and should be passed on ofr every event
	 */
	 setUniqueViewer(uniqueViewer) {
	 	this.uniqueViewer = uniqueViewer;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWidgetId() {
	 	return this.widgetId;
	 }
	
	/**
	 * @param widgetId string 
	 */
	 setWidgetId(widgetId) {
	 	this.widgetId = widgetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUiconfId() {
	 	return this.uiconfId;
	 }
	
	/**
	 * @param uiconfId int 
	 */
	 setUiconfId(uiconfId) {
	 	this.uiconfId = uiconfId;
	 }
	
	/**
	 * the partner's user id
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string the partner's user id
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * the timestamp along the video when the event happend
	 * @return int
	 */
	 getCurrentPoint() {
	 	return this.currentPoint;
	 }
	
	/**
	 * @param currentPoint int the timestamp along the video when the event happend
	 */
	 setCurrentPoint(currentPoint) {
	 	this.currentPoint = currentPoint;
	 }
	
	/**
	 * the duration of the video in milliseconds - will make it much faster than quering the db for each entry
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration int the duration of the video in milliseconds - will make it much faster than quering the db for each entry
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
	
	/**
	 * will be retrieved from the request of the user
	 * @return string
	 */
	 getUserIp() {
	 	return this.userIp;
	 }
	
	/**
	 * the time in milliseconds the event took
	 * @return int
	 */
	 getProcessDuration() {
	 	return this.processDuration;
	 }
	
	/**
	 * @param processDuration int the time in milliseconds the event took
	 */
	 setProcessDuration(processDuration) {
	 	this.processDuration = processDuration;
	 }
	
	/**
	 * the id of the GUI control - will be used in the future to better understand what the user clicked
	 * @return string
	 */
	 getControlId() {
	 	return this.controlId;
	 }
	
	/**
	 * @param controlId string the id of the GUI control - will be used in the future to better understand what the user clicked
	 */
	 setControlId(controlId) {
	 	this.controlId = controlId;
	 }
	
	/**
	 * true if the user ever used seek in this session
	 * @return bool
	 */
	 getSeek() {
	 	return this.seek;
	 }
	
	/**
	 * @param seek bool true if the user ever used seek in this session
	 */
	 setSeek(seek) {
	 	this.seek = seek;
	 }
	
	/**
	 * timestamp of the new point on the timeline of the video after the user seeks
	 * @return int
	 */
	 getNewPoint() {
	 	return this.newPoint;
	 }
	
	/**
	 * @param newPoint int timestamp of the new point on the timeline of the video after the user seeks
	 */
	 setNewPoint(newPoint) {
	 	this.newPoint = newPoint;
	 }
	
	/**
	 * the referrer of the client
	 * @return string
	 */
	 getReferrer() {
	 	return this.referrer;
	 }
	
	/**
	 * @param referrer string the referrer of the client
	 */
	 setReferrer(referrer) {
	 	this.referrer = referrer;
	 }
	
	/**
	 * will indicate if the event is thrown for the first video in the session
	 * @return bool
	 */
	 getIsFirstInSession() {
	 	return this.isFirstInSession;
	 }
	
	/**
	 * @param isFirstInSession bool will indicate if the event is thrown for the first video in the session
	 */
	 setIsFirstInSession(isFirstInSession) {
	 	this.isFirstInSession = isFirstInSession;
	 }
	
	/**
	 * kaltura application name
	 * @return string
	 */
	 getApplicationId() {
	 	return this.applicationId;
	 }
	
	/**
	 * @param applicationId string kaltura application name
	 */
	 setApplicationId(applicationId) {
	 	this.applicationId = applicationId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getContextId() {
	 	return this.contextId;
	 }
	
	/**
	 * @param contextId int 
	 */
	 setContextId(contextId) {
	 	this.contextId = contextId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFeatureType() {
	 	return this.featureType;
	 }
	
	/**
	 * @param featureType int 
	 */
	 setFeatureType(featureType) {
	 	this.featureType = featureType;
	 }
}
module.exports.StatsEvent = StatsEvent;

/**
 *
 */
class StatsKmcEvent extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStatsKmcEvent';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getClientVer() {
	 	return this.clientVer;
	 }
	
	/**
	 * @param clientVer string 
	 */
	 setClientVer(clientVer) {
	 	this.clientVer = clientVer;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getKmcEventActionPath() {
	 	return this.kmcEventActionPath;
	 }
	
	/**
	 * @param kmcEventActionPath string 
	 */
	 setKmcEventActionPath(kmcEventActionPath) {
	 	this.kmcEventActionPath = kmcEventActionPath;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getKmcEventType() {
	 	return this.kmcEventType;
	 }
	
	/**
	 * @param kmcEventType int 
	 */
	 setKmcEventType(kmcEventType) {
	 	this.kmcEventType = kmcEventType;
	 }
	
	/**
	 * the client's timestamp of this event
	 * @return float
	 */
	 getEventTimestamp() {
	 	return this.eventTimestamp;
	 }
	
	/**
	 * @param eventTimestamp float the client's timestamp of this event
	 */
	 setEventTimestamp(eventTimestamp) {
	 	this.eventTimestamp = eventTimestamp;
	 }
	
	/**
	 * a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it
	 * @return string
	 */
	 getSessionId() {
	 	return this.sessionId;
	 }
	
	/**
	 * @param sessionId string a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it
	 */
	 setSessionId(sessionId) {
	 	this.sessionId = sessionId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int 
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWidgetId() {
	 	return this.widgetId;
	 }
	
	/**
	 * @param widgetId string 
	 */
	 setWidgetId(widgetId) {
	 	this.widgetId = widgetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUiconfId() {
	 	return this.uiconfId;
	 }
	
	/**
	 * @param uiconfId int 
	 */
	 setUiconfId(uiconfId) {
	 	this.uiconfId = uiconfId;
	 }
	
	/**
	 * the partner's user id
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string the partner's user id
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * will be retrieved from the request of the user
	 * @return string
	 */
	 getUserIp() {
	 	return this.userIp;
	 }
}
module.exports.StatsKmcEvent = StatsKmcEvent;

/**
 *
 */
class StorageProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageProfile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDesciption() {
	 	return this.desciption;
	 }
	
	/**
	 * @param desciption string 
	 */
	 setDesciption(desciption) {
	 	this.desciption = desciption;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProtocol() {
	 	return this.protocol;
	 }
	
	/**
	 * @param protocol string 
	 */
	 setProtocol(protocol) {
	 	this.protocol = protocol;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStorageUrl() {
	 	return this.storageUrl;
	 }
	
	/**
	 * @param storageUrl string 
	 */
	 setStorageUrl(storageUrl) {
	 	this.storageUrl = storageUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStorageBaseDir() {
	 	return this.storageBaseDir;
	 }
	
	/**
	 * @param storageBaseDir string 
	 */
	 setStorageBaseDir(storageBaseDir) {
	 	this.storageBaseDir = storageBaseDir;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStorageUsername() {
	 	return this.storageUsername;
	 }
	
	/**
	 * @param storageUsername string 
	 */
	 setStorageUsername(storageUsername) {
	 	this.storageUsername = storageUsername;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStoragePassword() {
	 	return this.storagePassword;
	 }
	
	/**
	 * @param storagePassword string 
	 */
	 setStoragePassword(storagePassword) {
	 	this.storagePassword = storagePassword;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getStorageFtpPassiveMode() {
	 	return this.storageFtpPassiveMode;
	 }
	
	/**
	 * @param storageFtpPassiveMode bool 
	 */
	 setStorageFtpPassiveMode(storageFtpPassiveMode) {
	 	this.storageFtpPassiveMode = storageFtpPassiveMode;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMinFileSize() {
	 	return this.minFileSize;
	 }
	
	/**
	 * @param minFileSize int 
	 */
	 setMinFileSize(minFileSize) {
	 	this.minFileSize = minFileSize;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMaxFileSize() {
	 	return this.maxFileSize;
	 }
	
	/**
	 * @param maxFileSize int 
	 */
	 setMaxFileSize(maxFileSize) {
	 	this.maxFileSize = maxFileSize;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * @param flavorParamsIds string 
	 */
	 setFlavorParamsIds(flavorParamsIds) {
	 	this.flavorParamsIds = flavorParamsIds;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMaxConcurrentConnections() {
	 	return this.maxConcurrentConnections;
	 }
	
	/**
	 * @param maxConcurrentConnections int 
	 */
	 setMaxConcurrentConnections(maxConcurrentConnections) {
	 	this.maxConcurrentConnections = maxConcurrentConnections;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPathManagerClass() {
	 	return this.pathManagerClass;
	 }
	
	/**
	 * @param pathManagerClass string 
	 */
	 setPathManagerClass(pathManagerClass) {
	 	this.pathManagerClass = pathManagerClass;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getPathManagerParams() {
	 	return this.pathManagerParams;
	 }
	
	/**
	 * @param pathManagerParams array 
	 */
	 setPathManagerParams(pathManagerParams) {
	 	this.pathManagerParams = pathManagerParams;
	 }
	
	/**
	 * No need to create enum for temp field
	 * @return int
	 */
	 getTrigger() {
	 	return this.trigger;
	 }
	
	/**
	 * @param trigger int No need to create enum for temp field
	 */
	 setTrigger(trigger) {
	 	this.trigger = trigger;
	 }
	
	/**
	 * Delivery Priority
	 * @return int
	 */
	 getDeliveryPriority() {
	 	return this.deliveryPriority;
	 }
	
	/**
	 * @param deliveryPriority int Delivery Priority
	 */
	 setDeliveryPriority(deliveryPriority) {
	 	this.deliveryPriority = deliveryPriority;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeliveryStatus() {
	 	return this.deliveryStatus;
	 }
	
	/**
	 * @param deliveryStatus int 
	 */
	 setDeliveryStatus(deliveryStatus) {
	 	this.deliveryStatus = deliveryStatus;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyBehavior() {
	 	return this.readyBehavior;
	 }
	
	/**
	 * @param readyBehavior int 
	 */
	 setReadyBehavior(readyBehavior) {
	 	this.readyBehavior = readyBehavior;
	 }
	
	/**
	 * Flag sugnifying that the storage exported content should be deleted when soure entry is deleted
	 * @return int
	 */
	 getAllowAutoDelete() {
	 	return this.allowAutoDelete;
	 }
	
	/**
	 * @param allowAutoDelete int Flag sugnifying that the storage exported content should be deleted when soure entry is deleted
	 */
	 setAllowAutoDelete(allowAutoDelete) {
	 	this.allowAutoDelete = allowAutoDelete;
	 }
	
	/**
	 * Indicates to the local file transfer manager to create a link to the file instead of copying it
	 * @return bool
	 */
	 getCreateFileLink() {
	 	return this.createFileLink;
	 }
	
	/**
	 * @param createFileLink bool Indicates to the local file transfer manager to create a link to the file instead of copying it
	 */
	 setCreateFileLink(createFileLink) {
	 	this.createFileLink = createFileLink;
	 }
	
	/**
	 * Holds storage profile export rules
	 * @return array
	 */
	 getRules() {
	 	return this.rules;
	 }
	
	/**
	 * @param rules array Holds storage profile export rules
	 */
	 setRules(rules) {
	 	this.rules = rules;
	 }
	
	/**
	 * Delivery profile ids
	 * @return array
	 */
	 getDeliveryProfileIds() {
	 	return this.deliveryProfileIds;
	 }
	
	/**
	 * @param deliveryProfileIds array Delivery profile ids
	 */
	 setDeliveryProfileIds(deliveryProfileIds) {
	 	this.deliveryProfileIds = deliveryProfileIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrivateKey() {
	 	return this.privateKey;
	 }
	
	/**
	 * @param privateKey string 
	 */
	 setPrivateKey(privateKey) {
	 	this.privateKey = privateKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPublicKey() {
	 	return this.publicKey;
	 }
	
	/**
	 * @param publicKey string 
	 */
	 setPublicKey(publicKey) {
	 	this.publicKey = publicKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassPhrase() {
	 	return this.passPhrase;
	 }
	
	/**
	 * @param passPhrase string 
	 */
	 setPassPhrase(passPhrase) {
	 	this.passPhrase = passPhrase;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getShouldExportThumbs() {
	 	return this.shouldExportThumbs;
	 }
	
	/**
	 * @param shouldExportThumbs bool 
	 */
	 setShouldExportThumbs(shouldExportThumbs) {
	 	this.shouldExportThumbs = shouldExportThumbs;
	 }
}
module.exports.StorageProfile = StorageProfile;

/**
 *
 */
class SyndicationFeedEntryCount extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSyndicationFeedEntryCount';
	}
	
	/**
	 * the total count of entries that should appear in the feed without flavor filtering
	 * @return int
	 */
	 getTotalEntryCount() {
	 	return this.totalEntryCount;
	 }
	
	/**
	 * @param totalEntryCount int the total count of entries that should appear in the feed without flavor filtering
	 */
	 setTotalEntryCount(totalEntryCount) {
	 	this.totalEntryCount = totalEntryCount;
	 }
	
	/**
	 * count of entries that will appear in the feed (including all relevant filters)
	 * @return int
	 */
	 getActualEntryCount() {
	 	return this.actualEntryCount;
	 }
	
	/**
	 * @param actualEntryCount int count of entries that will appear in the feed (including all relevant filters)
	 */
	 setActualEntryCount(actualEntryCount) {
	 	this.actualEntryCount = actualEntryCount;
	 }
	
	/**
	 * count of entries that requires transcoding in order to be included in feed
	 * @return int
	 */
	 getRequireTranscodingCount() {
	 	return this.requireTranscodingCount;
	 }
	
	/**
	 * @param requireTranscodingCount int count of entries that requires transcoding in order to be included in feed
	 */
	 setRequireTranscodingCount(requireTranscodingCount) {
	 	this.requireTranscodingCount = requireTranscodingCount;
	 }
}
module.exports.SyndicationFeedEntryCount = SyndicationFeedEntryCount;

/**
 *
 */
class SystemPartnerUsageItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSystemPartnerUsageItem';
	}
	
	/**
	 * Partner ID
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner ID
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Partner name
	 * @return string
	 */
	 getPartnerName() {
	 	return this.partnerName;
	 }
	
	/**
	 * @param partnerName string Partner name
	 */
	 setPartnerName(partnerName) {
	 	this.partnerName = partnerName;
	 }
	
	/**
	 * Partner status
	 * @return int
	 */
	 getPartnerStatus() {
	 	return this.partnerStatus;
	 }
	
	/**
	 * @param partnerStatus int Partner status
	 */
	 setPartnerStatus(partnerStatus) {
	 	this.partnerStatus = partnerStatus;
	 }
	
	/**
	 * Partner package
	 * @return int
	 */
	 getPartnerPackage() {
	 	return this.partnerPackage;
	 }
	
	/**
	 * @param partnerPackage int Partner package
	 */
	 setPartnerPackage(partnerPackage) {
	 	this.partnerPackage = partnerPackage;
	 }
	
	/**
	 * Partner creation date (Unix timestamp)
	 * @return int
	 */
	 getPartnerCreatedAt() {
	 	return this.partnerCreatedAt;
	 }
	
	/**
	 * @param partnerCreatedAt int Partner creation date (Unix timestamp)
	 */
	 setPartnerCreatedAt(partnerCreatedAt) {
	 	this.partnerCreatedAt = partnerCreatedAt;
	 }
	
	/**
	 * Number of player loads in the specific date range
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * @param views int Number of player loads in the specific date range
	 */
	 setViews(views) {
	 	this.views = views;
	 }
	
	/**
	 * Number of plays in the specific date range
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * @param plays int Number of plays in the specific date range
	 */
	 setPlays(plays) {
	 	this.plays = plays;
	 }
	
	/**
	 * Number of new entries created during specific date range
	 * @return int
	 */
	 getEntriesCount() {
	 	return this.entriesCount;
	 }
	
	/**
	 * @param entriesCount int Number of new entries created during specific date range
	 */
	 setEntriesCount(entriesCount) {
	 	this.entriesCount = entriesCount;
	 }
	
	/**
	 * Total number of entries
	 * @return int
	 */
	 getTotalEntriesCount() {
	 	return this.totalEntriesCount;
	 }
	
	/**
	 * @param totalEntriesCount int Total number of entries
	 */
	 setTotalEntriesCount(totalEntriesCount) {
	 	this.totalEntriesCount = totalEntriesCount;
	 }
	
	/**
	 * Number of new video entries created during specific date range
	 * @return int
	 */
	 getVideoEntriesCount() {
	 	return this.videoEntriesCount;
	 }
	
	/**
	 * @param videoEntriesCount int Number of new video entries created during specific date range
	 */
	 setVideoEntriesCount(videoEntriesCount) {
	 	this.videoEntriesCount = videoEntriesCount;
	 }
	
	/**
	 * Number of new image entries created during specific date range
	 * @return int
	 */
	 getImageEntriesCount() {
	 	return this.imageEntriesCount;
	 }
	
	/**
	 * @param imageEntriesCount int Number of new image entries created during specific date range
	 */
	 setImageEntriesCount(imageEntriesCount) {
	 	this.imageEntriesCount = imageEntriesCount;
	 }
	
	/**
	 * Number of new audio entries created during specific date range
	 * @return int
	 */
	 getAudioEntriesCount() {
	 	return this.audioEntriesCount;
	 }
	
	/**
	 * @param audioEntriesCount int Number of new audio entries created during specific date range
	 */
	 setAudioEntriesCount(audioEntriesCount) {
	 	this.audioEntriesCount = audioEntriesCount;
	 }
	
	/**
	 * Number of new mix entries created during specific date range
	 * @return int
	 */
	 getMixEntriesCount() {
	 	return this.mixEntriesCount;
	 }
	
	/**
	 * @param mixEntriesCount int Number of new mix entries created during specific date range
	 */
	 setMixEntriesCount(mixEntriesCount) {
	 	this.mixEntriesCount = mixEntriesCount;
	 }
	
	/**
	 * The total bandwidth usage during the given date range (in MB)
	 * @return float
	 */
	 getBandwidth() {
	 	return this.bandwidth;
	 }
	
	/**
	 * @param bandwidth float The total bandwidth usage during the given date range (in MB)
	 */
	 setBandwidth(bandwidth) {
	 	this.bandwidth = bandwidth;
	 }
	
	/**
	 * The total storage consumption (in MB)
	 * @return float
	 */
	 getTotalStorage() {
	 	return this.totalStorage;
	 }
	
	/**
	 * @param totalStorage float The total storage consumption (in MB)
	 */
	 setTotalStorage(totalStorage) {
	 	this.totalStorage = totalStorage;
	 }
	
	/**
	 * The change in storage consumption (new uploads) during the given date range (in MB)
	 * @return float
	 */
	 getStorage() {
	 	return this.storage;
	 }
	
	/**
	 * @param storage float The change in storage consumption (new uploads) during the given date range (in MB)
	 */
	 setStorage(storage) {
	 	this.storage = storage;
	 }
	
	/**
	 * The peak amount of storage consumption during the given date range for the specific publisher
	 * @return float
	 */
	 getPeakStorage() {
	 	return this.peakStorage;
	 }
	
	/**
	 * @param peakStorage float The peak amount of storage consumption during the given date range for the specific publisher
	 */
	 setPeakStorage(peakStorage) {
	 	this.peakStorage = peakStorage;
	 }
	
	/**
	 * The average amount of storage consumption during the given date range for the specific publisher
	 * @return float
	 */
	 getAvgStorage() {
	 	return this.avgStorage;
	 }
	
	/**
	 * @param avgStorage float The average amount of storage consumption during the given date range for the specific publisher
	 */
	 setAvgStorage(avgStorage) {
	 	this.avgStorage = avgStorage;
	 }
	
	/**
	 * The combined amount of bandwidth and storage consumed during the given date range for the specific publisher
	 * @return float
	 */
	 getCombinedBandwidthStorage() {
	 	return this.combinedBandwidthStorage;
	 }
	
	/**
	 * @param combinedBandwidthStorage float The combined amount of bandwidth and storage consumed during the given date range for the specific publisher
	 */
	 setCombinedBandwidthStorage(combinedBandwidthStorage) {
	 	this.combinedBandwidthStorage = combinedBandwidthStorage;
	 }
	
	/**
	 * Amount of deleted storage in MB
	 * @return float
	 */
	 getDeletedStorage() {
	 	return this.deletedStorage;
	 }
	
	/**
	 * @param deletedStorage float Amount of deleted storage in MB
	 */
	 setDeletedStorage(deletedStorage) {
	 	this.deletedStorage = deletedStorage;
	 }
	
	/**
	 * Amount of transcoding usage in MB
	 * @return float
	 */
	 getTranscodingUsage() {
	 	return this.transcodingUsage;
	 }
	
	/**
	 * @param transcodingUsage float Amount of transcoding usage in MB
	 */
	 setTranscodingUsage(transcodingUsage) {
	 	this.transcodingUsage = transcodingUsage;
	 }
}
module.exports.SystemPartnerUsageItem = SystemPartnerUsageItem;

/**
 *
 */
class Tag extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTag';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTag() {
	 	return this.tag;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTaggedObjectType() {
	 	return this.taggedObjectType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInstanceCount() {
	 	return this.instanceCount;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.Tag = Tag;

/**
 *
 */
class ThumbnailServeOptions extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbnailServeOptions';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getDownload() {
	 	return this.download;
	 }
	
	/**
	 * @param download bool 
	 */
	 setDownload(download) {
	 	this.download = download;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferrer() {
	 	return this.referrer;
	 }
	
	/**
	 * @param referrer string 
	 */
	 setReferrer(referrer) {
	 	this.referrer = referrer;
	 }
}
module.exports.ThumbnailServeOptions = ThumbnailServeOptions;

/**
 *
 */
class TranscriptAsset extends AttachmentAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTranscriptAsset';
	}
	
	/**
	 * The accuracy of the transcript - values between 0 and 1
	 * @return float
	 */
	 getAccuracy() {
	 	return this.accuracy;
	 }
	
	/**
	 * @param accuracy float The accuracy of the transcript - values between 0 and 1
	 */
	 setAccuracy(accuracy) {
	 	this.accuracy = accuracy;
	 }
	
	/**
	 * Was verified by human or machine
	 * @return int
	 */
	 getHumanVerified() {
	 	return this.humanVerified;
	 }
	
	/**
	 * @param humanVerified int Was verified by human or machine
	 */
	 setHumanVerified(humanVerified) {
	 	this.humanVerified = humanVerified;
	 }
	
	/**
	 * The language of the transcript
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string The language of the transcript
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
}
module.exports.TranscriptAsset = TranscriptAsset;

/**
 *
 */
class UiConf extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConf';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Name of the uiConf, this is not a primary key
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string Name of the uiConf, this is not a primary key
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getObjType() {
	 	return this.objType;
	 }
	
	/**
	 * @param objType int 
	 */
	 setObjType(objType) {
	 	this.objType = objType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjTypeAsString() {
	 	return this.objTypeAsString;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getWidth() {
	 	return this.width;
	 }
	
	/**
	 * @param width int 
	 */
	 setWidth(width) {
	 	this.width = width;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeight() {
	 	return this.height;
	 }
	
	/**
	 * @param height int 
	 */
	 setHeight(height) {
	 	this.height = height;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHtmlParams() {
	 	return this.htmlParams;
	 }
	
	/**
	 * @param htmlParams string 
	 */
	 setHtmlParams(htmlParams) {
	 	this.htmlParams = htmlParams;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSwfUrl() {
	 	return this.swfUrl;
	 }
	
	/**
	 * @param swfUrl string 
	 */
	 setSwfUrl(swfUrl) {
	 	this.swfUrl = swfUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConfFilePath() {
	 	return this.confFilePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConfFile() {
	 	return this.confFile;
	 }
	
	/**
	 * @param confFile string 
	 */
	 setConfFile(confFile) {
	 	this.confFile = confFile;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConfFileFeatures() {
	 	return this.confFileFeatures;
	 }
	
	/**
	 * @param confFileFeatures string 
	 */
	 setConfFileFeatures(confFileFeatures) {
	 	this.confFileFeatures = confFileFeatures;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConfig() {
	 	return this.config;
	 }
	
	/**
	 * @param config string 
	 */
	 setConfig(config) {
	 	this.config = config;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConfVars() {
	 	return this.confVars;
	 }
	
	/**
	 * @param confVars string 
	 */
	 setConfVars(confVars) {
	 	this.confVars = confVars;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getUseCdn() {
	 	return this.useCdn;
	 }
	
	/**
	 * @param useCdn bool 
	 */
	 setUseCdn(useCdn) {
	 	this.useCdn = useCdn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSwfUrlVersion() {
	 	return this.swfUrlVersion;
	 }
	
	/**
	 * @param swfUrlVersion string 
	 */
	 setSwfUrlVersion(swfUrlVersion) {
	 	this.swfUrlVersion = swfUrlVersion;
	 }
	
	/**
	 * Entry creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Entry creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreationMode() {
	 	return this.creationMode;
	 }
	
	/**
	 * @param creationMode int 
	 */
	 setCreationMode(creationMode) {
	 	this.creationMode = creationMode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHtml5Url() {
	 	return this.html5Url;
	 }
	
	/**
	 * @param html5Url string 
	 */
	 setHtml5Url(html5Url) {
	 	this.html5Url = html5Url;
	 }
	
	/**
	 * UiConf version
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerTags() {
	 	return this.partnerTags;
	 }
	
	/**
	 * @param partnerTags string 
	 */
	 setPartnerTags(partnerTags) {
	 	this.partnerTags = partnerTags;
	 }
}
module.exports.UiConf = UiConf;

/**
 *
 */
class UiConfAdmin extends UiConf{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfAdmin';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getIsPublic() {
	 	return this.isPublic;
	 }
	
	/**
	 * @param isPublic bool 
	 */
	 setIsPublic(isPublic) {
	 	this.isPublic = isPublic;
	 }
}
module.exports.UiConfAdmin = UiConfAdmin;

/**
 *
 */
class UiConfTypeInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfTypeInfo';
	}
	
	/**
	 * UiConf Type
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int UiConf Type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * Available versions
	 * @return array
	 */
	 getVersions() {
	 	return this.versions;
	 }
	
	/**
	 * @param versions array Available versions
	 */
	 setVersions(versions) {
	 	this.versions = versions;
	 }
	
	/**
	 * The direcotry this type is saved at
	 * @return string
	 */
	 getDirectory() {
	 	return this.directory;
	 }
	
	/**
	 * @param directory string The direcotry this type is saved at
	 */
	 setDirectory(directory) {
	 	this.directory = directory;
	 }
	
	/**
	 * Filename for this UiConf type
	 * @return string
	 */
	 getFilename() {
	 	return this.filename;
	 }
	
	/**
	 * @param filename string Filename for this UiConf type
	 */
	 setFilename(filename) {
	 	this.filename = filename;
	 }
}
module.exports.UiConfTypeInfo = UiConfTypeInfo;

/**
 *
 */
class UploadResponse extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadResponse';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUploadTokenId() {
	 	return this.uploadTokenId;
	 }
	
	/**
	 * @param uploadTokenId string 
	 */
	 setUploadTokenId(uploadTokenId) {
	 	this.uploadTokenId = uploadTokenId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * @param fileSize int 
	 */
	 setFileSize(fileSize) {
	 	this.fileSize = fileSize;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrorCode() {
	 	return this.errorCode;
	 }
	
	/**
	 * @param errorCode int 
	 */
	 setErrorCode(errorCode) {
	 	this.errorCode = errorCode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorDescription() {
	 	return this.errorDescription;
	 }
	
	/**
	 * @param errorDescription string 
	 */
	 setErrorDescription(errorDescription) {
	 	this.errorDescription = errorDescription;
	 }
}
module.exports.UploadResponse = UploadResponse;

/**
 *
 */
class UploadToken extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadToken';
	}
	
	/**
	 * Upload token unique ID
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * Partner ID of the upload token
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * User id for the upload token
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * Status of the upload token
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded
	 * @return string
	 */
	 getFileName() {
	 	return this.fileName;
	 }
	
	/**
	 * @param fileName string Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded
	 */
	 setFileName(fileName) {
	 	this.fileName = fileName;
	 }
	
	/**
	 * File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded
	 * @return float
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * @param fileSize float File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded
	 */
	 setFileSize(fileSize) {
	 	this.fileSize = fileSize;
	 }
	
	/**
	 * Uploaded file size in bytes, can be used to identify how many bytes were uploaded before resuming
	 * @return float
	 */
	 getUploadedFileSize() {
	 	return this.uploadedFileSize;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.UploadToken = UploadToken;

/**
 *
 */
class User extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUser';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getScreenName() {
	 	return this.screenName;
	 }
	
	/**
	 * @param screenName string 
	 */
	 setScreenName(screenName) {
	 	this.screenName = screenName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullName() {
	 	return this.fullName;
	 }
	
	/**
	 * @param fullName string 
	 */
	 setFullName(fullName) {
	 	this.fullName = fullName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email string 
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDateOfBirth() {
	 	return this.dateOfBirth;
	 }
	
	/**
	 * @param dateOfBirth int 
	 */
	 setDateOfBirth(dateOfBirth) {
	 	this.dateOfBirth = dateOfBirth;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCountry() {
	 	return this.country;
	 }
	
	/**
	 * @param country string 
	 */
	 setCountry(country) {
	 	this.country = country;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * @param state string 
	 */
	 setState(state) {
	 	this.state = state;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCity() {
	 	return this.city;
	 }
	
	/**
	 * @param city string 
	 */
	 setCity(city) {
	 	this.city = city;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getZip() {
	 	return this.zip;
	 }
	
	/**
	 * @param zip string 
	 */
	 setZip(zip) {
	 	this.zip = zip;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbnailUrl() {
	 	return this.thumbnailUrl;
	 }
	
	/**
	 * @param thumbnailUrl string 
	 */
	 setThumbnailUrl(thumbnailUrl) {
	 	this.thumbnailUrl = thumbnailUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * Admin tags can be updated only by using an admin session
	 * @return string
	 */
	 getAdminTags() {
	 	return this.adminTags;
	 }
	
	/**
	 * @param adminTags string Admin tags can be updated only by using an admin session
	 */
	 setAdminTags(adminTags) {
	 	this.adminTags = adminTags;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getGender() {
	 	return this.gender;
	 }
	
	/**
	 * @param gender int 
	 */
	 setGender(gender) {
	 	this.gender = gender;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * Creation date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * Last update date as Unix timestamp (In seconds)
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Can be used to store various partner related data as a string
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string Can be used to store various partner related data as a string
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIndexedPartnerDataInt() {
	 	return this.indexedPartnerDataInt;
	 }
	
	/**
	 * @param indexedPartnerDataInt int 
	 */
	 setIndexedPartnerDataInt(indexedPartnerDataInt) {
	 	this.indexedPartnerDataInt = indexedPartnerDataInt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIndexedPartnerDataString() {
	 	return this.indexedPartnerDataString;
	 }
	
	/**
	 * @param indexedPartnerDataString string 
	 */
	 setIndexedPartnerDataString(indexedPartnerDataString) {
	 	this.indexedPartnerDataString = indexedPartnerDataString;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStorageSize() {
	 	return this.storageSize;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string 
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string 
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsAdmin() {
	 	return this.isAdmin;
	 }
	
	/**
	 * @param isAdmin bool 
	 */
	 setIsAdmin(isAdmin) {
	 	this.isAdmin = isAdmin;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string 
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastLoginTime() {
	 	return this.lastLoginTime;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusUpdatedAt() {
	 	return this.statusUpdatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedAt() {
	 	return this.deletedAt;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getLoginEnabled() {
	 	return this.loginEnabled;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRoleIds() {
	 	return this.roleIds;
	 }
	
	/**
	 * @param roleIds string 
	 */
	 setRoleIds(roleIds) {
	 	this.roleIds = roleIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRoleNames() {
	 	return this.roleNames;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsAccountOwner() {
	 	return this.isAccountOwner;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAllowedPartnerIds() {
	 	return this.allowedPartnerIds;
	 }
	
	/**
	 * @param allowedPartnerIds string 
	 */
	 setAllowedPartnerIds(allowedPartnerIds) {
	 	this.allowedPartnerIds = allowedPartnerIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAllowedPartnerPackages() {
	 	return this.allowedPartnerPackages;
	 }
	
	/**
	 * @param allowedPartnerPackages string 
	 */
	 setAllowedPartnerPackages(allowedPartnerPackages) {
	 	this.allowedPartnerPackages = allowedPartnerPackages;
	 }
}
module.exports.User = User;

/**
 *
 */
class UserEntry extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserEntry';
	}
	
	/**
	 * unique auto-generated identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
}
module.exports.UserEntry = UserEntry;

/**
 *
 */
class UserLoginData extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserLoginData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id string 
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLoginEmail() {
	 	return this.loginEmail;
	 }
	
	/**
	 * @param loginEmail string 
	 */
	 setLoginEmail(loginEmail) {
	 	this.loginEmail = loginEmail;
	 }
}
module.exports.UserLoginData = UserLoginData;

/**
 *
 */
class UserRole extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRole';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionNames() {
	 	return this.permissionNames;
	 }
	
	/**
	 * @param permissionNames string 
	 */
	 setPermissionNames(permissionNames) {
	 	this.permissionNames = permissionNames;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
}
module.exports.UserRole = UserRole;

/**
 *
 */
class VarPartnerUsageItem extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVarPartnerUsageItem';
	}
	
	/**
	 * Partner ID
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * @param partnerId int Partner ID
	 */
	 setPartnerId(partnerId) {
	 	this.partnerId = partnerId;
	 }
	
	/**
	 * Partner name
	 * @return string
	 */
	 getPartnerName() {
	 	return this.partnerName;
	 }
	
	/**
	 * @param partnerName string Partner name
	 */
	 setPartnerName(partnerName) {
	 	this.partnerName = partnerName;
	 }
	
	/**
	 * Partner status
	 * @return int
	 */
	 getPartnerStatus() {
	 	return this.partnerStatus;
	 }
	
	/**
	 * @param partnerStatus int Partner status
	 */
	 setPartnerStatus(partnerStatus) {
	 	this.partnerStatus = partnerStatus;
	 }
	
	/**
	 * Partner package
	 * @return int
	 */
	 getPartnerPackage() {
	 	return this.partnerPackage;
	 }
	
	/**
	 * @param partnerPackage int Partner package
	 */
	 setPartnerPackage(partnerPackage) {
	 	this.partnerPackage = partnerPackage;
	 }
	
	/**
	 * Partner creation date (Unix timestamp)
	 * @return int
	 */
	 getPartnerCreatedAt() {
	 	return this.partnerCreatedAt;
	 }
	
	/**
	 * @param partnerCreatedAt int Partner creation date (Unix timestamp)
	 */
	 setPartnerCreatedAt(partnerCreatedAt) {
	 	this.partnerCreatedAt = partnerCreatedAt;
	 }
	
	/**
	 * Number of player loads in the specific date range
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * @param views int Number of player loads in the specific date range
	 */
	 setViews(views) {
	 	this.views = views;
	 }
	
	/**
	 * Number of plays in the specific date range
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * @param plays int Number of plays in the specific date range
	 */
	 setPlays(plays) {
	 	this.plays = plays;
	 }
	
	/**
	 * Number of new entries created during specific date range
	 * @return int
	 */
	 getEntriesCount() {
	 	return this.entriesCount;
	 }
	
	/**
	 * @param entriesCount int Number of new entries created during specific date range
	 */
	 setEntriesCount(entriesCount) {
	 	this.entriesCount = entriesCount;
	 }
	
	/**
	 * Total number of entries
	 * @return int
	 */
	 getTotalEntriesCount() {
	 	return this.totalEntriesCount;
	 }
	
	/**
	 * @param totalEntriesCount int Total number of entries
	 */
	 setTotalEntriesCount(totalEntriesCount) {
	 	this.totalEntriesCount = totalEntriesCount;
	 }
	
	/**
	 * Number of new video entries created during specific date range
	 * @return int
	 */
	 getVideoEntriesCount() {
	 	return this.videoEntriesCount;
	 }
	
	/**
	 * @param videoEntriesCount int Number of new video entries created during specific date range
	 */
	 setVideoEntriesCount(videoEntriesCount) {
	 	this.videoEntriesCount = videoEntriesCount;
	 }
	
	/**
	 * Number of new image entries created during specific date range
	 * @return int
	 */
	 getImageEntriesCount() {
	 	return this.imageEntriesCount;
	 }
	
	/**
	 * @param imageEntriesCount int Number of new image entries created during specific date range
	 */
	 setImageEntriesCount(imageEntriesCount) {
	 	this.imageEntriesCount = imageEntriesCount;
	 }
	
	/**
	 * Number of new audio entries created during specific date range
	 * @return int
	 */
	 getAudioEntriesCount() {
	 	return this.audioEntriesCount;
	 }
	
	/**
	 * @param audioEntriesCount int Number of new audio entries created during specific date range
	 */
	 setAudioEntriesCount(audioEntriesCount) {
	 	this.audioEntriesCount = audioEntriesCount;
	 }
	
	/**
	 * Number of new mix entries created during specific date range
	 * @return int
	 */
	 getMixEntriesCount() {
	 	return this.mixEntriesCount;
	 }
	
	/**
	 * @param mixEntriesCount int Number of new mix entries created during specific date range
	 */
	 setMixEntriesCount(mixEntriesCount) {
	 	this.mixEntriesCount = mixEntriesCount;
	 }
	
	/**
	 * The total bandwidth usage during the given date range (in MB)
	 * @return float
	 */
	 getBandwidth() {
	 	return this.bandwidth;
	 }
	
	/**
	 * @param bandwidth float The total bandwidth usage during the given date range (in MB)
	 */
	 setBandwidth(bandwidth) {
	 	this.bandwidth = bandwidth;
	 }
	
	/**
	 * The total storage consumption (in MB)
	 * @return float
	 */
	 getTotalStorage() {
	 	return this.totalStorage;
	 }
	
	/**
	 * @param totalStorage float The total storage consumption (in MB)
	 */
	 setTotalStorage(totalStorage) {
	 	this.totalStorage = totalStorage;
	 }
	
	/**
	 * The added storage consumption (new uploads) during the given date range (in MB)
	 * @return float
	 */
	 getStorage() {
	 	return this.storage;
	 }
	
	/**
	 * @param storage float The added storage consumption (new uploads) during the given date range (in MB)
	 */
	 setStorage(storage) {
	 	this.storage = storage;
	 }
	
	/**
	 * The deleted storage consumption (new uploads) during the given date range (in MB)
	 * @return float
	 */
	 getDeletedStorage() {
	 	return this.deletedStorage;
	 }
	
	/**
	 * @param deletedStorage float The deleted storage consumption (new uploads) during the given date range (in MB)
	 */
	 setDeletedStorage(deletedStorage) {
	 	this.deletedStorage = deletedStorage;
	 }
	
	/**
	 * The peak amount of storage consumption during the given date range for the specific publisher
	 * @return float
	 */
	 getPeakStorage() {
	 	return this.peakStorage;
	 }
	
	/**
	 * @param peakStorage float The peak amount of storage consumption during the given date range for the specific publisher
	 */
	 setPeakStorage(peakStorage) {
	 	this.peakStorage = peakStorage;
	 }
	
	/**
	 * The average amount of storage consumption during the given date range for the specific publisher
	 * @return float
	 */
	 getAvgStorage() {
	 	return this.avgStorage;
	 }
	
	/**
	 * @param avgStorage float The average amount of storage consumption during the given date range for the specific publisher
	 */
	 setAvgStorage(avgStorage) {
	 	this.avgStorage = avgStorage;
	 }
	
	/**
	 * The combined amount of bandwidth and storage consumed during the given date range for the specific publisher
	 * @return float
	 */
	 getCombinedStorageBandwidth() {
	 	return this.combinedStorageBandwidth;
	 }
	
	/**
	 * @param combinedStorageBandwidth float The combined amount of bandwidth and storage consumed during the given date range for the specific publisher
	 */
	 setCombinedStorageBandwidth(combinedStorageBandwidth) {
	 	this.combinedStorageBandwidth = combinedStorageBandwidth;
	 }
	
	/**
	 * Amount of transcoding usage in MB
	 * @return float
	 */
	 getTranscodingUsage() {
	 	return this.transcodingUsage;
	 }
	
	/**
	 * @param transcodingUsage float Amount of transcoding usage in MB
	 */
	 setTranscodingUsage(transcodingUsage) {
	 	this.transcodingUsage = transcodingUsage;
	 }
	
	/**
	 * TGhe date at which the report was taken - Unix Timestamp
	 * @return string
	 */
	 getDateId() {
	 	return this.dateId;
	 }
	
	/**
	 * @param dateId string TGhe date at which the report was taken - Unix Timestamp
	 */
	 setDateId(dateId) {
	 	this.dateId = dateId;
	 }
}
module.exports.VarPartnerUsageItem = VarPartnerUsageItem;

/**
 *
 */
class VirusScanProfile extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVirusScanProfile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEngineType() {
	 	return this.engineType;
	 }
	
	/**
	 * @param engineType string 
	 */
	 setEngineType(engineType) {
	 	this.engineType = engineType;
	 }
	
	/**
	 * 
	 * @return BaseEntryFilter
	 */
	 getEntryFilter() {
	 	return this.entryFilter;
	 }
	
	/**
	 * @param entryFilter BaseEntryFilter 
	 */
	 setEntryFilter(entryFilter) {
	 	this.entryFilter = entryFilter;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getActionIfInfected() {
	 	return this.actionIfInfected;
	 }
	
	/**
	 * @param actionIfInfected int 
	 */
	 setActionIfInfected(actionIfInfected) {
	 	this.actionIfInfected = actionIfInfected;
	 }
}
module.exports.VirusScanProfile = VirusScanProfile;

/**
 *
 */
class Widget extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaWidget';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceWidgetId() {
	 	return this.sourceWidgetId;
	 }
	
	/**
	 * @param sourceWidgetId string 
	 */
	 setSourceWidgetId(sourceWidgetId) {
	 	this.sourceWidgetId = sourceWidgetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootWidgetId() {
	 	return this.rootWidgetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerId() {
	 	return this.partnerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUiConfId() {
	 	return this.uiConfId;
	 }
	
	/**
	 * @param uiConfId int 
	 */
	 setUiConfId(uiConfId) {
	 	this.uiConfId = uiConfId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSecurityType() {
	 	return this.securityType;
	 }
	
	/**
	 * @param securityType int 
	 */
	 setSecurityType(securityType) {
	 	this.securityType = securityType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSecurityPolicy() {
	 	return this.securityPolicy;
	 }
	
	/**
	 * @param securityPolicy int 
	 */
	 setSecurityPolicy(securityPolicy) {
	 	this.securityPolicy = securityPolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAt() {
	 	return this.createdAt;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAt() {
	 	return this.updatedAt;
	 }
	
	/**
	 * Can be used to store various partner related data as a string
	 * @return string
	 */
	 getPartnerData() {
	 	return this.partnerData;
	 }
	
	/**
	 * @param partnerData string Can be used to store various partner related data as a string
	 */
	 setPartnerData(partnerData) {
	 	this.partnerData = partnerData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWidgetHTML() {
	 	return this.widgetHTML;
	 }
	
	/**
	 * Should enforce entitlement on feed entries
	 * @return bool
	 */
	 getEnforceEntitlement() {
	 	return this.enforceEntitlement;
	 }
	
	/**
	 * @param enforceEntitlement bool Should enforce entitlement on feed entries
	 */
	 setEnforceEntitlement(enforceEntitlement) {
	 	this.enforceEntitlement = enforceEntitlement;
	 }
	
	/**
	 * Set privacy context for search entries that assiged to private and public categories within a category privacy context
	 * @return string
	 */
	 getPrivacyContext() {
	 	return this.privacyContext;
	 }
	
	/**
	 * @param privacyContext string Set privacy context for search entries that assiged to private and public categories within a category privacy context
	 */
	 setPrivacyContext(privacyContext) {
	 	this.privacyContext = privacyContext;
	 }
	
	/**
	 * Addes the HTML5 script line to the widget's embed code
	 * @return bool
	 */
	 getAddEmbedHtml5Support() {
	 	return this.addEmbedHtml5Support;
	 }
	
	/**
	 * @param addEmbedHtml5Support bool Addes the HTML5 script line to the widget's embed code
	 */
	 setAddEmbedHtml5Support(addEmbedHtml5Support) {
	 	this.addEmbedHtml5Support = addEmbedHtml5Support;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRoles() {
	 	return this.roles;
	 }
	
	/**
	 * @param roles string 
	 */
	 setRoles(roles) {
	 	this.roles = roles;
	 }
}
module.exports.Widget = Widget;

/**
 *
 */
class BatchJobBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBatchJobBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIdGreaterThanOrEqual() {
	 	return this.idGreaterThanOrEqual;
	 }
	
	/**
	 * @param idGreaterThanOrEqual int 
	 */
	 setIdGreaterThanOrEqual(idGreaterThanOrEqual) {
	 	this.idGreaterThanOrEqual = idGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdNotIn() {
	 	return this.partnerIdNotIn;
	 }
	
	/**
	 * @param partnerIdNotIn string 
	 */
	 setPartnerIdNotIn(partnerIdNotIn) {
	 	this.partnerIdNotIn = partnerIdNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExecutionAttemptsGreaterThanOrEqual() {
	 	return this.executionAttemptsGreaterThanOrEqual;
	 }
	
	/**
	 * @param executionAttemptsGreaterThanOrEqual int 
	 */
	 setExecutionAttemptsGreaterThanOrEqual(executionAttemptsGreaterThanOrEqual) {
	 	this.executionAttemptsGreaterThanOrEqual = executionAttemptsGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExecutionAttemptsLessThanOrEqual() {
	 	return this.executionAttemptsLessThanOrEqual;
	 }
	
	/**
	 * @param executionAttemptsLessThanOrEqual int 
	 */
	 setExecutionAttemptsLessThanOrEqual(executionAttemptsLessThanOrEqual) {
	 	this.executionAttemptsLessThanOrEqual = executionAttemptsLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLockVersionGreaterThanOrEqual() {
	 	return this.lockVersionGreaterThanOrEqual;
	 }
	
	/**
	 * @param lockVersionGreaterThanOrEqual int 
	 */
	 setLockVersionGreaterThanOrEqual(lockVersionGreaterThanOrEqual) {
	 	this.lockVersionGreaterThanOrEqual = lockVersionGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLockVersionLessThanOrEqual() {
	 	return this.lockVersionLessThanOrEqual;
	 }
	
	/**
	 * @param lockVersionLessThanOrEqual int 
	 */
	 setLockVersionLessThanOrEqual(lockVersionLessThanOrEqual) {
	 	this.lockVersionLessThanOrEqual = lockVersionLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobTypeEqual() {
	 	return this.jobTypeEqual;
	 }
	
	/**
	 * @param jobTypeEqual string 
	 */
	 setJobTypeEqual(jobTypeEqual) {
	 	this.jobTypeEqual = jobTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobTypeIn() {
	 	return this.jobTypeIn;
	 }
	
	/**
	 * @param jobTypeIn string 
	 */
	 setJobTypeIn(jobTypeIn) {
	 	this.jobTypeIn = jobTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobTypeNotIn() {
	 	return this.jobTypeNotIn;
	 }
	
	/**
	 * @param jobTypeNotIn string 
	 */
	 setJobTypeNotIn(jobTypeNotIn) {
	 	this.jobTypeNotIn = jobTypeNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getJobSubTypeEqual() {
	 	return this.jobSubTypeEqual;
	 }
	
	/**
	 * @param jobSubTypeEqual int 
	 */
	 setJobSubTypeEqual(jobSubTypeEqual) {
	 	this.jobSubTypeEqual = jobSubTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobSubTypeIn() {
	 	return this.jobSubTypeIn;
	 }
	
	/**
	 * @param jobSubTypeIn string 
	 */
	 setJobSubTypeIn(jobSubTypeIn) {
	 	this.jobSubTypeIn = jobSubTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getJobSubTypeNotIn() {
	 	return this.jobSubTypeNotIn;
	 }
	
	/**
	 * @param jobSubTypeNotIn string 
	 */
	 setJobSubTypeNotIn(jobSubTypeNotIn) {
	 	this.jobSubTypeNotIn = jobSubTypeNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusNotIn() {
	 	return this.statusNotIn;
	 }
	
	/**
	 * @param statusNotIn string 
	 */
	 setStatusNotIn(statusNotIn) {
	 	this.statusNotIn = statusNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriorityGreaterThanOrEqual() {
	 	return this.priorityGreaterThanOrEqual;
	 }
	
	/**
	 * @param priorityGreaterThanOrEqual int 
	 */
	 setPriorityGreaterThanOrEqual(priorityGreaterThanOrEqual) {
	 	this.priorityGreaterThanOrEqual = priorityGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriorityLessThanOrEqual() {
	 	return this.priorityLessThanOrEqual;
	 }
	
	/**
	 * @param priorityLessThanOrEqual int 
	 */
	 setPriorityLessThanOrEqual(priorityLessThanOrEqual) {
	 	this.priorityLessThanOrEqual = priorityLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriorityEqual() {
	 	return this.priorityEqual;
	 }
	
	/**
	 * @param priorityEqual int 
	 */
	 setPriorityEqual(priorityEqual) {
	 	this.priorityEqual = priorityEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPriorityIn() {
	 	return this.priorityIn;
	 }
	
	/**
	 * @param priorityIn string 
	 */
	 setPriorityIn(priorityIn) {
	 	this.priorityIn = priorityIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPriorityNotIn() {
	 	return this.priorityNotIn;
	 }
	
	/**
	 * @param priorityNotIn string 
	 */
	 setPriorityNotIn(priorityNotIn) {
	 	this.priorityNotIn = priorityNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchVersionGreaterThanOrEqual() {
	 	return this.batchVersionGreaterThanOrEqual;
	 }
	
	/**
	 * @param batchVersionGreaterThanOrEqual int 
	 */
	 setBatchVersionGreaterThanOrEqual(batchVersionGreaterThanOrEqual) {
	 	this.batchVersionGreaterThanOrEqual = batchVersionGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchVersionLessThanOrEqual() {
	 	return this.batchVersionLessThanOrEqual;
	 }
	
	/**
	 * @param batchVersionLessThanOrEqual int 
	 */
	 setBatchVersionLessThanOrEqual(batchVersionLessThanOrEqual) {
	 	this.batchVersionLessThanOrEqual = batchVersionLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getBatchVersionEqual() {
	 	return this.batchVersionEqual;
	 }
	
	/**
	 * @param batchVersionEqual int 
	 */
	 setBatchVersionEqual(batchVersionEqual) {
	 	this.batchVersionEqual = batchVersionEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getQueueTimeGreaterThanOrEqual() {
	 	return this.queueTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param queueTimeGreaterThanOrEqual int 
	 */
	 setQueueTimeGreaterThanOrEqual(queueTimeGreaterThanOrEqual) {
	 	this.queueTimeGreaterThanOrEqual = queueTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getQueueTimeLessThanOrEqual() {
	 	return this.queueTimeLessThanOrEqual;
	 }
	
	/**
	 * @param queueTimeLessThanOrEqual int 
	 */
	 setQueueTimeLessThanOrEqual(queueTimeLessThanOrEqual) {
	 	this.queueTimeLessThanOrEqual = queueTimeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFinishTimeGreaterThanOrEqual() {
	 	return this.finishTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param finishTimeGreaterThanOrEqual int 
	 */
	 setFinishTimeGreaterThanOrEqual(finishTimeGreaterThanOrEqual) {
	 	this.finishTimeGreaterThanOrEqual = finishTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFinishTimeLessThanOrEqual() {
	 	return this.finishTimeLessThanOrEqual;
	 }
	
	/**
	 * @param finishTimeLessThanOrEqual int 
	 */
	 setFinishTimeLessThanOrEqual(finishTimeLessThanOrEqual) {
	 	this.finishTimeLessThanOrEqual = finishTimeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrTypeEqual() {
	 	return this.errTypeEqual;
	 }
	
	/**
	 * @param errTypeEqual int 
	 */
	 setErrTypeEqual(errTypeEqual) {
	 	this.errTypeEqual = errTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrTypeIn() {
	 	return this.errTypeIn;
	 }
	
	/**
	 * @param errTypeIn string 
	 */
	 setErrTypeIn(errTypeIn) {
	 	this.errTypeIn = errTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrTypeNotIn() {
	 	return this.errTypeNotIn;
	 }
	
	/**
	 * @param errTypeNotIn string 
	 */
	 setErrTypeNotIn(errTypeNotIn) {
	 	this.errTypeNotIn = errTypeNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getErrNumberEqual() {
	 	return this.errNumberEqual;
	 }
	
	/**
	 * @param errNumberEqual int 
	 */
	 setErrNumberEqual(errNumberEqual) {
	 	this.errNumberEqual = errNumberEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrNumberIn() {
	 	return this.errNumberIn;
	 }
	
	/**
	 * @param errNumberIn string 
	 */
	 setErrNumberIn(errNumberIn) {
	 	this.errNumberIn = errNumberIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrNumberNotIn() {
	 	return this.errNumberNotIn;
	 }
	
	/**
	 * @param errNumberNotIn string 
	 */
	 setErrNumberNotIn(errNumberNotIn) {
	 	this.errNumberNotIn = errNumberNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEstimatedEffortLessThan() {
	 	return this.estimatedEffortLessThan;
	 }
	
	/**
	 * @param estimatedEffortLessThan int 
	 */
	 setEstimatedEffortLessThan(estimatedEffortLessThan) {
	 	this.estimatedEffortLessThan = estimatedEffortLessThan;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEstimatedEffortGreaterThan() {
	 	return this.estimatedEffortGreaterThan;
	 }
	
	/**
	 * @param estimatedEffortGreaterThan int 
	 */
	 setEstimatedEffortGreaterThan(estimatedEffortGreaterThan) {
	 	this.estimatedEffortGreaterThan = estimatedEffortGreaterThan;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUrgencyLessThanOrEqual() {
	 	return this.urgencyLessThanOrEqual;
	 }
	
	/**
	 * @param urgencyLessThanOrEqual int 
	 */
	 setUrgencyLessThanOrEqual(urgencyLessThanOrEqual) {
	 	this.urgencyLessThanOrEqual = urgencyLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUrgencyGreaterThanOrEqual() {
	 	return this.urgencyGreaterThanOrEqual;
	 }
	
	/**
	 * @param urgencyGreaterThanOrEqual int 
	 */
	 setUrgencyGreaterThanOrEqual(urgencyGreaterThanOrEqual) {
	 	this.urgencyGreaterThanOrEqual = urgencyGreaterThanOrEqual;
	 }
}
module.exports.BatchJobBaseFilter = BatchJobBaseFilter;

/**
 *
 */
class BatchJobFilter extends BatchJobBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBatchJobFilter';
	}
}
module.exports.BatchJobFilter = BatchJobFilter;

/**
 *
 */
class YouTubeApiCaptionDistributionInfo extends kaltura.BaseObject{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYouTubeApiCaptionDistributionInfo';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string 
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLabel() {
	 	return this.label;
	 }
	
	/**
	 * @param label string 
	 */
	 setLabel(label) {
	 	this.label = label;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFilePath() {
	 	return this.filePath;
	 }
	
	/**
	 * @param filePath string 
	 */
	 setFilePath(filePath) {
	 	this.filePath = filePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemoteId() {
	 	return this.remoteId;
	 }
	
	/**
	 * @param remoteId string 
	 */
	 setRemoteId(remoteId) {
	 	this.remoteId = remoteId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action int 
	 */
	 setAction(action) {
	 	this.action = action;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * @param version string 
	 */
	 setVersion(version) {
	 	this.version = version;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.YouTubeApiCaptionDistributionInfo = YouTubeApiCaptionDistributionInfo;

/**
 *
 */
class AccessControlBlockAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlBlockAction';
	}
}
module.exports.AccessControlBlockAction = AccessControlBlockAction;

/**
 *
 */
class AccessControlLimitDeliveryProfilesAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlLimitDeliveryProfilesAction';
	}
	
	/**
	 * Comma separated list of delivery profile ids
	 * @return string
	 */
	 getDeliveryProfileIds() {
	 	return this.deliveryProfileIds;
	 }
	
	/**
	 * @param deliveryProfileIds string Comma separated list of delivery profile ids
	 */
	 setDeliveryProfileIds(deliveryProfileIds) {
	 	this.deliveryProfileIds = deliveryProfileIds;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsBlockedList() {
	 	return this.isBlockedList;
	 }
	
	/**
	 * @param isBlockedList bool 
	 */
	 setIsBlockedList(isBlockedList) {
	 	this.isBlockedList = isBlockedList;
	 }
}
module.exports.AccessControlLimitDeliveryProfilesAction = AccessControlLimitDeliveryProfilesAction;

/**
 *
 */
class AccessControlLimitFlavorsAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlLimitFlavorsAction';
	}
	
	/**
	 * Comma separated list of flavor ids
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * @param flavorParamsIds string Comma separated list of flavor ids
	 */
	 setFlavorParamsIds(flavorParamsIds) {
	 	this.flavorParamsIds = flavorParamsIds;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsBlockedList() {
	 	return this.isBlockedList;
	 }
	
	/**
	 * @param isBlockedList bool 
	 */
	 setIsBlockedList(isBlockedList) {
	 	this.isBlockedList = isBlockedList;
	 }
}
module.exports.AccessControlLimitFlavorsAction = AccessControlLimitFlavorsAction;

/**
 *
 */
class AccessControlLimitThumbnailCaptureAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlLimitThumbnailCaptureAction';
	}
}
module.exports.AccessControlLimitThumbnailCaptureAction = AccessControlLimitThumbnailCaptureAction;

/**
 *
 */
class AccessControlListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.AccessControlListResponse = AccessControlListResponse;

/**
 *
 */
class AccessControlModifyRequestHostRegexAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlModifyRequestHostRegexAction';
	}
	
	/**
	 * Request host regex pattern
	 * @return string
	 */
	 getPattern() {
	 	return this.pattern;
	 }
	
	/**
	 * @param pattern string Request host regex pattern
	 */
	 setPattern(pattern) {
	 	this.pattern = pattern;
	 }
	
	/**
	 * Request host regex replacment
	 * @return string
	 */
	 getReplacement() {
	 	return this.replacement;
	 }
	
	/**
	 * @param replacement string Request host regex replacment
	 */
	 setReplacement(replacement) {
	 	this.replacement = replacement;
	 }
	
	/**
	 * serverNodeId to generate replacment host from
	 * @return int
	 */
	 getReplacmenServerNodeId() {
	 	return this.replacmenServerNodeId;
	 }
	
	/**
	 * @param replacmenServerNodeId int serverNodeId to generate replacment host from
	 */
	 setReplacmenServerNodeId(replacmenServerNodeId) {
	 	this.replacmenServerNodeId = replacmenServerNodeId;
	 }
}
module.exports.AccessControlModifyRequestHostRegexAction = AccessControlModifyRequestHostRegexAction;

/**
 *
 */
class AccessControlPreviewAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlPreviewAction';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getLimit() {
	 	return this.limit;
	 }
	
	/**
	 * @param limit int 
	 */
	 setLimit(limit) {
	 	this.limit = limit;
	 }
}
module.exports.AccessControlPreviewAction = AccessControlPreviewAction;

/**
 *
 */
class AccessControlProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.AccessControlProfileListResponse = AccessControlProfileListResponse;

/**
 *
 */
class AccessControlServeRemoteEdgeServerAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlServeRemoteEdgeServerAction';
	}
	
	/**
	 * Comma separated list of edge servers playBack should be done from
	 * @return string
	 */
	 getEdgeServerIds() {
	 	return this.edgeServerIds;
	 }
	
	/**
	 * @param edgeServerIds string Comma separated list of edge servers playBack should be done from
	 */
	 setEdgeServerIds(edgeServerIds) {
	 	this.edgeServerIds = edgeServerIds;
	 }
}
module.exports.AccessControlServeRemoteEdgeServerAction = AccessControlServeRemoteEdgeServerAction;

/**
 *
 */
class AdCuePoint extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAdCuePoint';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getProtocolType() {
	 	return this.protocolType;
	 }
	
	/**
	 * @param protocolType string 
	 */
	 setProtocolType(protocolType) {
	 	this.protocolType = protocolType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceUrl() {
	 	return this.sourceUrl;
	 }
	
	/**
	 * @param sourceUrl string 
	 */
	 setSourceUrl(sourceUrl) {
	 	this.sourceUrl = sourceUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAdType() {
	 	return this.adType;
	 }
	
	/**
	 * @param adType string 
	 */
	 setAdType(adType) {
	 	this.adType = adType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * @param title string 
	 */
	 setTitle(title) {
	 	this.title = title;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndTime() {
	 	return this.endTime;
	 }
	
	/**
	 * @param endTime int 
	 */
	 setEndTime(endTime) {
	 	this.endTime = endTime;
	 }
	
	/**
	 * Duration in milliseconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration int Duration in milliseconds
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
}
module.exports.AdCuePoint = AdCuePoint;

/**
 *
 */
class AdminUser extends User{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAdminUser';
	}
}
module.exports.AdminUser = AdminUser;

/**
 *
 */
class AmazonS3StorageProfile extends StorageProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAmazonS3StorageProfile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFilesPermissionInS3() {
	 	return this.filesPermissionInS3;
	 }
	
	/**
	 * @param filesPermissionInS3 string 
	 */
	 setFilesPermissionInS3(filesPermissionInS3) {
	 	this.filesPermissionInS3 = filesPermissionInS3;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getS3Region() {
	 	return this.s3Region;
	 }
	
	/**
	 * @param s3Region string 
	 */
	 setS3Region(s3Region) {
	 	this.s3Region = s3Region;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSseType() {
	 	return this.sseType;
	 }
	
	/**
	 * @param sseType string 
	 */
	 setSseType(sseType) {
	 	this.sseType = sseType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSseKmsKeyId() {
	 	return this.sseKmsKeyId;
	 }
	
	/**
	 * @param sseKmsKeyId string 
	 */
	 setSseKmsKeyId(sseKmsKeyId) {
	 	this.sseKmsKeyId = sseKmsKeyId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSignatureType() {
	 	return this.signatureType;
	 }
	
	/**
	 * @param signatureType string 
	 */
	 setSignatureType(signatureType) {
	 	this.signatureType = signatureType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEndPoint() {
	 	return this.endPoint;
	 }
	
	/**
	 * @param endPoint string 
	 */
	 setEndPoint(endPoint) {
	 	this.endPoint = endPoint;
	 }
}
module.exports.AmazonS3StorageProfile = AmazonS3StorageProfile;

/**
 *
 */
class AnnotationListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnotationListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.AnnotationListResponse = AnnotationListResponse;

/**
 *
 */
class AnswerCuePoint extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnswerCuePoint';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getParentId() {
	 	return this.parentId;
	 }
	
	/**
	 * @param parentId string 
	 */
	 setParentId(parentId) {
	 	this.parentId = parentId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getQuizUserEntryId() {
	 	return this.quizUserEntryId;
	 }
	
	/**
	 * @param quizUserEntryId string 
	 */
	 setQuizUserEntryId(quizUserEntryId) {
	 	this.quizUserEntryId = quizUserEntryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAnswerKey() {
	 	return this.answerKey;
	 }
	
	/**
	 * @param answerKey string 
	 */
	 setAnswerKey(answerKey) {
	 	this.answerKey = answerKey;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsCorrect() {
	 	return this.isCorrect;
	 }
	
	/**
	 * Array of string
	 * @return array
	 */
	 getCorrectAnswerKeys() {
	 	return this.correctAnswerKeys;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getExplanation() {
	 	return this.explanation;
	 }
}
module.exports.AnswerCuePoint = AnswerCuePoint;

/**
 *
 */
class ApiActionPermissionItem extends PermissionItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiActionPermissionItem';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getService() {
	 	return this.service;
	 }
	
	/**
	 * @param service string 
	 */
	 setService(service) {
	 	this.service = service;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string 
	 */
	 setAction(action) {
	 	this.action = action;
	 }
}
module.exports.ApiActionPermissionItem = ApiActionPermissionItem;

/**
 *
 */
class ApiParameterPermissionItem extends PermissionItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaApiParameterPermissionItem';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getObject() {
	 	return this.object;
	 }
	
	/**
	 * @param object string 
	 */
	 setObject(object) {
	 	this.object = object;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParameter() {
	 	return this.parameter;
	 }
	
	/**
	 * @param parameter string 
	 */
	 setParameter(parameter) {
	 	this.parameter = parameter;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAction() {
	 	return this.action;
	 }
	
	/**
	 * @param action string 
	 */
	 setAction(action) {
	 	this.action = action;
	 }
}
module.exports.ApiParameterPermissionItem = ApiParameterPermissionItem;

/**
 *
 */
class AppTokenBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAppTokenBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.AppTokenBaseFilter = AppTokenBaseFilter;

/**
 *
 */
class AppTokenListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAppTokenListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.AppTokenListResponse = AppTokenListResponse;

/**
 *
 */
class AssetDistributionPropertyCondition extends AssetDistributionCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetDistributionPropertyCondition';
	}
	
	/**
	 * The property name to look for, this will match to a getter on the asset object.
 * Should be camelCase naming convention (defining "myPropertyName" will look for getMyPropertyName())
	 * @return string
	 */
	 getPropertyName() {
	 	return this.propertyName;
	 }
	
	/**
	 * @param propertyName string The property name to look for, this will match to a getter on the asset object.
 * Should be camelCase naming convention (defining "myPropertyName" will look for getMyPropertyName())
	 */
	 setPropertyName(propertyName) {
	 	this.propertyName = propertyName;
	 }
	
	/**
	 * The value to compare
	 * @return string
	 */
	 getPropertyValue() {
	 	return this.propertyValue;
	 }
	
	/**
	 * @param propertyValue string The value to compare
	 */
	 setPropertyValue(propertyValue) {
	 	this.propertyValue = propertyValue;
	 }
}
module.exports.AssetDistributionPropertyCondition = AssetDistributionPropertyCondition;

/**
 *
 */
class AssetParamsOutput extends AssetParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetParamsOutput';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getAssetParamsId() {
	 	return this.assetParamsId;
	 }
	
	/**
	 * @param assetParamsId int 
	 */
	 setAssetParamsId(assetParamsId) {
	 	this.assetParamsId = assetParamsId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetParamsVersion() {
	 	return this.assetParamsVersion;
	 }
	
	/**
	 * @param assetParamsVersion string 
	 */
	 setAssetParamsVersion(assetParamsVersion) {
	 	this.assetParamsVersion = assetParamsVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetVersion() {
	 	return this.assetVersion;
	 }
	
	/**
	 * @param assetVersion string 
	 */
	 setAssetVersion(assetVersion) {
	 	this.assetVersion = assetVersion;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyBehavior() {
	 	return this.readyBehavior;
	 }
	
	/**
	 * @param readyBehavior int 
	 */
	 setReadyBehavior(readyBehavior) {
	 	this.readyBehavior = readyBehavior;
	 }
	
	/**
	 * The container format of the Flavor Params
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string The container format of the Flavor Params
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
}
module.exports.AssetParamsOutput = AssetParamsOutput;

/**
 *
 */
class AssetPropertiesCompareCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetPropertiesCompareCondition';
	}
	
	/**
	 * Array of key/value objects that holds the property and the value to find and compare on an asset object
	 * @return array
	 */
	 getProperties() {
	 	return this.properties;
	 }
	
	/**
	 * @param properties array Array of key/value objects that holds the property and the value to find and compare on an asset object
	 */
	 setProperties(properties) {
	 	this.properties = properties;
	 }
}
module.exports.AssetPropertiesCompareCondition = AssetPropertiesCompareCondition;

/**
 *
 */
class AssetsParamsResourceContainers extends Resource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetsParamsResourceContainers';
	}
	
	/**
	 * Array of resources associated with asset params ids
	 * @return array
	 */
	 getResources() {
	 	return this.resources;
	 }
	
	/**
	 * @param resources array Array of resources associated with asset params ids
	 */
	 setResources(resources) {
	 	this.resources = resources;
	 }
}
module.exports.AssetsParamsResourceContainers = AssetsParamsResourceContainers;

/**
 *
 */
class AttachmentAssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAttachmentAssetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.AttachmentAssetListResponse = AttachmentAssetListResponse;

/**
 *
 */
class AttributeCondition extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.AttributeCondition = AttributeCondition;

/**
 *
 */
class AuthenticatedCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAuthenticatedCondition';
	}
	
	/**
	 * The privelege needed to remove the restriction
	 * @return array
	 */
	 getPrivileges() {
	 	return this.privileges;
	 }
	
	/**
	 * @param privileges array The privelege needed to remove the restriction
	 */
	 setPrivileges(privileges) {
	 	this.privileges = privileges;
	 }
}
module.exports.AuthenticatedCondition = AuthenticatedCondition;

/**
 *
 */
class BaseEntryCloneOptionComponent extends BaseEntryCloneOptionItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryCloneOptionComponent';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getItemType() {
	 	return this.itemType;
	 }
	
	/**
	 * @param itemType string 
	 */
	 setItemType(itemType) {
	 	this.itemType = itemType;
	 }
	
	/**
	 * condition rule (include/exclude)
	 * @return string
	 */
	 getRule() {
	 	return this.rule;
	 }
	
	/**
	 * @param rule string condition rule (include/exclude)
	 */
	 setRule(rule) {
	 	this.rule = rule;
	 }
}
module.exports.BaseEntryCloneOptionComponent = BaseEntryCloneOptionComponent;

/**
 *
 */
class BaseEntryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.BaseEntryListResponse = BaseEntryListResponse;

/**
 *
 */
class BaseSyndicationFeedBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSyndicationFeedBaseFilter';
	}
}
module.exports.BaseSyndicationFeedBaseFilter = BaseSyndicationFeedBaseFilter;

/**
 *
 */
class BaseSyndicationFeedListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSyndicationFeedListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.BaseSyndicationFeedListResponse = BaseSyndicationFeedListResponse;

/**
 *
 */
class BulkDownloadJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkDownloadJobData';
	}
	
	/**
	 * Comma separated list of entry ids
	 * @return string
	 */
	 getEntryIds() {
	 	return this.entryIds;
	 }
	
	/**
	 * @param entryIds string Comma separated list of entry ids
	 */
	 setEntryIds(entryIds) {
	 	this.entryIds = entryIds;
	 }
	
	/**
	 * Flavor params id to use for conversion
	 * @return int
	 */
	 getFlavorParamsId() {
	 	return this.flavorParamsId;
	 }
	
	/**
	 * @param flavorParamsId int Flavor params id to use for conversion
	 */
	 setFlavorParamsId(flavorParamsId) {
	 	this.flavorParamsId = flavorParamsId;
	 }
	
	/**
	 * The id of the requesting user
	 * @return string
	 */
	 getPuserId() {
	 	return this.puserId;
	 }
	
	/**
	 * @param puserId string The id of the requesting user
	 */
	 setPuserId(puserId) {
	 	this.puserId = puserId;
	 }
}
module.exports.BulkDownloadJobData = BulkDownloadJobData;

/**
 *
 */
class BulkServiceFilterData extends BulkServiceData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkServiceFilterData';
	}
	
	/**
	 * Filter for extracting the objects list to upload
	 * @return Filter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter Filter Filter for extracting the objects list to upload
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * Template object for new object creation
	 * @return ObjectBase
	 */
	 getTemplateObject() {
	 	return this.templateObject;
	 }
	
	/**
	 * @param templateObject ObjectBase Template object for new object creation
	 */
	 setTemplateObject(templateObject) {
	 	this.templateObject = templateObject;
	 }
}
module.exports.BulkServiceFilterData = BulkServiceFilterData;

/**
 *
 */
class BulkUploadBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getUploadedOnGreaterThanOrEqual() {
	 	return this.uploadedOnGreaterThanOrEqual;
	 }
	
	/**
	 * @param uploadedOnGreaterThanOrEqual int 
	 */
	 setUploadedOnGreaterThanOrEqual(uploadedOnGreaterThanOrEqual) {
	 	this.uploadedOnGreaterThanOrEqual = uploadedOnGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUploadedOnLessThanOrEqual() {
	 	return this.uploadedOnLessThanOrEqual;
	 }
	
	/**
	 * @param uploadedOnLessThanOrEqual int 
	 */
	 setUploadedOnLessThanOrEqual(uploadedOnLessThanOrEqual) {
	 	this.uploadedOnLessThanOrEqual = uploadedOnLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUploadedOnEqual() {
	 	return this.uploadedOnEqual;
	 }
	
	/**
	 * @param uploadedOnEqual int 
	 */
	 setUploadedOnEqual(uploadedOnEqual) {
	 	this.uploadedOnEqual = uploadedOnEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBulkUploadObjectTypeEqual() {
	 	return this.bulkUploadObjectTypeEqual;
	 }
	
	/**
	 * @param bulkUploadObjectTypeEqual string 
	 */
	 setBulkUploadObjectTypeEqual(bulkUploadObjectTypeEqual) {
	 	this.bulkUploadObjectTypeEqual = bulkUploadObjectTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBulkUploadObjectTypeIn() {
	 	return this.bulkUploadObjectTypeIn;
	 }
	
	/**
	 * @param bulkUploadObjectTypeIn string 
	 */
	 setBulkUploadObjectTypeIn(bulkUploadObjectTypeIn) {
	 	this.bulkUploadObjectTypeIn = bulkUploadObjectTypeIn;
	 }
}
module.exports.BulkUploadBaseFilter = BulkUploadBaseFilter;

/**
 *
 */
class BulkUploadCategoryData extends BulkUploadObjectData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadCategoryData';
	}
}
module.exports.BulkUploadCategoryData = BulkUploadCategoryData;

/**
 *
 */
class BulkUploadCategoryEntryData extends BulkUploadObjectData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadCategoryEntryData';
	}
}
module.exports.BulkUploadCategoryEntryData = BulkUploadCategoryEntryData;

/**
 *
 */
class BulkUploadCategoryUserData extends BulkUploadObjectData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadCategoryUserData';
	}
}
module.exports.BulkUploadCategoryUserData = BulkUploadCategoryUserData;

/**
 *
 */
class BulkUploadEntryData extends BulkUploadObjectData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadEntryData';
	}
	
	/**
	 * Selected profile id for all bulk entries
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * @param conversionProfileId int Selected profile id for all bulk entries
	 */
	 setConversionProfileId(conversionProfileId) {
	 	this.conversionProfileId = conversionProfileId;
	 }
}
module.exports.BulkUploadEntryData = BulkUploadEntryData;

/**
 *
 */
class BulkUploadJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * The screen name of the user
	 * @return string
	 */
	 getUploadedBy() {
	 	return this.uploadedBy;
	 }
	
	/**
	 * Selected profile id for all bulk entries
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * Created by the API
	 * @return string
	 */
	 getResultsFileLocalPath() {
	 	return this.resultsFileLocalPath;
	 }
	
	/**
	 * Created by the API
	 * @return string
	 */
	 getResultsFileUrl() {
	 	return this.resultsFileUrl;
	 }
	
	/**
	 * Number of created entries
	 * @return int
	 */
	 getNumOfEntries() {
	 	return this.numOfEntries;
	 }
	
	/**
	 * Number of created objects
	 * @return int
	 */
	 getNumOfObjects() {
	 	return this.numOfObjects;
	 }
	
	/**
	 * The bulk upload file path
	 * @return string
	 */
	 getFilePath() {
	 	return this.filePath;
	 }
	
	/**
	 * Type of object for bulk upload
	 * @return string
	 */
	 getBulkUploadObjectType() {
	 	return this.bulkUploadObjectType;
	 }
	
	/**
	 * Friendly name of the file, used to be recognized later in the logs
	 * @return string
	 */
	 getFileName() {
	 	return this.fileName;
	 }
	
	/**
	 * @param fileName string Friendly name of the file, used to be recognized later in the logs
	 */
	 setFileName(fileName) {
	 	this.fileName = fileName;
	 }
	
	/**
	 * Data pertaining to the objects being uploaded
	 * @return BulkUploadObjectData
	 */
	 getObjectData() {
	 	return this.objectData;
	 }
	
	/**
	 * Type of bulk upload
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * Recipients of the email for bulk upload success/failure
	 * @return string
	 */
	 getEmailRecipients() {
	 	return this.emailRecipients;
	 }
	
	/**
	 * @param emailRecipients string Recipients of the email for bulk upload success/failure
	 */
	 setEmailRecipients(emailRecipients) {
	 	this.emailRecipients = emailRecipients;
	 }
	
	/**
	 * Number of objects that finished on error status
	 * @return int
	 */
	 getNumOfErrorObjects() {
	 	return this.numOfErrorObjects;
	 }
	
	/**
	 * @param numOfErrorObjects int Number of objects that finished on error status
	 */
	 setNumOfErrorObjects(numOfErrorObjects) {
	 	this.numOfErrorObjects = numOfErrorObjects;
	 }
}
module.exports.BulkUploadJobData = BulkUploadJobData;

/**
 *
 */
class BulkUploadListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.BulkUploadListResponse = BulkUploadListResponse;

/**
 *
 */
class BulkUploadResultCategory extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultCategory';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getRelativePath() {
	 	return this.relativePath;
	 }
	
	/**
	 * @param relativePath string 
	 */
	 setRelativePath(relativePath) {
	 	this.relativePath = relativePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string 
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAppearInList() {
	 	return this.appearInList;
	 }
	
	/**
	 * @param appearInList int 
	 */
	 setAppearInList(appearInList) {
	 	this.appearInList = appearInList;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPrivacy() {
	 	return this.privacy;
	 }
	
	/**
	 * @param privacy int 
	 */
	 setPrivacy(privacy) {
	 	this.privacy = privacy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInheritanceType() {
	 	return this.inheritanceType;
	 }
	
	/**
	 * @param inheritanceType int 
	 */
	 setInheritanceType(inheritanceType) {
	 	this.inheritanceType = inheritanceType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUserJoinPolicy() {
	 	return this.userJoinPolicy;
	 }
	
	/**
	 * @param userJoinPolicy int 
	 */
	 setUserJoinPolicy(userJoinPolicy) {
	 	this.userJoinPolicy = userJoinPolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDefaultPermissionLevel() {
	 	return this.defaultPermissionLevel;
	 }
	
	/**
	 * @param defaultPermissionLevel int 
	 */
	 setDefaultPermissionLevel(defaultPermissionLevel) {
	 	this.defaultPermissionLevel = defaultPermissionLevel;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOwner() {
	 	return this.owner;
	 }
	
	/**
	 * @param owner string 
	 */
	 setOwner(owner) {
	 	this.owner = owner;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getContributionPolicy() {
	 	return this.contributionPolicy;
	 }
	
	/**
	 * @param contributionPolicy int 
	 */
	 setContributionPolicy(contributionPolicy) {
	 	this.contributionPolicy = contributionPolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValue() {
	 	return this.partnerSortValue;
	 }
	
	/**
	 * @param partnerSortValue int 
	 */
	 setPartnerSortValue(partnerSortValue) {
	 	this.partnerSortValue = partnerSortValue;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getModeration() {
	 	return this.moderation;
	 }
	
	/**
	 * @param moderation bool 
	 */
	 setModeration(moderation) {
	 	this.moderation = moderation;
	 }
}
module.exports.BulkUploadResultCategory = BulkUploadResultCategory;

/**
 *
 */
class BulkUploadResultCategoryEntry extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultCategoryEntry';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryId() {
	 	return this.categoryId;
	 }
	
	/**
	 * @param categoryId int 
	 */
	 setCategoryId(categoryId) {
	 	this.categoryId = categoryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
}
module.exports.BulkUploadResultCategoryEntry = BulkUploadResultCategoryEntry;

/**
 *
 */
class BulkUploadResultCategoryUser extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultCategoryUser';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryId() {
	 	return this.categoryId;
	 }
	
	/**
	 * @param categoryId int 
	 */
	 setCategoryId(categoryId) {
	 	this.categoryId = categoryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryReferenceId() {
	 	return this.categoryReferenceId;
	 }
	
	/**
	 * @param categoryReferenceId string 
	 */
	 setCategoryReferenceId(categoryReferenceId) {
	 	this.categoryReferenceId = categoryReferenceId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPermissionLevel() {
	 	return this.permissionLevel;
	 }
	
	/**
	 * @param permissionLevel int 
	 */
	 setPermissionLevel(permissionLevel) {
	 	this.permissionLevel = permissionLevel;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdateMethod() {
	 	return this.updateMethod;
	 }
	
	/**
	 * @param updateMethod int 
	 */
	 setUpdateMethod(updateMethod) {
	 	this.updateMethod = updateMethod;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getRequiredObjectStatus() {
	 	return this.requiredObjectStatus;
	 }
	
	/**
	 * @param requiredObjectStatus int 
	 */
	 setRequiredObjectStatus(requiredObjectStatus) {
	 	this.requiredObjectStatus = requiredObjectStatus;
	 }
}
module.exports.BulkUploadResultCategoryUser = BulkUploadResultCategoryUser;

/**
 *
 */
class BulkUploadResultEntry extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultEntry';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * @param title string 
	 */
	 setTitle(title) {
	 	this.title = title;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string 
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentType() {
	 	return this.contentType;
	 }
	
	/**
	 * @param contentType string 
	 */
	 setContentType(contentType) {
	 	this.contentType = contentType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * @param conversionProfileId int 
	 */
	 setConversionProfileId(conversionProfileId) {
	 	this.conversionProfileId = conversionProfileId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAccessControlProfileId() {
	 	return this.accessControlProfileId;
	 }
	
	/**
	 * @param accessControlProfileId int 
	 */
	 setAccessControlProfileId(accessControlProfileId) {
	 	this.accessControlProfileId = accessControlProfileId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategory() {
	 	return this.category;
	 }
	
	/**
	 * @param category string 
	 */
	 setCategory(category) {
	 	this.category = category;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getScheduleStartDate() {
	 	return this.scheduleStartDate;
	 }
	
	/**
	 * @param scheduleStartDate int 
	 */
	 setScheduleStartDate(scheduleStartDate) {
	 	this.scheduleStartDate = scheduleStartDate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getScheduleEndDate() {
	 	return this.scheduleEndDate;
	 }
	
	/**
	 * @param scheduleEndDate int 
	 */
	 setScheduleEndDate(scheduleEndDate) {
	 	this.scheduleEndDate = scheduleEndDate;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEntryStatus() {
	 	return this.entryStatus;
	 }
	
	/**
	 * @param entryStatus int 
	 */
	 setEntryStatus(entryStatus) {
	 	this.entryStatus = entryStatus;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbnailUrl() {
	 	return this.thumbnailUrl;
	 }
	
	/**
	 * @param thumbnailUrl string 
	 */
	 setThumbnailUrl(thumbnailUrl) {
	 	this.thumbnailUrl = thumbnailUrl;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getThumbnailSaved() {
	 	return this.thumbnailSaved;
	 }
	
	/**
	 * @param thumbnailSaved bool 
	 */
	 setThumbnailSaved(thumbnailSaved) {
	 	this.thumbnailSaved = thumbnailSaved;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSshPrivateKey() {
	 	return this.sshPrivateKey;
	 }
	
	/**
	 * @param sshPrivateKey string 
	 */
	 setSshPrivateKey(sshPrivateKey) {
	 	this.sshPrivateKey = sshPrivateKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSshPublicKey() {
	 	return this.sshPublicKey;
	 }
	
	/**
	 * @param sshPublicKey string 
	 */
	 setSshPublicKey(sshPublicKey) {
	 	this.sshPublicKey = sshPublicKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSshKeyPassphrase() {
	 	return this.sshKeyPassphrase;
	 }
	
	/**
	 * @param sshKeyPassphrase string 
	 */
	 setSshKeyPassphrase(sshKeyPassphrase) {
	 	this.sshKeyPassphrase = sshKeyPassphrase;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreatorId() {
	 	return this.creatorId;
	 }
	
	/**
	 * @param creatorId string 
	 */
	 setCreatorId(creatorId) {
	 	this.creatorId = creatorId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntitledUsersEdit() {
	 	return this.entitledUsersEdit;
	 }
	
	/**
	 * @param entitledUsersEdit string 
	 */
	 setEntitledUsersEdit(entitledUsersEdit) {
	 	this.entitledUsersEdit = entitledUsersEdit;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntitledUsersPublish() {
	 	return this.entitledUsersPublish;
	 }
	
	/**
	 * @param entitledUsersPublish string 
	 */
	 setEntitledUsersPublish(entitledUsersPublish) {
	 	this.entitledUsersPublish = entitledUsersPublish;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOwnerId() {
	 	return this.ownerId;
	 }
	
	/**
	 * @param ownerId string 
	 */
	 setOwnerId(ownerId) {
	 	this.ownerId = ownerId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string 
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTemplateEntryId() {
	 	return this.templateEntryId;
	 }
	
	/**
	 * @param templateEntryId string 
	 */
	 setTemplateEntryId(templateEntryId) {
	 	this.templateEntryId = templateEntryId;
	 }
}
module.exports.BulkUploadResultEntry = BulkUploadResultEntry;

/**
 *
 */
class BulkUploadResultScheduleEvent extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultScheduleEvent';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceId() {
	 	return this.referenceId;
	 }
	
	/**
	 * @param referenceId string 
	 */
	 setReferenceId(referenceId) {
	 	this.referenceId = referenceId;
	 }
}
module.exports.BulkUploadResultScheduleEvent = BulkUploadResultScheduleEvent;

/**
 *
 */
class BulkUploadResultScheduleResource extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultScheduleResource';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getResourceId() {
	 	return this.resourceId;
	 }
	
	/**
	 * @param resourceId string 
	 */
	 setResourceId(resourceId) {
	 	this.resourceId = resourceId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getName() {
	 	return this.name;
	 }
	
	/**
	 * @param name string 
	 */
	 setName(name) {
	 	this.name = name;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string 
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentType() {
	 	return this.parentType;
	 }
	
	/**
	 * @param parentType string 
	 */
	 setParentType(parentType) {
	 	this.parentType = parentType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentSystemName() {
	 	return this.parentSystemName;
	 }
	
	/**
	 * @param parentSystemName string 
	 */
	 setParentSystemName(parentSystemName) {
	 	this.parentSystemName = parentSystemName;
	 }
}
module.exports.BulkUploadResultScheduleResource = BulkUploadResultScheduleResource;

/**
 *
 */
class BulkUploadResultUser extends BulkUploadResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadResultUser';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getScreenName() {
	 	return this.screenName;
	 }
	
	/**
	 * @param screenName string 
	 */
	 setScreenName(screenName) {
	 	this.screenName = screenName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEmail() {
	 	return this.email;
	 }
	
	/**
	 * @param email string 
	 */
	 setEmail(email) {
	 	this.email = email;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTags() {
	 	return this.tags;
	 }
	
	/**
	 * @param tags string 
	 */
	 setTags(tags) {
	 	this.tags = tags;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDateOfBirth() {
	 	return this.dateOfBirth;
	 }
	
	/**
	 * @param dateOfBirth int 
	 */
	 setDateOfBirth(dateOfBirth) {
	 	this.dateOfBirth = dateOfBirth;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCountry() {
	 	return this.country;
	 }
	
	/**
	 * @param country string 
	 */
	 setCountry(country) {
	 	this.country = country;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * @param state string 
	 */
	 setState(state) {
	 	this.state = state;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCity() {
	 	return this.city;
	 }
	
	/**
	 * @param city string 
	 */
	 setCity(city) {
	 	this.city = city;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getZip() {
	 	return this.zip;
	 }
	
	/**
	 * @param zip string 
	 */
	 setZip(zip) {
	 	this.zip = zip;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getGender() {
	 	return this.gender;
	 }
	
	/**
	 * @param gender int 
	 */
	 setGender(gender) {
	 	this.gender = gender;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFirstName() {
	 	return this.firstName;
	 }
	
	/**
	 * @param firstName string 
	 */
	 setFirstName(firstName) {
	 	this.firstName = firstName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLastName() {
	 	return this.lastName;
	 }
	
	/**
	 * @param lastName string 
	 */
	 setLastName(lastName) {
	 	this.lastName = lastName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGroup() {
	 	return this.group;
	 }
	
	/**
	 * @param group string 
	 */
	 setGroup(group) {
	 	this.group = group;
	 }
}
module.exports.BulkUploadResultUser = BulkUploadResultUser;

/**
 *
 */
class BulkUploadUserData extends BulkUploadObjectData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadUserData';
	}
}
module.exports.BulkUploadUserData = BulkUploadUserData;

/**
 *
 */
class CameraScheduleResource extends ScheduleResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCameraScheduleResource';
	}
	
	/**
	 * URL of the stream
	 * @return string
	 */
	 getStreamUrl() {
	 	return this.streamUrl;
	 }
	
	/**
	 * @param streamUrl string URL of the stream
	 */
	 setStreamUrl(streamUrl) {
	 	this.streamUrl = streamUrl;
	 }
}
module.exports.CameraScheduleResource = CameraScheduleResource;

/**
 *
 */
class CaptionAssetItemListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionAssetItemListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CaptionAssetItemListResponse = CaptionAssetItemListResponse;

/**
 *
 */
class CaptionAssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionAssetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CaptionAssetListResponse = CaptionAssetListResponse;

/**
 *
 */
class CaptionParamsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptionParamsListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CaptionParamsListResponse = CaptionParamsListResponse;

/**
 *
 */
class CaptureThumbJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCaptureThumbJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileSyncLocalPath() {
	 	return this.srcFileSyncLocalPath;
	 }
	
	/**
	 * @param srcFileSyncLocalPath string 
	 */
	 setSrcFileSyncLocalPath(srcFileSyncLocalPath) {
	 	this.srcFileSyncLocalPath = srcFileSyncLocalPath;
	 }
	
	/**
	 * The translated path as used by the scheduler
	 * @return string
	 */
	 getActualSrcFileSyncLocalPath() {
	 	return this.actualSrcFileSyncLocalPath;
	 }
	
	/**
	 * @param actualSrcFileSyncLocalPath string The translated path as used by the scheduler
	 */
	 setActualSrcFileSyncLocalPath(actualSrcFileSyncLocalPath) {
	 	this.actualSrcFileSyncLocalPath = actualSrcFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileSyncRemoteUrl() {
	 	return this.srcFileSyncRemoteUrl;
	 }
	
	/**
	 * @param srcFileSyncRemoteUrl string 
	 */
	 setSrcFileSyncRemoteUrl(srcFileSyncRemoteUrl) {
	 	this.srcFileSyncRemoteUrl = srcFileSyncRemoteUrl;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getThumbParamsOutputId() {
	 	return this.thumbParamsOutputId;
	 }
	
	/**
	 * @param thumbParamsOutputId int 
	 */
	 setThumbParamsOutputId(thumbParamsOutputId) {
	 	this.thumbParamsOutputId = thumbParamsOutputId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbAssetId() {
	 	return this.thumbAssetId;
	 }
	
	/**
	 * @param thumbAssetId string 
	 */
	 setThumbAssetId(thumbAssetId) {
	 	this.thumbAssetId = thumbAssetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSrcAssetId() {
	 	return this.srcAssetId;
	 }
	
	/**
	 * @param srcAssetId string 
	 */
	 setSrcAssetId(srcAssetId) {
	 	this.srcAssetId = srcAssetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSrcAssetType() {
	 	return this.srcAssetType;
	 }
	
	/**
	 * @param srcAssetType string 
	 */
	 setSrcAssetType(srcAssetType) {
	 	this.srcAssetType = srcAssetType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbPath() {
	 	return this.thumbPath;
	 }
	
	/**
	 * @param thumbPath string 
	 */
	 setThumbPath(thumbPath) {
	 	this.thumbPath = thumbPath;
	 }
}
module.exports.CaptureThumbJobData = CaptureThumbJobData;

/**
 *
 */
class CategoryEntryAdvancedFilter extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryEntryAdvancedFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCategoriesMatchOr() {
	 	return this.categoriesMatchOr;
	 }
	
	/**
	 * @param categoriesMatchOr string 
	 */
	 setCategoriesMatchOr(categoriesMatchOr) {
	 	this.categoriesMatchOr = categoriesMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryEntryStatusIn() {
	 	return this.categoryEntryStatusIn;
	 }
	
	/**
	 * @param categoryEntryStatusIn string 
	 */
	 setCategoryEntryStatusIn(categoryEntryStatusIn) {
	 	this.categoryEntryStatusIn = categoryEntryStatusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string 
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryIdEqual() {
	 	return this.categoryIdEqual;
	 }
	
	/**
	 * @param categoryIdEqual int 
	 */
	 setCategoryIdEqual(categoryIdEqual) {
	 	this.categoryIdEqual = categoryIdEqual;
	 }
}
module.exports.CategoryEntryAdvancedFilter = CategoryEntryAdvancedFilter;

/**
 *
 */
class CategoryEntryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryEntryListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CategoryEntryListResponse = CategoryEntryListResponse;

/**
 *
 */
class CategoryIdentifier extends ObjectIdentifier{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryIdentifier';
	}
	
	/**
	 * Identifier of the object
	 * @return string
	 */
	 getIdentifier() {
	 	return this.identifier;
	 }
	
	/**
	 * @param identifier string Identifier of the object
	 */
	 setIdentifier(identifier) {
	 	this.identifier = identifier;
	 }
}
module.exports.CategoryIdentifier = CategoryIdentifier;

/**
 *
 */
class CategoryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CategoryListResponse = CategoryListResponse;

/**
 *
 */
class CategoryUserAdvancedFilter extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryUserAdvancedFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getMemberIdEq() {
	 	return this.memberIdEq;
	 }
	
	/**
	 * @param memberIdEq string 
	 */
	 setMemberIdEq(memberIdEq) {
	 	this.memberIdEq = memberIdEq;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMemberIdIn() {
	 	return this.memberIdIn;
	 }
	
	/**
	 * @param memberIdIn string 
	 */
	 setMemberIdIn(memberIdIn) {
	 	this.memberIdIn = memberIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMemberPermissionsMatchOr() {
	 	return this.memberPermissionsMatchOr;
	 }
	
	/**
	 * @param memberPermissionsMatchOr string 
	 */
	 setMemberPermissionsMatchOr(memberPermissionsMatchOr) {
	 	this.memberPermissionsMatchOr = memberPermissionsMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMemberPermissionsMatchAnd() {
	 	return this.memberPermissionsMatchAnd;
	 }
	
	/**
	 * @param memberPermissionsMatchAnd string 
	 */
	 setMemberPermissionsMatchAnd(memberPermissionsMatchAnd) {
	 	this.memberPermissionsMatchAnd = memberPermissionsMatchAnd;
	 }
}
module.exports.CategoryUserAdvancedFilter = CategoryUserAdvancedFilter;

/**
 *
 */
class CategoryUserListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryUserListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CategoryUserListResponse = CategoryUserListResponse;

/**
 *
 */
class CategoryUserProviderFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryUserProviderFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdateMethodEqual() {
	 	return this.updateMethodEqual;
	 }
	
	/**
	 * @param updateMethodEqual int 
	 */
	 setUpdateMethodEqual(updateMethodEqual) {
	 	this.updateMethodEqual = updateMethodEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUpdateMethodIn() {
	 	return this.updateMethodIn;
	 }
	
	/**
	 * @param updateMethodIn string 
	 */
	 setUpdateMethodIn(updateMethodIn) {
	 	this.updateMethodIn = updateMethodIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionNamesMatchAnd() {
	 	return this.permissionNamesMatchAnd;
	 }
	
	/**
	 * @param permissionNamesMatchAnd string 
	 */
	 setPermissionNamesMatchAnd(permissionNamesMatchAnd) {
	 	this.permissionNamesMatchAnd = permissionNamesMatchAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionNamesMatchOr() {
	 	return this.permissionNamesMatchOr;
	 }
	
	/**
	 * @param permissionNamesMatchOr string 
	 */
	 setPermissionNamesMatchOr(permissionNamesMatchOr) {
	 	this.permissionNamesMatchOr = permissionNamesMatchOr;
	 }
}
module.exports.CategoryUserProviderFilter = CategoryUserProviderFilter;

/**
 *
 */
class Cielo24JobProviderData extends IntegrationJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCielo24JobProviderData';
	}
	
	/**
	 * Entry ID
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string Entry ID
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * Flavor ID
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string Flavor ID
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * Caption formats
	 * @return string
	 */
	 getCaptionAssetFormats() {
	 	return this.captionAssetFormats;
	 }
	
	/**
	 * @param captionAssetFormats string Caption formats
	 */
	 setCaptionAssetFormats(captionAssetFormats) {
	 	this.captionAssetFormats = captionAssetFormats;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPriority() {
	 	return this.priority;
	 }
	
	/**
	 * @param priority string 
	 */
	 setPriority(priority) {
	 	this.priority = priority;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFidelity() {
	 	return this.fidelity;
	 }
	
	/**
	 * @param fidelity string 
	 */
	 setFidelity(fidelity) {
	 	this.fidelity = fidelity;
	 }
	
	/**
	 * Api key for service provider
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * Api key for service provider
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * Base url for service provider
	 * @return string
	 */
	 getBaseUrl() {
	 	return this.baseUrl;
	 }
	
	/**
	 * Transcript content language
	 * @return string
	 */
	 getSpokenLanguage() {
	 	return this.spokenLanguage;
	 }
	
	/**
	 * @param spokenLanguage string Transcript content language
	 */
	 setSpokenLanguage(spokenLanguage) {
	 	this.spokenLanguage = spokenLanguage;
	 }
	
	/**
	 * should replace remote media content
	 * @return bool
	 */
	 getReplaceMediaContent() {
	 	return this.replaceMediaContent;
	 }
	
	/**
	 * @param replaceMediaContent bool should replace remote media content
	 */
	 setReplaceMediaContent(replaceMediaContent) {
	 	this.replaceMediaContent = replaceMediaContent;
	 }
}
module.exports.Cielo24JobProviderData = Cielo24JobProviderData;

/**
 *
 */
class ClipAttributes extends OperationAttributes{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaClipAttributes';
	}
	
	/**
	 * Offset in milliseconds
	 * @return int
	 */
	 getOffset() {
	 	return this.offset;
	 }
	
	/**
	 * @param offset int Offset in milliseconds
	 */
	 setOffset(offset) {
	 	this.offset = offset;
	 }
	
	/**
	 * Duration in milliseconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration int Duration in milliseconds
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
}
module.exports.ClipAttributes = ClipAttributes;

/**
 *
 */
class CodeCuePoint extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCodeCuePoint';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string 
	 */
	 setCode(code) {
	 	this.code = code;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndTime() {
	 	return this.endTime;
	 }
	
	/**
	 * @param endTime int 
	 */
	 setEndTime(endTime) {
	 	this.endTime = endTime;
	 }
	
	/**
	 * Duration in milliseconds
	 * @return int
	 */
	 getDuration() {
	 	return this.duration;
	 }
}
module.exports.CodeCuePoint = CodeCuePoint;

/**
 *
 */
class CompareCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCompareCondition';
	}
	
	/**
	 * Value to evaluate against the field and operator
	 * @return IntegerValue
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value IntegerValue Value to evaluate against the field and operator
	 */
	 setValue(value) {
	 	this.value = value;
	 }
	
	/**
	 * Comparing operator
	 * @return string
	 */
	 getComparison() {
	 	return this.comparison;
	 }
	
	/**
	 * @param comparison string Comparing operator
	 */
	 setComparison(comparison) {
	 	this.comparison = comparison;
	 }
}
module.exports.CompareCondition = CompareCondition;

/**
 *
 */
class DataCenterContentResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDataCenterContentResource';
	}
}
module.exports.DataCenterContentResource = DataCenterContentResource;

/**
 *
 */
class ConcatAttributes extends OperationAttributes{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConcatAttributes';
	}
	
	/**
	 * The resource to be concatenated
	 * @return DataCenterContentResource
	 */
	 getResource() {
	 	return this.resource;
	 }
	
	/**
	 * @param resource DataCenterContentResource The resource to be concatenated
	 */
	 setResource(resource) {
	 	this.resource = resource;
	 }
}
module.exports.ConcatAttributes = ConcatAttributes;

/**
 *
 */
class ConcatJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConcatJobData';
	}
	
	/**
	 * Source files to be concatenated
	 * @return array
	 */
	 getSrcFiles() {
	 	return this.srcFiles;
	 }
	
	/**
	 * @param srcFiles array Source files to be concatenated
	 */
	 setSrcFiles(srcFiles) {
	 	this.srcFiles = srcFiles;
	 }
	
	/**
	 * Output file
	 * @return string
	 */
	 getDestFilePath() {
	 	return this.destFilePath;
	 }
	
	/**
	 * @param destFilePath string Output file
	 */
	 setDestFilePath(destFilePath) {
	 	this.destFilePath = destFilePath;
	 }
	
	/**
	 * Flavor asset to be ingested with the output
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string Flavor asset to be ingested with the output
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * Clipping offset in seconds
	 * @return float
	 */
	 getOffset() {
	 	return this.offset;
	 }
	
	/**
	 * @param offset float Clipping offset in seconds
	 */
	 setOffset(offset) {
	 	this.offset = offset;
	 }
	
	/**
	 * Clipping duration in seconds
	 * @return float
	 */
	 getDuration() {
	 	return this.duration;
	 }
	
	/**
	 * @param duration float Clipping duration in seconds
	 */
	 setDuration(duration) {
	 	this.duration = duration;
	 }
	
	/**
	 * duration of the concated video
	 * @return float
	 */
	 getConcatenatedDuration() {
	 	return this.concatenatedDuration;
	 }
	
	/**
	 * @param concatenatedDuration float duration of the concated video
	 */
	 setConcatenatedDuration(concatenatedDuration) {
	 	this.concatenatedDuration = concatenatedDuration;
	 }
}
module.exports.ConcatJobData = ConcatJobData;

/**
 *
 */
class ConfigurableDistributionJobProviderData extends DistributionJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurableDistributionJobProviderData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFieldValues() {
	 	return this.fieldValues;
	 }
	
	/**
	 * @param fieldValues string 
	 */
	 setFieldValues(fieldValues) {
	 	this.fieldValues = fieldValues;
	 }
}
module.exports.ConfigurableDistributionJobProviderData = ConfigurableDistributionJobProviderData;

/**
 *
 */
class ConfigurableDistributionProfile extends DistributionProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurableDistributionProfile';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getFieldConfigArray() {
	 	return this.fieldConfigArray;
	 }
	
	/**
	 * @param fieldConfigArray array 
	 */
	 setFieldConfigArray(fieldConfigArray) {
	 	this.fieldConfigArray = fieldConfigArray;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getItemXpathsToExtend() {
	 	return this.itemXpathsToExtend;
	 }
	
	/**
	 * @param itemXpathsToExtend array 
	 */
	 setItemXpathsToExtend(itemXpathsToExtend) {
	 	this.itemXpathsToExtend = itemXpathsToExtend;
	 }
	
	/**
	 * When checking custom XSLT conditions using the fieldConfigArray - address only categories associated with the entry via the categoryEntry object
	 * @return bool
	 */
	 getUseCategoryEntries() {
	 	return this.useCategoryEntries;
	 }
	
	/**
	 * @param useCategoryEntries bool When checking custom XSLT conditions using the fieldConfigArray - address only categories associated with the entry via the categoryEntry object
	 */
	 setUseCategoryEntries(useCategoryEntries) {
	 	this.useCategoryEntries = useCategoryEntries;
	 }
}
module.exports.ConfigurableDistributionProfile = ConfigurableDistributionProfile;

/**
 *
 */
class ContentDistributionSearchItem extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaContentDistributionSearchItem';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getNoDistributionProfiles() {
	 	return this.noDistributionProfiles;
	 }
	
	/**
	 * @param noDistributionProfiles bool 
	 */
	 setNoDistributionProfiles(noDistributionProfiles) {
	 	this.noDistributionProfiles = noDistributionProfiles;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDistributionProfileId() {
	 	return this.distributionProfileId;
	 }
	
	/**
	 * @param distributionProfileId int 
	 */
	 setDistributionProfileId(distributionProfileId) {
	 	this.distributionProfileId = distributionProfileId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDistributionSunStatus() {
	 	return this.distributionSunStatus;
	 }
	
	/**
	 * @param distributionSunStatus int 
	 */
	 setDistributionSunStatus(distributionSunStatus) {
	 	this.distributionSunStatus = distributionSunStatus;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEntryDistributionFlag() {
	 	return this.entryDistributionFlag;
	 }
	
	/**
	 * @param entryDistributionFlag int 
	 */
	 setEntryDistributionFlag(entryDistributionFlag) {
	 	this.entryDistributionFlag = entryDistributionFlag;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEntryDistributionStatus() {
	 	return this.entryDistributionStatus;
	 }
	
	/**
	 * @param entryDistributionStatus int 
	 */
	 setEntryDistributionStatus(entryDistributionStatus) {
	 	this.entryDistributionStatus = entryDistributionStatus;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getHasEntryDistributionValidationErrors() {
	 	return this.hasEntryDistributionValidationErrors;
	 }
	
	/**
	 * @param hasEntryDistributionValidationErrors bool 
	 */
	 setHasEntryDistributionValidationErrors(hasEntryDistributionValidationErrors) {
	 	this.hasEntryDistributionValidationErrors = hasEntryDistributionValidationErrors;
	 }
	
	/**
	 * Comma seperated validation error types
	 * @return string
	 */
	 getEntryDistributionValidationErrors() {
	 	return this.entryDistributionValidationErrors;
	 }
	
	/**
	 * @param entryDistributionValidationErrors string Comma seperated validation error types
	 */
	 setEntryDistributionValidationErrors(entryDistributionValidationErrors) {
	 	this.entryDistributionValidationErrors = entryDistributionValidationErrors;
	 }
}
module.exports.ContentDistributionSearchItem = ContentDistributionSearchItem;

/**
 *
 */
class ControlPanelCommandBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaControlPanelCommandBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedByIdEqual() {
	 	return this.createdByIdEqual;
	 }
	
	/**
	 * @param createdByIdEqual int 
	 */
	 setCreatedByIdEqual(createdByIdEqual) {
	 	this.createdByIdEqual = createdByIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual int 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTargetTypeEqual() {
	 	return this.targetTypeEqual;
	 }
	
	/**
	 * @param targetTypeEqual int 
	 */
	 setTargetTypeEqual(targetTypeEqual) {
	 	this.targetTypeEqual = targetTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTargetTypeIn() {
	 	return this.targetTypeIn;
	 }
	
	/**
	 * @param targetTypeIn string 
	 */
	 setTargetTypeIn(targetTypeIn) {
	 	this.targetTypeIn = targetTypeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.ControlPanelCommandBaseFilter = ControlPanelCommandBaseFilter;

/**
 *
 */
class ControlPanelCommandListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaControlPanelCommandListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ControlPanelCommandListResponse = ControlPanelCommandListResponse;

/**
 *
 */
class ConvartableJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvartableJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileSyncLocalPath() {
	 	return this.srcFileSyncLocalPath;
	 }
	
	/**
	 * @param srcFileSyncLocalPath string 
	 */
	 setSrcFileSyncLocalPath(srcFileSyncLocalPath) {
	 	this.srcFileSyncLocalPath = srcFileSyncLocalPath;
	 }
	
	/**
	 * The translated path as used by the scheduler
	 * @return string
	 */
	 getActualSrcFileSyncLocalPath() {
	 	return this.actualSrcFileSyncLocalPath;
	 }
	
	/**
	 * @param actualSrcFileSyncLocalPath string The translated path as used by the scheduler
	 */
	 setActualSrcFileSyncLocalPath(actualSrcFileSyncLocalPath) {
	 	this.actualSrcFileSyncLocalPath = actualSrcFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileSyncRemoteUrl() {
	 	return this.srcFileSyncRemoteUrl;
	 }
	
	/**
	 * @param srcFileSyncRemoteUrl string 
	 */
	 setSrcFileSyncRemoteUrl(srcFileSyncRemoteUrl) {
	 	this.srcFileSyncRemoteUrl = srcFileSyncRemoteUrl;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getSrcFileSyncs() {
	 	return this.srcFileSyncs;
	 }
	
	/**
	 * @param srcFileSyncs array 
	 */
	 setSrcFileSyncs(srcFileSyncs) {
	 	this.srcFileSyncs = srcFileSyncs;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEngineVersion() {
	 	return this.engineVersion;
	 }
	
	/**
	 * @param engineVersion int 
	 */
	 setEngineVersion(engineVersion) {
	 	this.engineVersion = engineVersion;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFlavorParamsOutputId() {
	 	return this.flavorParamsOutputId;
	 }
	
	/**
	 * @param flavorParamsOutputId int 
	 */
	 setFlavorParamsOutputId(flavorParamsOutputId) {
	 	this.flavorParamsOutputId = flavorParamsOutputId;
	 }
	
	/**
	 * 
	 * @return FlavorParamsOutput
	 */
	 getFlavorParamsOutput() {
	 	return this.flavorParamsOutput;
	 }
	
	/**
	 * @param flavorParamsOutput FlavorParamsOutput 
	 */
	 setFlavorParamsOutput(flavorParamsOutput) {
	 	this.flavorParamsOutput = flavorParamsOutput;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMediaInfoId() {
	 	return this.mediaInfoId;
	 }
	
	/**
	 * @param mediaInfoId int 
	 */
	 setMediaInfoId(mediaInfoId) {
	 	this.mediaInfoId = mediaInfoId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCurrentOperationSet() {
	 	return this.currentOperationSet;
	 }
	
	/**
	 * @param currentOperationSet int 
	 */
	 setCurrentOperationSet(currentOperationSet) {
	 	this.currentOperationSet = currentOperationSet;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCurrentOperationIndex() {
	 	return this.currentOperationIndex;
	 }
	
	/**
	 * @param currentOperationIndex int 
	 */
	 setCurrentOperationIndex(currentOperationIndex) {
	 	this.currentOperationIndex = currentOperationIndex;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getPluginData() {
	 	return this.pluginData;
	 }
	
	/**
	 * @param pluginData array 
	 */
	 setPluginData(pluginData) {
	 	this.pluginData = pluginData;
	 }
}
module.exports.ConvartableJobData = ConvartableJobData;

/**
 *
 */
class ConversionProfileAssetParamsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileAssetParamsListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ConversionProfileAssetParamsListResponse = ConversionProfileAssetParamsListResponse;

/**
 *
 */
class ConversionProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ConversionProfileListResponse = ConversionProfileListResponse;

/**
 *
 */
class ConvertEntryFlavorsObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvertEntryFlavorsObjectTask';
	}
	
	/**
	 * Comma separated list of flavor param ids to convert
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * @param flavorParamsIds string Comma separated list of flavor param ids to convert
	 */
	 setFlavorParamsIds(flavorParamsIds) {
	 	this.flavorParamsIds = flavorParamsIds;
	 }
	
	/**
	 * Should reconvert when flavor already exists?
	 * @return bool
	 */
	 getReconvert() {
	 	return this.reconvert;
	 }
	
	/**
	 * @param reconvert bool Should reconvert when flavor already exists?
	 */
	 setReconvert(reconvert) {
	 	this.reconvert = reconvert;
	 }
}
module.exports.ConvertEntryFlavorsObjectTask = ConvertEntryFlavorsObjectTask;

/**
 *
 */
class ConvertLiveSegmentJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvertLiveSegmentJobData';
	}
	
	/**
	 * Live stream entry id
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string Live stream entry id
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * Primary or secondary media server
	 * @return string
	 */
	 getMediaServerIndex() {
	 	return this.mediaServerIndex;
	 }
	
	/**
	 * @param mediaServerIndex string Primary or secondary media server
	 */
	 setMediaServerIndex(mediaServerIndex) {
	 	this.mediaServerIndex = mediaServerIndex;
	 }
	
	/**
	 * The index of the file within the entry
	 * @return int
	 */
	 getFileIndex() {
	 	return this.fileIndex;
	 }
	
	/**
	 * @param fileIndex int The index of the file within the entry
	 */
	 setFileIndex(fileIndex) {
	 	this.fileIndex = fileIndex;
	 }
	
	/**
	 * The recorded live media
	 * @return string
	 */
	 getSrcFilePath() {
	 	return this.srcFilePath;
	 }
	
	/**
	 * @param srcFilePath string The recorded live media
	 */
	 setSrcFilePath(srcFilePath) {
	 	this.srcFilePath = srcFilePath;
	 }
	
	/**
	 * The output file
	 * @return string
	 */
	 getDestFilePath() {
	 	return this.destFilePath;
	 }
	
	/**
	 * @param destFilePath string The output file
	 */
	 setDestFilePath(destFilePath) {
	 	this.destFilePath = destFilePath;
	 }
	
	/**
	 * Duration of the live entry including all recorded segments including the current
	 * @return float
	 */
	 getEndTime() {
	 	return this.endTime;
	 }
	
	/**
	 * @param endTime float Duration of the live entry including all recorded segments including the current
	 */
	 setEndTime(endTime) {
	 	this.endTime = endTime;
	 }
	
	/**
	 * The data output file
	 * @return string
	 */
	 getDestDataFilePath() {
	 	return this.destDataFilePath;
	 }
	
	/**
	 * @param destDataFilePath string The data output file
	 */
	 setDestDataFilePath(destDataFilePath) {
	 	this.destDataFilePath = destDataFilePath;
	 }
}
module.exports.ConvertLiveSegmentJobData = ConvertLiveSegmentJobData;

/**
 *
 */
class ConvertProfileJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvertProfileJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getInputFileSyncLocalPath() {
	 	return this.inputFileSyncLocalPath;
	 }
	
	/**
	 * @param inputFileSyncLocalPath string 
	 */
	 setInputFileSyncLocalPath(inputFileSyncLocalPath) {
	 	this.inputFileSyncLocalPath = inputFileSyncLocalPath;
	 }
	
	/**
	 * The height of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
	 * @return int
	 */
	 getThumbHeight() {
	 	return this.thumbHeight;
	 }
	
	/**
	 * @param thumbHeight int The height of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
	 */
	 setThumbHeight(thumbHeight) {
	 	this.thumbHeight = thumbHeight;
	 }
	
	/**
	 * The bit rate of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
	 * @return int
	 */
	 getThumbBitrate() {
	 	return this.thumbBitrate;
	 }
	
	/**
	 * @param thumbBitrate int The bit rate of last created thumbnail, will be used to comapare if this thumbnail is the best we can have
	 */
	 setThumbBitrate(thumbBitrate) {
	 	this.thumbBitrate = thumbBitrate;
	 }
}
module.exports.ConvertProfileJobData = ConvertProfileJobData;

/**
 *
 */
class CopyPartnerJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCopyPartnerJobData';
	}
	
	/**
	 * Id of the partner to copy from
	 * @return int
	 */
	 getFromPartnerId() {
	 	return this.fromPartnerId;
	 }
	
	/**
	 * @param fromPartnerId int Id of the partner to copy from
	 */
	 setFromPartnerId(fromPartnerId) {
	 	this.fromPartnerId = fromPartnerId;
	 }
	
	/**
	 * Id of the partner to copy to
	 * @return int
	 */
	 getToPartnerId() {
	 	return this.toPartnerId;
	 }
	
	/**
	 * @param toPartnerId int Id of the partner to copy to
	 */
	 setToPartnerId(toPartnerId) {
	 	this.toPartnerId = toPartnerId;
	 }
}
module.exports.CopyPartnerJobData = CopyPartnerJobData;

/**
 *
 */
class CountryRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountryRestriction';
	}
	
	/**
	 * Country restriction type (Allow or deny)
	 * @return int
	 */
	 getCountryRestrictionType() {
	 	return this.countryRestrictionType;
	 }
	
	/**
	 * @param countryRestrictionType int Country restriction type (Allow or deny)
	 */
	 setCountryRestrictionType(countryRestrictionType) {
	 	this.countryRestrictionType = countryRestrictionType;
	 }
	
	/**
	 * Comma separated list of country codes to allow to deny
	 * @return string
	 */
	 getCountryList() {
	 	return this.countryList;
	 }
	
	/**
	 * @param countryList string Comma separated list of country codes to allow to deny
	 */
	 setCountryList(countryList) {
	 	this.countryList = countryList;
	 }
}
module.exports.CountryRestriction = CountryRestriction;

/**
 *
 */
class CuePointListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCuePointListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.CuePointListResponse = CuePointListResponse;

/**
 *
 */
class DataListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDataListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DataListResponse = DataListResponse;

/**
 *
 */
class DeleteEntryFlavorsObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeleteEntryFlavorsObjectTask';
	}
	
	/**
	 * The logic to use to choose the flavors for deletion
	 * @return int
	 */
	 getDeleteType() {
	 	return this.deleteType;
	 }
	
	/**
	 * @param deleteType int The logic to use to choose the flavors for deletion
	 */
	 setDeleteType(deleteType) {
	 	this.deleteType = deleteType;
	 }
	
	/**
	 * Comma separated list of flavor param ids to delete or keep
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * @param flavorParamsIds string Comma separated list of flavor param ids to delete or keep
	 */
	 setFlavorParamsIds(flavorParamsIds) {
	 	this.flavorParamsIds = flavorParamsIds;
	 }
}
module.exports.DeleteEntryFlavorsObjectTask = DeleteEntryFlavorsObjectTask;

/**
 *
 */
class DeleteEntryObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeleteEntryObjectTask';
	}
}
module.exports.DeleteEntryObjectTask = DeleteEntryObjectTask;

/**
 *
 */
class DeleteFileJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeleteFileJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getLocalFileSyncPath() {
	 	return this.localFileSyncPath;
	 }
	
	/**
	 * @param localFileSyncPath string 
	 */
	 setLocalFileSyncPath(localFileSyncPath) {
	 	this.localFileSyncPath = localFileSyncPath;
	 }
}
module.exports.DeleteFileJobData = DeleteFileJobData;

/**
 *
 */
class DeleteJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeleteJobData';
	}
	
	/**
	 * The filter should return the list of objects that need to be deleted
	 * @return Filter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter Filter The filter should return the list of objects that need to be deleted
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
}
module.exports.DeleteJobData = DeleteJobData;

/**
 *
 */
class DeleteLocalContentObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeleteLocalContentObjectTask';
	}
}
module.exports.DeleteLocalContentObjectTask = DeleteLocalContentObjectTask;

/**
 *
 */
class DeliveryProfileAkamaiAppleHttpManifest extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileAkamaiAppleHttpManifest';
	}
	
	/**
	 * Should we use timing parameters - clipTo / seekFrom
	 * @return bool
	 */
	 getSupportClipping() {
	 	return this.supportClipping;
	 }
	
	/**
	 * @param supportClipping bool Should we use timing parameters - clipTo / seekFrom
	 */
	 setSupportClipping(supportClipping) {
	 	this.supportClipping = supportClipping;
	 }
}
module.exports.DeliveryProfileAkamaiAppleHttpManifest = DeliveryProfileAkamaiAppleHttpManifest;

/**
 *
 */
class DeliveryProfileAkamaiHds extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileAkamaiHds';
	}
	
	/**
	 * Should we use timing parameters - clipTo / seekFrom
	 * @return bool
	 */
	 getSupportClipping() {
	 	return this.supportClipping;
	 }
	
	/**
	 * @param supportClipping bool Should we use timing parameters - clipTo / seekFrom
	 */
	 setSupportClipping(supportClipping) {
	 	this.supportClipping = supportClipping;
	 }
}
module.exports.DeliveryProfileAkamaiHds = DeliveryProfileAkamaiHds;

/**
 *
 */
class DeliveryProfileAkamaiHttp extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileAkamaiHttp';
	}
	
	/**
	 * Should we use intelliseek
	 * @return bool
	 */
	 getUseIntelliseek() {
	 	return this.useIntelliseek;
	 }
	
	/**
	 * @param useIntelliseek bool Should we use intelliseek
	 */
	 setUseIntelliseek(useIntelliseek) {
	 	this.useIntelliseek = useIntelliseek;
	 }
}
module.exports.DeliveryProfileAkamaiHttp = DeliveryProfileAkamaiHttp;

/**
 *
 */
class DeliveryProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamerTypeEqual() {
	 	return this.streamerTypeEqual;
	 }
	
	/**
	 * @param streamerTypeEqual string 
	 */
	 setStreamerTypeEqual(streamerTypeEqual) {
	 	this.streamerTypeEqual = streamerTypeEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.DeliveryProfileBaseFilter = DeliveryProfileBaseFilter;

/**
 *
 */
class DeliveryProfileCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileCondition';
	}
	
	/**
	 * The delivery ids that are accepted by this condition
	 * @return array
	 */
	 getDeliveryProfileIds() {
	 	return this.deliveryProfileIds;
	 }
	
	/**
	 * @param deliveryProfileIds array The delivery ids that are accepted by this condition
	 */
	 setDeliveryProfileIds(deliveryProfileIds) {
	 	this.deliveryProfileIds = deliveryProfileIds;
	 }
}
module.exports.DeliveryProfileCondition = DeliveryProfileCondition;

/**
 *
 */
class DeliveryProfileGenericAppleHttp extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericAppleHttp';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPattern() {
	 	return this.pattern;
	 }
	
	/**
	 * @param pattern string 
	 */
	 setPattern(pattern) {
	 	this.pattern = pattern;
	 }
	
	/**
	 * rendererClass
	 * @return string
	 */
	 getRendererClass() {
	 	return this.rendererClass;
	 }
	
	/**
	 * @param rendererClass string rendererClass
	 */
	 setRendererClass(rendererClass) {
	 	this.rendererClass = rendererClass;
	 }
	
	/**
	 * Enable to make playManifest redirect to the domain of the delivery profile
	 * @return int
	 */
	 getManifestRedirect() {
	 	return this.manifestRedirect;
	 }
	
	/**
	 * @param manifestRedirect int Enable to make playManifest redirect to the domain of the delivery profile
	 */
	 setManifestRedirect(manifestRedirect) {
	 	this.manifestRedirect = manifestRedirect;
	 }
}
module.exports.DeliveryProfileGenericAppleHttp = DeliveryProfileGenericAppleHttp;

/**
 *
 */
class DeliveryProfileGenericHds extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericHds';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPattern() {
	 	return this.pattern;
	 }
	
	/**
	 * @param pattern string 
	 */
	 setPattern(pattern) {
	 	this.pattern = pattern;
	 }
	
	/**
	 * rendererClass
	 * @return string
	 */
	 getRendererClass() {
	 	return this.rendererClass;
	 }
	
	/**
	 * @param rendererClass string rendererClass
	 */
	 setRendererClass(rendererClass) {
	 	this.rendererClass = rendererClass;
	 }
}
module.exports.DeliveryProfileGenericHds = DeliveryProfileGenericHds;

/**
 *
 */
class DeliveryProfileGenericHttp extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericHttp';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPattern() {
	 	return this.pattern;
	 }
	
	/**
	 * @param pattern string 
	 */
	 setPattern(pattern) {
	 	this.pattern = pattern;
	 }
}
module.exports.DeliveryProfileGenericHttp = DeliveryProfileGenericHttp;

/**
 *
 */
class DeliveryProfileGenericSilverLight extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericSilverLight';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPattern() {
	 	return this.pattern;
	 }
	
	/**
	 * @param pattern string 
	 */
	 setPattern(pattern) {
	 	this.pattern = pattern;
	 }
}
module.exports.DeliveryProfileGenericSilverLight = DeliveryProfileGenericSilverLight;

/**
 *
 */
class DeliveryProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DeliveryProfileListResponse = DeliveryProfileListResponse;

/**
 *
 */
class DeliveryProfileLiveAppleHttp extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileLiveAppleHttp';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getDisableExtraAttributes() {
	 	return this.disableExtraAttributes;
	 }
	
	/**
	 * @param disableExtraAttributes bool 
	 */
	 setDisableExtraAttributes(disableExtraAttributes) {
	 	this.disableExtraAttributes = disableExtraAttributes;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getForceProxy() {
	 	return this.forceProxy;
	 }
	
	/**
	 * @param forceProxy bool 
	 */
	 setForceProxy(forceProxy) {
	 	this.forceProxy = forceProxy;
	 }
}
module.exports.DeliveryProfileLiveAppleHttp = DeliveryProfileLiveAppleHttp;

/**
 *
 */
class DeliveryProfileRtmp extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileRtmp';
	}
	
	/**
	 * enforceRtmpe
	 * @return bool
	 */
	 getEnforceRtmpe() {
	 	return this.enforceRtmpe;
	 }
	
	/**
	 * @param enforceRtmpe bool enforceRtmpe
	 */
	 setEnforceRtmpe(enforceRtmpe) {
	 	this.enforceRtmpe = enforceRtmpe;
	 }
	
	/**
	 * a prefix that is added to all stream urls (replaces storageProfile::rtmpPrefix)
	 * @return string
	 */
	 getPrefix() {
	 	return this.prefix;
	 }
	
	/**
	 * @param prefix string a prefix that is added to all stream urls (replaces storageProfile::rtmpPrefix)
	 */
	 setPrefix(prefix) {
	 	this.prefix = prefix;
	 }
}
module.exports.DeliveryProfileRtmp = DeliveryProfileRtmp;

/**
 *
 */
class DeliveryProfileVodPackagerPlayServer extends DeliveryProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileVodPackagerPlayServer';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getAdStitchingEnabled() {
	 	return this.adStitchingEnabled;
	 }
	
	/**
	 * @param adStitchingEnabled bool 
	 */
	 setAdStitchingEnabled(adStitchingEnabled) {
	 	this.adStitchingEnabled = adStitchingEnabled;
	 }
}
module.exports.DeliveryProfileVodPackagerPlayServer = DeliveryProfileVodPackagerPlayServer;

/**
 *
 */
class DeliveryServerNode extends ServerNode{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryServerNode';
	}
	
	/**
	 * Delivery profile ids
	 * @return array
	 */
	 getDeliveryProfileIds() {
	 	return this.deliveryProfileIds;
	 }
	
	/**
	 * @param deliveryProfileIds array Delivery profile ids
	 */
	 setDeliveryProfileIds(deliveryProfileIds) {
	 	this.deliveryProfileIds = deliveryProfileIds;
	 }
}
module.exports.DeliveryServerNode = DeliveryServerNode;

/**
 *
 */
class DirectoryRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDirectoryRestriction';
	}
	
	/**
	 * Kaltura directory restriction type
	 * @return int
	 */
	 getDirectoryRestrictionType() {
	 	return this.directoryRestrictionType;
	 }
	
	/**
	 * @param directoryRestrictionType int Kaltura directory restriction type
	 */
	 setDirectoryRestrictionType(directoryRestrictionType) {
	 	this.directoryRestrictionType = directoryRestrictionType;
	 }
}
module.exports.DirectoryRestriction = DirectoryRestriction;

/**
 *
 */
class DispatchEventNotificationObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDispatchEventNotificationObjectTask';
	}
	
	/**
	 * The event notification template id to dispatch
	 * @return int
	 */
	 getEventNotificationTemplateId() {
	 	return this.eventNotificationTemplateId;
	 }
	
	/**
	 * @param eventNotificationTemplateId int The event notification template id to dispatch
	 */
	 setEventNotificationTemplateId(eventNotificationTemplateId) {
	 	this.eventNotificationTemplateId = eventNotificationTemplateId;
	 }
}
module.exports.DispatchEventNotificationObjectTask = DispatchEventNotificationObjectTask;

/**
 *
 */
class DistributeObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributeObjectTask';
	}
	
	/**
	 * Distribution profile id
	 * @return string
	 */
	 getDistributionProfileId() {
	 	return this.distributionProfileId;
	 }
	
	/**
	 * @param distributionProfileId string Distribution profile id
	 */
	 setDistributionProfileId(distributionProfileId) {
	 	this.distributionProfileId = distributionProfileId;
	 }
}
module.exports.DistributeObjectTask = DistributeObjectTask;

/**
 *
 */
class DistributionJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getDistributionProfileId() {
	 	return this.distributionProfileId;
	 }
	
	/**
	 * @param distributionProfileId int 
	 */
	 setDistributionProfileId(distributionProfileId) {
	 	this.distributionProfileId = distributionProfileId;
	 }
	
	/**
	 * 
	 * @return DistributionProfile
	 */
	 getDistributionProfile() {
	 	return this.distributionProfile;
	 }
	
	/**
	 * @param distributionProfile DistributionProfile 
	 */
	 setDistributionProfile(distributionProfile) {
	 	this.distributionProfile = distributionProfile;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEntryDistributionId() {
	 	return this.entryDistributionId;
	 }
	
	/**
	 * @param entryDistributionId int 
	 */
	 setEntryDistributionId(entryDistributionId) {
	 	this.entryDistributionId = entryDistributionId;
	 }
	
	/**
	 * 
	 * @return EntryDistribution
	 */
	 getEntryDistribution() {
	 	return this.entryDistribution;
	 }
	
	/**
	 * @param entryDistribution EntryDistribution 
	 */
	 setEntryDistribution(entryDistribution) {
	 	this.entryDistribution = entryDistribution;
	 }
	
	/**
	 * Id of the media in the remote system
	 * @return string
	 */
	 getRemoteId() {
	 	return this.remoteId;
	 }
	
	/**
	 * @param remoteId string Id of the media in the remote system
	 */
	 setRemoteId(remoteId) {
	 	this.remoteId = remoteId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProviderType() {
	 	return this.providerType;
	 }
	
	/**
	 * @param providerType string 
	 */
	 setProviderType(providerType) {
	 	this.providerType = providerType;
	 }
	
	/**
	 * Additional data that relevant for the provider only
	 * @return DistributionJobProviderData
	 */
	 getProviderData() {
	 	return this.providerData;
	 }
	
	/**
	 * @param providerData DistributionJobProviderData Additional data that relevant for the provider only
	 */
	 setProviderData(providerData) {
	 	this.providerData = providerData;
	 }
	
	/**
	 * The results as returned from the remote destination
	 * @return string
	 */
	 getResults() {
	 	return this.results;
	 }
	
	/**
	 * @param results string The results as returned from the remote destination
	 */
	 setResults(results) {
	 	this.results = results;
	 }
	
	/**
	 * The data as sent to the remote destination
	 * @return string
	 */
	 getSentData() {
	 	return this.sentData;
	 }
	
	/**
	 * @param sentData string The data as sent to the remote destination
	 */
	 setSentData(sentData) {
	 	this.sentData = sentData;
	 }
	
	/**
	 * Stores array of media files that submitted to the destination site
 * Could be used later for media update
	 * @return array
	 */
	 getMediaFiles() {
	 	return this.mediaFiles;
	 }
	
	/**
	 * @param mediaFiles array Stores array of media files that submitted to the destination site
 * Could be used later for media update
	 */
	 setMediaFiles(mediaFiles) {
	 	this.mediaFiles = mediaFiles;
	 }
}
module.exports.DistributionJobData = DistributionJobData;

/**
 *
 */
class DistributionProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.DistributionProfileBaseFilter = DistributionProfileBaseFilter;

/**
 *
 */
class DistributionProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DistributionProfileListResponse = DistributionProfileListResponse;

/**
 *
 */
class DistributionProviderBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProviderBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
}
module.exports.DistributionProviderBaseFilter = DistributionProviderBaseFilter;

/**
 *
 */
class DistributionProviderListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProviderListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DistributionProviderListResponse = DistributionProviderListResponse;

/**
 *
 */
class DistributionValidationErrorConditionNotMet extends DistributionValidationError{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorConditionNotMet';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getConditionName() {
	 	return this.conditionName;
	 }
	
	/**
	 * @param conditionName string 
	 */
	 setConditionName(conditionName) {
	 	this.conditionName = conditionName;
	 }
}
module.exports.DistributionValidationErrorConditionNotMet = DistributionValidationErrorConditionNotMet;

/**
 *
 */
class DistributionValidationErrorInvalidData extends DistributionValidationError{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorInvalidData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFieldName() {
	 	return this.fieldName;
	 }
	
	/**
	 * @param fieldName string 
	 */
	 setFieldName(fieldName) {
	 	this.fieldName = fieldName;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getValidationErrorType() {
	 	return this.validationErrorType;
	 }
	
	/**
	 * @param validationErrorType int 
	 */
	 setValidationErrorType(validationErrorType) {
	 	this.validationErrorType = validationErrorType;
	 }
	
	/**
	 * Parameter of the validation error
 * For example, minimum value for KalturaDistributionValidationErrorType::STRING_TOO_SHORT validation error
	 * @return string
	 */
	 getValidationErrorParam() {
	 	return this.validationErrorParam;
	 }
	
	/**
	 * @param validationErrorParam string Parameter of the validation error
 * For example, minimum value for KalturaDistributionValidationErrorType::STRING_TOO_SHORT validation error
	 */
	 setValidationErrorParam(validationErrorParam) {
	 	this.validationErrorParam = validationErrorParam;
	 }
}
module.exports.DistributionValidationErrorInvalidData = DistributionValidationErrorInvalidData;

/**
 *
 */
class DistributionValidationErrorMissingAsset extends DistributionValidationError{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorMissingAsset';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string 
	 */
	 setData(data) {
	 	this.data = data;
	 }
}
module.exports.DistributionValidationErrorMissingAsset = DistributionValidationErrorMissingAsset;

/**
 *
 */
class DistributionValidationErrorMissingFlavor extends DistributionValidationError{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorMissingFlavor';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorParamsId() {
	 	return this.flavorParamsId;
	 }
	
	/**
	 * @param flavorParamsId string 
	 */
	 setFlavorParamsId(flavorParamsId) {
	 	this.flavorParamsId = flavorParamsId;
	 }
}
module.exports.DistributionValidationErrorMissingFlavor = DistributionValidationErrorMissingFlavor;

/**
 *
 */
class DistributionValidationErrorMissingMetadata extends DistributionValidationError{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorMissingMetadata';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFieldName() {
	 	return this.fieldName;
	 }
	
	/**
	 * @param fieldName string 
	 */
	 setFieldName(fieldName) {
	 	this.fieldName = fieldName;
	 }
}
module.exports.DistributionValidationErrorMissingMetadata = DistributionValidationErrorMissingMetadata;

/**
 *
 */
class DistributionValidationErrorMissingThumbnail extends DistributionValidationError{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorMissingThumbnail';
	}
	
	/**
	 * 
	 * @return DistributionThumbDimensions
	 */
	 getDimensions() {
	 	return this.dimensions;
	 }
	
	/**
	 * @param dimensions DistributionThumbDimensions 
	 */
	 setDimensions(dimensions) {
	 	this.dimensions = dimensions;
	 }
}
module.exports.DistributionValidationErrorMissingThumbnail = DistributionValidationErrorMissingThumbnail;

/**
 *
 */
class DocumentListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDocumentListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DocumentListResponse = DocumentListResponse;

/**
 *
 */
class DrmEntryContextPluginData extends PluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDrmEntryContextPluginData';
	}
	
	/**
	 * For the uDRM we give the drm context data which is a json encoding of an array containing the uDRM data
 * for each flavor that is required from this getContextData request
	 * @return string
	 */
	 getFlavorData() {
	 	return this.flavorData;
	 }
	
	/**
	 * @param flavorData string For the uDRM we give the drm context data which is a json encoding of an array containing the uDRM data
 * for each flavor that is required from this getContextData request
	 */
	 setFlavorData(flavorData) {
	 	this.flavorData = flavorData;
	 }
}
module.exports.DrmEntryContextPluginData = DrmEntryContextPluginData;

/**
 *
 */
class DropFolderBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameLike() {
	 	return this.nameLike;
	 }
	
	/**
	 * @param nameLike string 
	 */
	 setNameLike(nameLike) {
	 	this.nameLike = nameLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getConversionProfileIdEqual() {
	 	return this.conversionProfileIdEqual;
	 }
	
	/**
	 * @param conversionProfileIdEqual int 
	 */
	 setConversionProfileIdEqual(conversionProfileIdEqual) {
	 	this.conversionProfileIdEqual = conversionProfileIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConversionProfileIdIn() {
	 	return this.conversionProfileIdIn;
	 }
	
	/**
	 * @param conversionProfileIdIn string 
	 */
	 setConversionProfileIdIn(conversionProfileIdIn) {
	 	this.conversionProfileIdIn = conversionProfileIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDcEqual() {
	 	return this.dcEqual;
	 }
	
	/**
	 * @param dcEqual int 
	 */
	 setDcEqual(dcEqual) {
	 	this.dcEqual = dcEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDcIn() {
	 	return this.dcIn;
	 }
	
	/**
	 * @param dcIn string 
	 */
	 setDcIn(dcIn) {
	 	this.dcIn = dcIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPathEqual() {
	 	return this.pathEqual;
	 }
	
	/**
	 * @param pathEqual string 
	 */
	 setPathEqual(pathEqual) {
	 	this.pathEqual = pathEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPathLike() {
	 	return this.pathLike;
	 }
	
	/**
	 * @param pathLike string 
	 */
	 setPathLike(pathLike) {
	 	this.pathLike = pathLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileHandlerTypeEqual() {
	 	return this.fileHandlerTypeEqual;
	 }
	
	/**
	 * @param fileHandlerTypeEqual string 
	 */
	 setFileHandlerTypeEqual(fileHandlerTypeEqual) {
	 	this.fileHandlerTypeEqual = fileHandlerTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileHandlerTypeIn() {
	 	return this.fileHandlerTypeIn;
	 }
	
	/**
	 * @param fileHandlerTypeIn string 
	 */
	 setFileHandlerTypeIn(fileHandlerTypeIn) {
	 	this.fileHandlerTypeIn = fileHandlerTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNamePatternsLike() {
	 	return this.fileNamePatternsLike;
	 }
	
	/**
	 * @param fileNamePatternsLike string 
	 */
	 setFileNamePatternsLike(fileNamePatternsLike) {
	 	this.fileNamePatternsLike = fileNamePatternsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNamePatternsMultiLikeOr() {
	 	return this.fileNamePatternsMultiLikeOr;
	 }
	
	/**
	 * @param fileNamePatternsMultiLikeOr string 
	 */
	 setFileNamePatternsMultiLikeOr(fileNamePatternsMultiLikeOr) {
	 	this.fileNamePatternsMultiLikeOr = fileNamePatternsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNamePatternsMultiLikeAnd() {
	 	return this.fileNamePatternsMultiLikeAnd;
	 }
	
	/**
	 * @param fileNamePatternsMultiLikeAnd string 
	 */
	 setFileNamePatternsMultiLikeAnd(fileNamePatternsMultiLikeAnd) {
	 	this.fileNamePatternsMultiLikeAnd = fileNamePatternsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCodeEqual() {
	 	return this.errorCodeEqual;
	 }
	
	/**
	 * @param errorCodeEqual string 
	 */
	 setErrorCodeEqual(errorCodeEqual) {
	 	this.errorCodeEqual = errorCodeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCodeIn() {
	 	return this.errorCodeIn;
	 }
	
	/**
	 * @param errorCodeIn string 
	 */
	 setErrorCodeIn(errorCodeIn) {
	 	this.errorCodeIn = errorCodeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.DropFolderBaseFilter = DropFolderBaseFilter;

/**
 *
 */
class DropFolderContentFileHandlerConfig extends DropFolderFileHandlerConfig{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderContentFileHandlerConfig';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getContentMatchPolicy() {
	 	return this.contentMatchPolicy;
	 }
	
	/**
	 * @param contentMatchPolicy int 
	 */
	 setContentMatchPolicy(contentMatchPolicy) {
	 	this.contentMatchPolicy = contentMatchPolicy;
	 }
	
	/**
	 * Regular expression that defines valid file names to be handled.
 * The following might be extracted from the file name and used if defined:
 * - (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 * - (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor
	 * @return string
	 */
	 getSlugRegex() {
	 	return this.slugRegex;
	 }
	
	/**
	 * @param slugRegex string Regular expression that defines valid file names to be handled.
 * The following might be extracted from the file name and used if defined:
 * - (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 * - (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor
	 */
	 setSlugRegex(slugRegex) {
	 	this.slugRegex = slugRegex;
	 }
}
module.exports.DropFolderContentFileHandlerConfig = DropFolderContentFileHandlerConfig;

/**
 *
 */
class DropFolderContentProcessorJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderContentProcessorJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getDropFolderId() {
	 	return this.dropFolderId;
	 }
	
	/**
	 * @param dropFolderId int 
	 */
	 setDropFolderId(dropFolderId) {
	 	this.dropFolderId = dropFolderId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDropFolderFileIds() {
	 	return this.dropFolderFileIds;
	 }
	
	/**
	 * @param dropFolderFileIds string 
	 */
	 setDropFolderFileIds(dropFolderFileIds) {
	 	this.dropFolderFileIds = dropFolderFileIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedSlug() {
	 	return this.parsedSlug;
	 }
	
	/**
	 * @param parsedSlug string 
	 */
	 setParsedSlug(parsedSlug) {
	 	this.parsedSlug = parsedSlug;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getContentMatchPolicy() {
	 	return this.contentMatchPolicy;
	 }
	
	/**
	 * @param contentMatchPolicy int 
	 */
	 setContentMatchPolicy(contentMatchPolicy) {
	 	this.contentMatchPolicy = contentMatchPolicy;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getConversionProfileId() {
	 	return this.conversionProfileId;
	 }
	
	/**
	 * @param conversionProfileId int 
	 */
	 setConversionProfileId(conversionProfileId) {
	 	this.conversionProfileId = conversionProfileId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedUserId() {
	 	return this.parsedUserId;
	 }
	
	/**
	 * @param parsedUserId string 
	 */
	 setParsedUserId(parsedUserId) {
	 	this.parsedUserId = parsedUserId;
	 }
}
module.exports.DropFolderContentProcessorJobData = DropFolderContentProcessorJobData;

/**
 *
 */
class DropFolderFileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDropFolderIdEqual() {
	 	return this.dropFolderIdEqual;
	 }
	
	/**
	 * @param dropFolderIdEqual int 
	 */
	 setDropFolderIdEqual(dropFolderIdEqual) {
	 	this.dropFolderIdEqual = dropFolderIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDropFolderIdIn() {
	 	return this.dropFolderIdIn;
	 }
	
	/**
	 * @param dropFolderIdIn string 
	 */
	 setDropFolderIdIn(dropFolderIdIn) {
	 	this.dropFolderIdIn = dropFolderIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNameEqual() {
	 	return this.fileNameEqual;
	 }
	
	/**
	 * @param fileNameEqual string 
	 */
	 setFileNameEqual(fileNameEqual) {
	 	this.fileNameEqual = fileNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNameIn() {
	 	return this.fileNameIn;
	 }
	
	/**
	 * @param fileNameIn string 
	 */
	 setFileNameIn(fileNameIn) {
	 	this.fileNameIn = fileNameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNameLike() {
	 	return this.fileNameLike;
	 }
	
	/**
	 * @param fileNameLike string 
	 */
	 setFileNameLike(fileNameLike) {
	 	this.fileNameLike = fileNameLike;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusNotIn() {
	 	return this.statusNotIn;
	 }
	
	/**
	 * @param statusNotIn string 
	 */
	 setStatusNotIn(statusNotIn) {
	 	this.statusNotIn = statusNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedSlugEqual() {
	 	return this.parsedSlugEqual;
	 }
	
	/**
	 * @param parsedSlugEqual string 
	 */
	 setParsedSlugEqual(parsedSlugEqual) {
	 	this.parsedSlugEqual = parsedSlugEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedSlugIn() {
	 	return this.parsedSlugIn;
	 }
	
	/**
	 * @param parsedSlugIn string 
	 */
	 setParsedSlugIn(parsedSlugIn) {
	 	this.parsedSlugIn = parsedSlugIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedSlugLike() {
	 	return this.parsedSlugLike;
	 }
	
	/**
	 * @param parsedSlugLike string 
	 */
	 setParsedSlugLike(parsedSlugLike) {
	 	this.parsedSlugLike = parsedSlugLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedFlavorEqual() {
	 	return this.parsedFlavorEqual;
	 }
	
	/**
	 * @param parsedFlavorEqual string 
	 */
	 setParsedFlavorEqual(parsedFlavorEqual) {
	 	this.parsedFlavorEqual = parsedFlavorEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedFlavorIn() {
	 	return this.parsedFlavorIn;
	 }
	
	/**
	 * @param parsedFlavorIn string 
	 */
	 setParsedFlavorIn(parsedFlavorIn) {
	 	this.parsedFlavorIn = parsedFlavorIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParsedFlavorLike() {
	 	return this.parsedFlavorLike;
	 }
	
	/**
	 * @param parsedFlavorLike string 
	 */
	 setParsedFlavorLike(parsedFlavorLike) {
	 	this.parsedFlavorLike = parsedFlavorLike;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLeadDropFolderFileIdEqual() {
	 	return this.leadDropFolderFileIdEqual;
	 }
	
	/**
	 * @param leadDropFolderFileIdEqual int 
	 */
	 setLeadDropFolderFileIdEqual(leadDropFolderFileIdEqual) {
	 	this.leadDropFolderFileIdEqual = leadDropFolderFileIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDeletedDropFolderFileIdEqual() {
	 	return this.deletedDropFolderFileIdEqual;
	 }
	
	/**
	 * @param deletedDropFolderFileIdEqual int 
	 */
	 setDeletedDropFolderFileIdEqual(deletedDropFolderFileIdEqual) {
	 	this.deletedDropFolderFileIdEqual = deletedDropFolderFileIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCodeEqual() {
	 	return this.errorCodeEqual;
	 }
	
	/**
	 * @param errorCodeEqual string 
	 */
	 setErrorCodeEqual(errorCodeEqual) {
	 	this.errorCodeEqual = errorCodeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getErrorCodeIn() {
	 	return this.errorCodeIn;
	 }
	
	/**
	 * @param errorCodeIn string 
	 */
	 setErrorCodeIn(errorCodeIn) {
	 	this.errorCodeIn = errorCodeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.DropFolderFileBaseFilter = DropFolderFileBaseFilter;

/**
 *
 */
class DropFolderFileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DropFolderFileListResponse = DropFolderFileListResponse;

/**
 *
 */
class DropFolderICalBulkUploadFileHandlerConfig extends DropFolderFileHandlerConfig{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderICalBulkUploadFileHandlerConfig';
	}
	
	/**
	 * The type of the events that ill be created by this upload
	 * @return int
	 */
	 getEventsType() {
	 	return this.eventsType;
	 }
	
	/**
	 * @param eventsType int The type of the events that ill be created by this upload
	 */
	 setEventsType(eventsType) {
	 	this.eventsType = eventsType;
	 }
}
module.exports.DropFolderICalBulkUploadFileHandlerConfig = DropFolderICalBulkUploadFileHandlerConfig;

/**
 *
 */
class DropFolderListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.DropFolderListResponse = DropFolderListResponse;

/**
 *
 */
class DropFolderXmlBulkUploadFileHandlerConfig extends DropFolderFileHandlerConfig{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderXmlBulkUploadFileHandlerConfig';
	}
}
module.exports.DropFolderXmlBulkUploadFileHandlerConfig = DropFolderXmlBulkUploadFileHandlerConfig;

/**
 *
 */
class CategoryUserBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryUserBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryIdEqual() {
	 	return this.categoryIdEqual;
	 }
	
	/**
	 * @param categoryIdEqual int 
	 */
	 setCategoryIdEqual(categoryIdEqual) {
	 	this.categoryIdEqual = categoryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryIdIn() {
	 	return this.categoryIdIn;
	 }
	
	/**
	 * @param categoryIdIn string 
	 */
	 setCategoryIdIn(categoryIdIn) {
	 	this.categoryIdIn = categoryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPermissionLevelEqual() {
	 	return this.permissionLevelEqual;
	 }
	
	/**
	 * @param permissionLevelEqual int 
	 */
	 setPermissionLevelEqual(permissionLevelEqual) {
	 	this.permissionLevelEqual = permissionLevelEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionLevelIn() {
	 	return this.permissionLevelIn;
	 }
	
	/**
	 * @param permissionLevelIn string 
	 */
	 setPermissionLevelIn(permissionLevelIn) {
	 	this.permissionLevelIn = permissionLevelIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdateMethodEqual() {
	 	return this.updateMethodEqual;
	 }
	
	/**
	 * @param updateMethodEqual int 
	 */
	 setUpdateMethodEqual(updateMethodEqual) {
	 	this.updateMethodEqual = updateMethodEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUpdateMethodIn() {
	 	return this.updateMethodIn;
	 }
	
	/**
	 * @param updateMethodIn string 
	 */
	 setUpdateMethodIn(updateMethodIn) {
	 	this.updateMethodIn = updateMethodIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryFullIdsStartsWith() {
	 	return this.categoryFullIdsStartsWith;
	 }
	
	/**
	 * @param categoryFullIdsStartsWith string 
	 */
	 setCategoryFullIdsStartsWith(categoryFullIdsStartsWith) {
	 	this.categoryFullIdsStartsWith = categoryFullIdsStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryFullIdsEqual() {
	 	return this.categoryFullIdsEqual;
	 }
	
	/**
	 * @param categoryFullIdsEqual string 
	 */
	 setCategoryFullIdsEqual(categoryFullIdsEqual) {
	 	this.categoryFullIdsEqual = categoryFullIdsEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionNamesMatchAnd() {
	 	return this.permissionNamesMatchAnd;
	 }
	
	/**
	 * @param permissionNamesMatchAnd string 
	 */
	 setPermissionNamesMatchAnd(permissionNamesMatchAnd) {
	 	this.permissionNamesMatchAnd = permissionNamesMatchAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionNamesMatchOr() {
	 	return this.permissionNamesMatchOr;
	 }
	
	/**
	 * @param permissionNamesMatchOr string 
	 */
	 setPermissionNamesMatchOr(permissionNamesMatchOr) {
	 	this.permissionNamesMatchOr = permissionNamesMatchOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissionNamesNotContains() {
	 	return this.permissionNamesNotContains;
	 }
	
	/**
	 * @param permissionNamesNotContains string 
	 */
	 setPermissionNamesNotContains(permissionNamesNotContains) {
	 	this.permissionNamesNotContains = permissionNamesNotContains;
	 }
}
module.exports.CategoryUserBaseFilter = CategoryUserBaseFilter;

/**
 *
 */
class CategoryUserFilter extends CategoryUserBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryUserFilter';
	}
	
	/**
	 * Return the list of categoryUser that are not inherited from parent category - only the direct categoryUsers
	 * @return bool
	 */
	 getCategoryDirectMembers() {
	 	return this.categoryDirectMembers;
	 }
	
	/**
	 * @param categoryDirectMembers bool Return the list of categoryUser that are not inherited from parent category - only the direct categoryUsers
	 */
	 setCategoryDirectMembers(categoryDirectMembers) {
	 	this.categoryDirectMembers = categoryDirectMembers;
	 }
	
	/**
	 * Free text search on user id or screen name
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string Free text search on user id or screen name
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
	
	/**
	 * Return a list of categoryUser that related to the userId in this field by groups
	 * @return string
	 */
	 getRelatedGroupsByUserId() {
	 	return this.relatedGroupsByUserId;
	 }
	
	/**
	 * @param relatedGroupsByUserId string Return a list of categoryUser that related to the userId in this field by groups
	 */
	 setRelatedGroupsByUserId(relatedGroupsByUserId) {
	 	this.relatedGroupsByUserId = relatedGroupsByUserId;
	 }
}
module.exports.CategoryUserFilter = CategoryUserFilter;

/**
 *
 */
class EmailNotificationCategoryRecipientJobData extends EmailNotificationRecipientJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationCategoryRecipientJobData';
	}
	
	/**
	 * 
	 * @return CategoryUserFilter
	 */
	 getCategoryUserFilter() {
	 	return this.categoryUserFilter;
	 }
	
	/**
	 * @param categoryUserFilter CategoryUserFilter 
	 */
	 setCategoryUserFilter(categoryUserFilter) {
	 	this.categoryUserFilter = categoryUserFilter;
	 }
}
module.exports.EmailNotificationCategoryRecipientJobData = EmailNotificationCategoryRecipientJobData;

/**
 *
 */
class EmailNotificationCategoryRecipientProvider extends EmailNotificationRecipientProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationCategoryRecipientProvider';
	}
	
	/**
	 * The ID of the category whose subscribers should receive the email notification
	 * @return StringValue
	 */
	 getCategoryId() {
	 	return this.categoryId;
	 }
	
	/**
	 * @param categoryId StringValue The ID of the category whose subscribers should receive the email notification
	 */
	 setCategoryId(categoryId) {
	 	this.categoryId = categoryId;
	 }
	
	/**
	 * 
	 * @return CategoryUserProviderFilter
	 */
	 getCategoryUserFilter() {
	 	return this.categoryUserFilter;
	 }
	
	/**
	 * @param categoryUserFilter CategoryUserProviderFilter 
	 */
	 setCategoryUserFilter(categoryUserFilter) {
	 	this.categoryUserFilter = categoryUserFilter;
	 }
}
module.exports.EmailNotificationCategoryRecipientProvider = EmailNotificationCategoryRecipientProvider;

/**
 *
 */
class EmailNotificationParameter extends EventNotificationParameter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationParameter';
	}
}
module.exports.EmailNotificationParameter = EmailNotificationParameter;

/**
 *
 */
class EmailNotificationStaticRecipientJobData extends EmailNotificationRecipientJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationStaticRecipientJobData';
	}
	
	/**
	 * Email to emails and names
	 * @return array
	 */
	 getEmailRecipients() {
	 	return this.emailRecipients;
	 }
	
	/**
	 * @param emailRecipients array Email to emails and names
	 */
	 setEmailRecipients(emailRecipients) {
	 	this.emailRecipients = emailRecipients;
	 }
}
module.exports.EmailNotificationStaticRecipientJobData = EmailNotificationStaticRecipientJobData;

/**
 *
 */
class EmailNotificationStaticRecipientProvider extends EmailNotificationRecipientProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationStaticRecipientProvider';
	}
	
	/**
	 * Email to emails and names
	 * @return array
	 */
	 getEmailRecipients() {
	 	return this.emailRecipients;
	 }
	
	/**
	 * @param emailRecipients array Email to emails and names
	 */
	 setEmailRecipients(emailRecipients) {
	 	this.emailRecipients = emailRecipients;
	 }
}
module.exports.EmailNotificationStaticRecipientProvider = EmailNotificationStaticRecipientProvider;

/**
 *
 */
class EmailNotificationTemplate extends EventNotificationTemplate{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationTemplate';
	}
	
	/**
	 * Define the email body format
	 * @return string
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format string Define the email body format
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * Define the email subject
	 * @return string
	 */
	 getSubject() {
	 	return this.subject;
	 }
	
	/**
	 * @param subject string Define the email subject
	 */
	 setSubject(subject) {
	 	this.subject = subject;
	 }
	
	/**
	 * Define the email body content
	 * @return string
	 */
	 getBody() {
	 	return this.body;
	 }
	
	/**
	 * @param body string Define the email body content
	 */
	 setBody(body) {
	 	this.body = body;
	 }
	
	/**
	 * Define the email sender email
	 * @return string
	 */
	 getFromEmail() {
	 	return this.fromEmail;
	 }
	
	/**
	 * @param fromEmail string Define the email sender email
	 */
	 setFromEmail(fromEmail) {
	 	this.fromEmail = fromEmail;
	 }
	
	/**
	 * Define the email sender name
	 * @return string
	 */
	 getFromName() {
	 	return this.fromName;
	 }
	
	/**
	 * @param fromName string Define the email sender name
	 */
	 setFromName(fromName) {
	 	this.fromName = fromName;
	 }
	
	/**
	 * Email recipient emails and names
	 * @return EmailNotificationRecipientProvider
	 */
	 getTo() {
	 	return this.to;
	 }
	
	/**
	 * @param to EmailNotificationRecipientProvider Email recipient emails and names
	 */
	 setTo(to) {
	 	this.to = to;
	 }
	
	/**
	 * Email recipient emails and names
	 * @return EmailNotificationRecipientProvider
	 */
	 getCc() {
	 	return this.cc;
	 }
	
	/**
	 * @param cc EmailNotificationRecipientProvider Email recipient emails and names
	 */
	 setCc(cc) {
	 	this.cc = cc;
	 }
	
	/**
	 * Email recipient emails and names
	 * @return EmailNotificationRecipientProvider
	 */
	 getBcc() {
	 	return this.bcc;
	 }
	
	/**
	 * @param bcc EmailNotificationRecipientProvider Email recipient emails and names
	 */
	 setBcc(bcc) {
	 	this.bcc = bcc;
	 }
	
	/**
	 * Default email addresses to whom the reply should be sent
	 * @return EmailNotificationRecipientProvider
	 */
	 getReplyTo() {
	 	return this.replyTo;
	 }
	
	/**
	 * @param replyTo EmailNotificationRecipientProvider Default email addresses to whom the reply should be sent
	 */
	 setReplyTo(replyTo) {
	 	this.replyTo = replyTo;
	 }
	
	/**
	 * Define the email priority
	 * @return int
	 */
	 getPriority() {
	 	return this.priority;
	 }
	
	/**
	 * @param priority int Define the email priority
	 */
	 setPriority(priority) {
	 	this.priority = priority;
	 }
	
	/**
	 * Email address that a reading confirmation will be sent
	 * @return string
	 */
	 getConfirmReadingTo() {
	 	return this.confirmReadingTo;
	 }
	
	/**
	 * @param confirmReadingTo string Email address that a reading confirmation will be sent
	 */
	 setConfirmReadingTo(confirmReadingTo) {
	 	this.confirmReadingTo = confirmReadingTo;
	 }
	
	/**
	 * Hostname to use in Message-Id and Received headers and as default HELLO string.
 * If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'
	 * @return string
	 */
	 getHostname() {
	 	return this.hostname;
	 }
	
	/**
	 * @param hostname string Hostname to use in Message-Id and Received headers and as default HELLO string.
 * If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'
	 */
	 setHostname(hostname) {
	 	this.hostname = hostname;
	 }
	
	/**
	 * Sets the message ID to be used in the Message-Id header.
 * If empty, a unique id will be generated
	 * @return string
	 */
	 getMessageID() {
	 	return this.messageID;
	 }
	
	/**
	 * @param messageID string Sets the message ID to be used in the Message-Id header.
 * If empty, a unique id will be generated
	 */
	 setMessageID(messageID) {
	 	this.messageID = messageID;
	 }
	
	/**
	 * Adds a e-mail custom header
	 * @return array
	 */
	 getCustomHeaders() {
	 	return this.customHeaders;
	 }
	
	/**
	 * @param customHeaders array Adds a e-mail custom header
	 */
	 setCustomHeaders(customHeaders) {
	 	this.customHeaders = customHeaders;
	 }
}
module.exports.EmailNotificationTemplate = EmailNotificationTemplate;

/**
 *
 */
class UserBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual int 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getScreenNameLike() {
	 	return this.screenNameLike;
	 }
	
	/**
	 * @param screenNameLike string 
	 */
	 setScreenNameLike(screenNameLike) {
	 	this.screenNameLike = screenNameLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getScreenNameStartsWith() {
	 	return this.screenNameStartsWith;
	 }
	
	/**
	 * @param screenNameStartsWith string 
	 */
	 setScreenNameStartsWith(screenNameStartsWith) {
	 	this.screenNameStartsWith = screenNameStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEmailLike() {
	 	return this.emailLike;
	 }
	
	/**
	 * @param emailLike string 
	 */
	 setEmailLike(emailLike) {
	 	this.emailLike = emailLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEmailStartsWith() {
	 	return this.emailStartsWith;
	 }
	
	/**
	 * @param emailStartsWith string 
	 */
	 setEmailStartsWith(emailStartsWith) {
	 	this.emailStartsWith = emailStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFirstNameStartsWith() {
	 	return this.firstNameStartsWith;
	 }
	
	/**
	 * @param firstNameStartsWith string 
	 */
	 setFirstNameStartsWith(firstNameStartsWith) {
	 	this.firstNameStartsWith = firstNameStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLastNameStartsWith() {
	 	return this.lastNameStartsWith;
	 }
	
	/**
	 * @param lastNameStartsWith string 
	 */
	 setLastNameStartsWith(lastNameStartsWith) {
	 	this.lastNameStartsWith = lastNameStartsWith;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsAdminEqual() {
	 	return this.isAdminEqual;
	 }
	
	/**
	 * @param isAdminEqual int 
	 */
	 setIsAdminEqual(isAdminEqual) {
	 	this.isAdminEqual = isAdminEqual;
	 }
}
module.exports.UserBaseFilter = UserBaseFilter;

/**
 *
 */
class UserFilter extends UserBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdOrScreenNameStartsWith() {
	 	return this.idOrScreenNameStartsWith;
	 }
	
	/**
	 * @param idOrScreenNameStartsWith string 
	 */
	 setIdOrScreenNameStartsWith(idOrScreenNameStartsWith) {
	 	this.idOrScreenNameStartsWith = idOrScreenNameStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLoginEnabledEqual() {
	 	return this.loginEnabledEqual;
	 }
	
	/**
	 * @param loginEnabledEqual int 
	 */
	 setLoginEnabledEqual(loginEnabledEqual) {
	 	this.loginEnabledEqual = loginEnabledEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRoleIdEqual() {
	 	return this.roleIdEqual;
	 }
	
	/**
	 * @param roleIdEqual string 
	 */
	 setRoleIdEqual(roleIdEqual) {
	 	this.roleIdEqual = roleIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRoleIdsEqual() {
	 	return this.roleIdsEqual;
	 }
	
	/**
	 * @param roleIdsEqual string 
	 */
	 setRoleIdsEqual(roleIdsEqual) {
	 	this.roleIdsEqual = roleIdsEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRoleIdsIn() {
	 	return this.roleIdsIn;
	 }
	
	/**
	 * @param roleIdsIn string 
	 */
	 setRoleIdsIn(roleIdsIn) {
	 	this.roleIdsIn = roleIdsIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFirstNameOrLastNameStartsWith() {
	 	return this.firstNameOrLastNameStartsWith;
	 }
	
	/**
	 * @param firstNameOrLastNameStartsWith string 
	 */
	 setFirstNameOrLastNameStartsWith(firstNameOrLastNameStartsWith) {
	 	this.firstNameOrLastNameStartsWith = firstNameOrLastNameStartsWith;
	 }
	
	/**
	 * Permission names filter expression
	 * @return string
	 */
	 getPermissionNamesMultiLikeOr() {
	 	return this.permissionNamesMultiLikeOr;
	 }
	
	/**
	 * @param permissionNamesMultiLikeOr string Permission names filter expression
	 */
	 setPermissionNamesMultiLikeOr(permissionNamesMultiLikeOr) {
	 	this.permissionNamesMultiLikeOr = permissionNamesMultiLikeOr;
	 }
	
	/**
	 * Permission names filter expression
	 * @return string
	 */
	 getPermissionNamesMultiLikeAnd() {
	 	return this.permissionNamesMultiLikeAnd;
	 }
	
	/**
	 * @param permissionNamesMultiLikeAnd string Permission names filter expression
	 */
	 setPermissionNamesMultiLikeAnd(permissionNamesMultiLikeAnd) {
	 	this.permissionNamesMultiLikeAnd = permissionNamesMultiLikeAnd;
	 }
}
module.exports.UserFilter = UserFilter;

/**
 *
 */
class EmailNotificationUserRecipientJobData extends EmailNotificationRecipientJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationUserRecipientJobData';
	}
	
	/**
	 * 
	 * @return UserFilter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter UserFilter 
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
}
module.exports.EmailNotificationUserRecipientJobData = EmailNotificationUserRecipientJobData;

/**
 *
 */
class EmailNotificationUserRecipientProvider extends EmailNotificationRecipientProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationUserRecipientProvider';
	}
	
	/**
	 * 
	 * @return UserFilter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter UserFilter 
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
}
module.exports.EmailNotificationUserRecipientProvider = EmailNotificationUserRecipientProvider;

/**
 *
 */
class EntryCaptionAssetSearchItem extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryCaptionAssetSearchItem';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getContentLike() {
	 	return this.contentLike;
	 }
	
	/**
	 * @param contentLike string 
	 */
	 setContentLike(contentLike) {
	 	this.contentLike = contentLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentMultiLikeOr() {
	 	return this.contentMultiLikeOr;
	 }
	
	/**
	 * @param contentMultiLikeOr string 
	 */
	 setContentMultiLikeOr(contentMultiLikeOr) {
	 	this.contentMultiLikeOr = contentMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentMultiLikeAnd() {
	 	return this.contentMultiLikeAnd;
	 }
	
	/**
	 * @param contentMultiLikeAnd string 
	 */
	 setContentMultiLikeAnd(contentMultiLikeAnd) {
	 	this.contentMultiLikeAnd = contentMultiLikeAnd;
	 }
}
module.exports.EntryCaptionAssetSearchItem = EntryCaptionAssetSearchItem;

/**
 *
 */
class EntryContext extends Context{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryContext';
	}
	
	/**
	 * The entry ID in the context of which the playlist should be built
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string The entry ID in the context of which the playlist should be built
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * Is this a redirected entry followup?
	 * @return int
	 */
	 getFollowEntryRedirect() {
	 	return this.followEntryRedirect;
	 }
	
	/**
	 * @param followEntryRedirect int Is this a redirected entry followup?
	 */
	 setFollowEntryRedirect(followEntryRedirect) {
	 	this.followEntryRedirect = followEntryRedirect;
	 }
}
module.exports.EntryContext = EntryContext;

/**
 *
 */
class EntryContextDataParams extends AccessControlScope{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryContextDataParams';
	}
	
	/**
	 * Id of the current flavor
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string Id of the current flavor
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * The tags of the flavors that should be used for playback
	 * @return string
	 */
	 getFlavorTags() {
	 	return this.flavorTags;
	 }
	
	/**
	 * @param flavorTags string The tags of the flavors that should be used for playback
	 */
	 setFlavorTags(flavorTags) {
	 	this.flavorTags = flavorTags;
	 }
	
	/**
	 * Playback streamer type: RTMP, HTTP, appleHttps, rtsp, sl
	 * @return string
	 */
	 getStreamerType() {
	 	return this.streamerType;
	 }
	
	/**
	 * @param streamerType string Playback streamer type: RTMP, HTTP, appleHttps, rtsp, sl
	 */
	 setStreamerType(streamerType) {
	 	this.streamerType = streamerType;
	 }
	
	/**
	 * Protocol of the specific media object
	 * @return string
	 */
	 getMediaProtocol() {
	 	return this.mediaProtocol;
	 }
	
	/**
	 * @param mediaProtocol string Protocol of the specific media object
	 */
	 setMediaProtocol(mediaProtocol) {
	 	this.mediaProtocol = mediaProtocol;
	 }
}
module.exports.EntryContextDataParams = EntryContextDataParams;

/**
 *
 */
class EntryContextDataResult extends ContextDataResult{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryContextDataResult';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getIsSiteRestricted() {
	 	return this.isSiteRestricted;
	 }
	
	/**
	 * @param isSiteRestricted bool 
	 */
	 setIsSiteRestricted(isSiteRestricted) {
	 	this.isSiteRestricted = isSiteRestricted;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsCountryRestricted() {
	 	return this.isCountryRestricted;
	 }
	
	/**
	 * @param isCountryRestricted bool 
	 */
	 setIsCountryRestricted(isCountryRestricted) {
	 	this.isCountryRestricted = isCountryRestricted;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsSessionRestricted() {
	 	return this.isSessionRestricted;
	 }
	
	/**
	 * @param isSessionRestricted bool 
	 */
	 setIsSessionRestricted(isSessionRestricted) {
	 	this.isSessionRestricted = isSessionRestricted;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsIpAddressRestricted() {
	 	return this.isIpAddressRestricted;
	 }
	
	/**
	 * @param isIpAddressRestricted bool 
	 */
	 setIsIpAddressRestricted(isIpAddressRestricted) {
	 	this.isIpAddressRestricted = isIpAddressRestricted;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsUserAgentRestricted() {
	 	return this.isUserAgentRestricted;
	 }
	
	/**
	 * @param isUserAgentRestricted bool 
	 */
	 setIsUserAgentRestricted(isUserAgentRestricted) {
	 	this.isUserAgentRestricted = isUserAgentRestricted;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPreviewLength() {
	 	return this.previewLength;
	 }
	
	/**
	 * @param previewLength int 
	 */
	 setPreviewLength(previewLength) {
	 	this.previewLength = previewLength;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsScheduledNow() {
	 	return this.isScheduledNow;
	 }
	
	/**
	 * @param isScheduledNow bool 
	 */
	 setIsScheduledNow(isScheduledNow) {
	 	this.isScheduledNow = isScheduledNow;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsAdmin() {
	 	return this.isAdmin;
	 }
	
	/**
	 * @param isAdmin bool 
	 */
	 setIsAdmin(isAdmin) {
	 	this.isAdmin = isAdmin;
	 }
	
	/**
	 * http/rtmp/hdnetwork
	 * @return string
	 */
	 getStreamerType() {
	 	return this.streamerType;
	 }
	
	/**
	 * @param streamerType string http/rtmp/hdnetwork
	 */
	 setStreamerType(streamerType) {
	 	this.streamerType = streamerType;
	 }
	
	/**
	 * http/https, rtmp/rtmpe
	 * @return string
	 */
	 getMediaProtocol() {
	 	return this.mediaProtocol;
	 }
	
	/**
	 * @param mediaProtocol string http/https, rtmp/rtmpe
	 */
	 setMediaProtocol(mediaProtocol) {
	 	this.mediaProtocol = mediaProtocol;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStorageProfilesXML() {
	 	return this.storageProfilesXML;
	 }
	
	/**
	 * @param storageProfilesXML string 
	 */
	 setStorageProfilesXML(storageProfilesXML) {
	 	this.storageProfilesXML = storageProfilesXML;
	 }
	
	/**
	 * Array of messages as received from the access control rules that invalidated
	 * @return array
	 */
	 getAccessControlMessages() {
	 	return this.accessControlMessages;
	 }
	
	/**
	 * @param accessControlMessages array Array of messages as received from the access control rules that invalidated
	 */
	 setAccessControlMessages(accessControlMessages) {
	 	this.accessControlMessages = accessControlMessages;
	 }
	
	/**
	 * Array of actions as received from the access control rules that invalidated
	 * @return array
	 */
	 getAccessControlActions() {
	 	return this.accessControlActions;
	 }
	
	/**
	 * @param accessControlActions array Array of actions as received from the access control rules that invalidated
	 */
	 setAccessControlActions(accessControlActions) {
	 	this.accessControlActions = accessControlActions;
	 }
	
	/**
	 * Array of allowed flavor assets according to access control limitations and requested tags
	 * @return array
	 */
	 getFlavorAssets() {
	 	return this.flavorAssets;
	 }
	
	/**
	 * @param flavorAssets array Array of allowed flavor assets according to access control limitations and requested tags
	 */
	 setFlavorAssets(flavorAssets) {
	 	this.flavorAssets = flavorAssets;
	 }
	
	/**
	 * The duration of the entry in milliseconds
	 * @return int
	 */
	 getMsDuration() {
	 	return this.msDuration;
	 }
	
	/**
	 * @param msDuration int The duration of the entry in milliseconds
	 */
	 setMsDuration(msDuration) {
	 	this.msDuration = msDuration;
	 }
	
	/**
	 * Array of allowed flavor assets according to access control limitations and requested tags
	 * @return map
	 */
	 getPluginData() {
	 	return this.pluginData;
	 }
	
	/**
	 * @param pluginData map Array of allowed flavor assets according to access control limitations and requested tags
	 */
	 setPluginData(pluginData) {
	 	this.pluginData = pluginData;
	 }
}
module.exports.EntryContextDataResult = EntryContextDataResult;

/**
 *
 */
class EntryCuePointSearchFilter extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryCuePointSearchFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCuePointsFreeText() {
	 	return this.cuePointsFreeText;
	 }
	
	/**
	 * @param cuePointsFreeText string 
	 */
	 setCuePointsFreeText(cuePointsFreeText) {
	 	this.cuePointsFreeText = cuePointsFreeText;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCuePointTypeIn() {
	 	return this.cuePointTypeIn;
	 }
	
	/**
	 * @param cuePointTypeIn string 
	 */
	 setCuePointTypeIn(cuePointTypeIn) {
	 	this.cuePointTypeIn = cuePointTypeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCuePointSubTypeEqual() {
	 	return this.cuePointSubTypeEqual;
	 }
	
	/**
	 * @param cuePointSubTypeEqual int 
	 */
	 setCuePointSubTypeEqual(cuePointSubTypeEqual) {
	 	this.cuePointSubTypeEqual = cuePointSubTypeEqual;
	 }
}
module.exports.EntryCuePointSearchFilter = EntryCuePointSearchFilter;

/**
 *
 */
class EntryDistributionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryDistributionListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.EntryDistributionListResponse = EntryDistributionListResponse;

/**
 *
 */
class EntryIdentifier extends ObjectIdentifier{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryIdentifier';
	}
	
	/**
	 * Identifier of the object
	 * @return string
	 */
	 getIdentifier() {
	 	return this.identifier;
	 }
	
	/**
	 * @param identifier string Identifier of the object
	 */
	 setIdentifier(identifier) {
	 	this.identifier = identifier;
	 }
}
module.exports.EntryIdentifier = EntryIdentifier;

/**
 *
 */
class EntryLiveStats extends LiveStats{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryLiveStats';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPeakAudience() {
	 	return this.peakAudience;
	 }
	
	/**
	 * @param peakAudience int 
	 */
	 setPeakAudience(peakAudience) {
	 	this.peakAudience = peakAudience;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPeakDvrAudience() {
	 	return this.peakDvrAudience;
	 }
	
	/**
	 * @param peakDvrAudience int 
	 */
	 setPeakDvrAudience(peakDvrAudience) {
	 	this.peakDvrAudience = peakDvrAudience;
	 }
}
module.exports.EntryLiveStats = EntryLiveStats;

/**
 *
 */
class EntryScheduleEvent extends ScheduleEvent{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryScheduleEvent';
	}
	
	/**
	 * Entry to be used as template during content ingestion
	 * @return string
	 */
	 getTemplateEntryId() {
	 	return this.templateEntryId;
	 }
	
	/**
	 * @param templateEntryId string Entry to be used as template during content ingestion
	 */
	 setTemplateEntryId(templateEntryId) {
	 	this.templateEntryId = templateEntryId;
	 }
	
	/**
	 * Entries that associated with this event
	 * @return string
	 */
	 getEntryIds() {
	 	return this.entryIds;
	 }
	
	/**
	 * @param entryIds string Entries that associated with this event
	 */
	 setEntryIds(entryIds) {
	 	this.entryIds = entryIds;
	 }
	
	/**
	 * Categories that associated with this event
	 * @return string
	 */
	 getCategoryIds() {
	 	return this.categoryIds;
	 }
	
	/**
	 * @param categoryIds string Categories that associated with this event
	 */
	 setCategoryIds(categoryIds) {
	 	this.categoryIds = categoryIds;
	 }
}
module.exports.EntryScheduleEvent = EntryScheduleEvent;

/**
 *
 */
class EntryServerNodeListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryServerNodeListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.EntryServerNodeListResponse = EntryServerNodeListResponse;

/**
 *
 */
class EntryTranscriptAssetSearchItem extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryTranscriptAssetSearchItem';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getContentLike() {
	 	return this.contentLike;
	 }
	
	/**
	 * @param contentLike string 
	 */
	 setContentLike(contentLike) {
	 	this.contentLike = contentLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentMultiLikeOr() {
	 	return this.contentMultiLikeOr;
	 }
	
	/**
	 * @param contentMultiLikeOr string 
	 */
	 setContentMultiLikeOr(contentMultiLikeOr) {
	 	this.contentMultiLikeOr = contentMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getContentMultiLikeAnd() {
	 	return this.contentMultiLikeAnd;
	 }
	
	/**
	 * @param contentMultiLikeAnd string 
	 */
	 setContentMultiLikeAnd(contentMultiLikeAnd) {
	 	this.contentMultiLikeAnd = contentMultiLikeAnd;
	 }
}
module.exports.EntryTranscriptAssetSearchItem = EntryTranscriptAssetSearchItem;

/**
 *
 */
class EventCuePoint extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventCuePoint';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEventType() {
	 	return this.eventType;
	 }
	
	/**
	 * @param eventType string 
	 */
	 setEventType(eventType) {
	 	this.eventType = eventType;
	 }
}
module.exports.EventCuePoint = EventCuePoint;

/**
 *
 */
class BooleanField extends BooleanValue{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBooleanField';
	}
}
module.exports.BooleanField = BooleanField;

/**
 *
 */
class EventFieldCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventFieldCondition';
	}
	
	/**
	 * The field to be evaluated at runtime
	 * @return BooleanField
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field BooleanField The field to be evaluated at runtime
	 */
	 setField(field) {
	 	this.field = field;
	 }
}
module.exports.EventFieldCondition = EventFieldCondition;

/**
 *
 */
class EventNotificationArrayParameter extends EventNotificationParameter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationArrayParameter';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getValues() {
	 	return this.values;
	 }
	
	/**
	 * @param values array 
	 */
	 setValues(values) {
	 	this.values = values;
	 }
	
	/**
	 * Used to restrict the values to close list
	 * @return array
	 */
	 getAllowedValues() {
	 	return this.allowedValues;
	 }
	
	/**
	 * @param allowedValues array Used to restrict the values to close list
	 */
	 setAllowedValues(allowedValues) {
	 	this.allowedValues = allowedValues;
	 }
}
module.exports.EventNotificationArrayParameter = EventNotificationArrayParameter;

/**
 *
 */
class EventNotificationDispatchJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationDispatchJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getTemplateId() {
	 	return this.templateId;
	 }
	
	/**
	 * @param templateId int 
	 */
	 setTemplateId(templateId) {
	 	this.templateId = templateId;
	 }
	
	/**
	 * Define the content dynamic parameters
	 * @return array
	 */
	 getContentParameters() {
	 	return this.contentParameters;
	 }
	
	/**
	 * @param contentParameters array Define the content dynamic parameters
	 */
	 setContentParameters(contentParameters) {
	 	this.contentParameters = contentParameters;
	 }
}
module.exports.EventNotificationDispatchJobData = EventNotificationDispatchJobData;

/**
 *
 */
class EventNotificationScope extends Scope{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationScope';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string 
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getScopeObjectType() {
	 	return this.scopeObjectType;
	 }
	
	/**
	 * @param scopeObjectType string 
	 */
	 setScopeObjectType(scopeObjectType) {
	 	this.scopeObjectType = scopeObjectType;
	 }
}
module.exports.EventNotificationScope = EventNotificationScope;

/**
 *
 */
class EventNotificationTemplateBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationTemplateBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.EventNotificationTemplateBaseFilter = EventNotificationTemplateBaseFilter;

/**
 *
 */
class EventNotificationTemplateListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationTemplateListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.EventNotificationTemplateListResponse = EventNotificationTemplateListResponse;

/**
 *
 */
class EventObjectChangedCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventObjectChangedCondition';
	}
	
	/**
	 * Comma seperated column names to be tested
	 * @return string
	 */
	 getModifiedColumns() {
	 	return this.modifiedColumns;
	 }
	
	/**
	 * @param modifiedColumns string Comma seperated column names to be tested
	 */
	 setModifiedColumns(modifiedColumns) {
	 	this.modifiedColumns = modifiedColumns;
	 }
}
module.exports.EventObjectChangedCondition = EventObjectChangedCondition;

/**
 *
 */
class ExecuteMetadataXsltObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExecuteMetadataXsltObjectTask';
	}
	
	/**
	 * Metadata profile id to lookup the metadata object
	 * @return int
	 */
	 getMetadataProfileId() {
	 	return this.metadataProfileId;
	 }
	
	/**
	 * @param metadataProfileId int Metadata profile id to lookup the metadata object
	 */
	 setMetadataProfileId(metadataProfileId) {
	 	this.metadataProfileId = metadataProfileId;
	 }
	
	/**
	 * Metadata object type to lookup the metadata object
	 * @return string
	 */
	 getMetadataObjectType() {
	 	return this.metadataObjectType;
	 }
	
	/**
	 * @param metadataObjectType string Metadata object type to lookup the metadata object
	 */
	 setMetadataObjectType(metadataObjectType) {
	 	this.metadataObjectType = metadataObjectType;
	 }
	
	/**
	 * The XSLT to execute
	 * @return string
	 */
	 getXslt() {
	 	return this.xslt;
	 }
	
	/**
	 * @param xslt string The XSLT to execute
	 */
	 setXslt(xslt) {
	 	this.xslt = xslt;
	 }
}
module.exports.ExecuteMetadataXsltObjectTask = ExecuteMetadataXsltObjectTask;

/**
 *
 */
class ExternalMediaEntryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalMediaEntryListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ExternalMediaEntryListResponse = ExternalMediaEntryListResponse;

/**
 *
 */
class FacebookDistributionProvider extends DistributionProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookDistributionProvider';
	}
}
module.exports.FacebookDistributionProvider = FacebookDistributionProvider;

/**
 *
 */
class FeatureStatusListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeatureStatusListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.FeatureStatusListResponse = FeatureStatusListResponse;

/**
 *
 */
class FeedDropFolder extends DropFolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeedDropFolder';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getItemHandlingLimit() {
	 	return this.itemHandlingLimit;
	 }
	
	/**
	 * @param itemHandlingLimit int 
	 */
	 setItemHandlingLimit(itemHandlingLimit) {
	 	this.itemHandlingLimit = itemHandlingLimit;
	 }
	
	/**
	 * 
	 * @return FeedItemInfo
	 */
	 getFeedItemInfo() {
	 	return this.feedItemInfo;
	 }
	
	/**
	 * @param feedItemInfo FeedItemInfo 
	 */
	 setFeedItemInfo(feedItemInfo) {
	 	this.feedItemInfo = feedItemInfo;
	 }
}
module.exports.FeedDropFolder = FeedDropFolder;

/**
 *
 */
class FeedDropFolderFile extends DropFolderFile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeedDropFolderFile';
	}
	
	/**
	 * MD5 or Sha1 encrypted string
	 * @return string
	 */
	 getHash() {
	 	return this.hash;
	 }
	
	/**
	 * @param hash string MD5 or Sha1 encrypted string
	 */
	 setHash(hash) {
	 	this.hash = hash;
	 }
	
	/**
	 * Path of the original Feed content XML
	 * @return string
	 */
	 getFeedXmlPath() {
	 	return this.feedXmlPath;
	 }
	
	/**
	 * @param feedXmlPath string Path of the original Feed content XML
	 */
	 setFeedXmlPath(feedXmlPath) {
	 	this.feedXmlPath = feedXmlPath;
	 }
}
module.exports.FeedDropFolderFile = FeedDropFolderFile;

/**
 *
 */
class FileAssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileAssetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.FileAssetListResponse = FileAssetListResponse;

/**
 *
 */
class FileSyncBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileSyncBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileObjectTypeEqual() {
	 	return this.fileObjectTypeEqual;
	 }
	
	/**
	 * @param fileObjectTypeEqual string 
	 */
	 setFileObjectTypeEqual(fileObjectTypeEqual) {
	 	this.fileObjectTypeEqual = fileObjectTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileObjectTypeIn() {
	 	return this.fileObjectTypeIn;
	 }
	
	/**
	 * @param fileObjectTypeIn string 
	 */
	 setFileObjectTypeIn(fileObjectTypeIn) {
	 	this.fileObjectTypeIn = fileObjectTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectIdEqual() {
	 	return this.objectIdEqual;
	 }
	
	/**
	 * @param objectIdEqual string 
	 */
	 setObjectIdEqual(objectIdEqual) {
	 	this.objectIdEqual = objectIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectIdIn() {
	 	return this.objectIdIn;
	 }
	
	/**
	 * @param objectIdIn string 
	 */
	 setObjectIdIn(objectIdIn) {
	 	this.objectIdIn = objectIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionEqual() {
	 	return this.versionEqual;
	 }
	
	/**
	 * @param versionEqual string 
	 */
	 setVersionEqual(versionEqual) {
	 	this.versionEqual = versionEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionIn() {
	 	return this.versionIn;
	 }
	
	/**
	 * @param versionIn string 
	 */
	 setVersionIn(versionIn) {
	 	this.versionIn = versionIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getObjectSubTypeEqual() {
	 	return this.objectSubTypeEqual;
	 }
	
	/**
	 * @param objectSubTypeEqual int 
	 */
	 setObjectSubTypeEqual(objectSubTypeEqual) {
	 	this.objectSubTypeEqual = objectSubTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectSubTypeIn() {
	 	return this.objectSubTypeIn;
	 }
	
	/**
	 * @param objectSubTypeIn string 
	 */
	 setObjectSubTypeIn(objectSubTypeIn) {
	 	this.objectSubTypeIn = objectSubTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDcEqual() {
	 	return this.dcEqual;
	 }
	
	/**
	 * @param dcEqual string 
	 */
	 setDcEqual(dcEqual) {
	 	this.dcEqual = dcEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDcIn() {
	 	return this.dcIn;
	 }
	
	/**
	 * @param dcIn string 
	 */
	 setDcIn(dcIn) {
	 	this.dcIn = dcIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getOriginalEqual() {
	 	return this.originalEqual;
	 }
	
	/**
	 * @param originalEqual int 
	 */
	 setOriginalEqual(originalEqual) {
	 	this.originalEqual = originalEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyAtGreaterThanOrEqual() {
	 	return this.readyAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param readyAtGreaterThanOrEqual int 
	 */
	 setReadyAtGreaterThanOrEqual(readyAtGreaterThanOrEqual) {
	 	this.readyAtGreaterThanOrEqual = readyAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyAtLessThanOrEqual() {
	 	return this.readyAtLessThanOrEqual;
	 }
	
	/**
	 * @param readyAtLessThanOrEqual int 
	 */
	 setReadyAtLessThanOrEqual(readyAtLessThanOrEqual) {
	 	this.readyAtLessThanOrEqual = readyAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSyncTimeGreaterThanOrEqual() {
	 	return this.syncTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param syncTimeGreaterThanOrEqual int 
	 */
	 setSyncTimeGreaterThanOrEqual(syncTimeGreaterThanOrEqual) {
	 	this.syncTimeGreaterThanOrEqual = syncTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSyncTimeLessThanOrEqual() {
	 	return this.syncTimeLessThanOrEqual;
	 }
	
	/**
	 * @param syncTimeLessThanOrEqual int 
	 */
	 setSyncTimeLessThanOrEqual(syncTimeLessThanOrEqual) {
	 	this.syncTimeLessThanOrEqual = syncTimeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileTypeEqual() {
	 	return this.fileTypeEqual;
	 }
	
	/**
	 * @param fileTypeEqual int 
	 */
	 setFileTypeEqual(fileTypeEqual) {
	 	this.fileTypeEqual = fileTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileTypeIn() {
	 	return this.fileTypeIn;
	 }
	
	/**
	 * @param fileTypeIn string 
	 */
	 setFileTypeIn(fileTypeIn) {
	 	this.fileTypeIn = fileTypeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLinkedIdEqual() {
	 	return this.linkedIdEqual;
	 }
	
	/**
	 * @param linkedIdEqual int 
	 */
	 setLinkedIdEqual(linkedIdEqual) {
	 	this.linkedIdEqual = linkedIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLinkCountGreaterThanOrEqual() {
	 	return this.linkCountGreaterThanOrEqual;
	 }
	
	/**
	 * @param linkCountGreaterThanOrEqual int 
	 */
	 setLinkCountGreaterThanOrEqual(linkCountGreaterThanOrEqual) {
	 	this.linkCountGreaterThanOrEqual = linkCountGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLinkCountLessThanOrEqual() {
	 	return this.linkCountLessThanOrEqual;
	 }
	
	/**
	 * @param linkCountLessThanOrEqual int 
	 */
	 setLinkCountLessThanOrEqual(linkCountLessThanOrEqual) {
	 	this.linkCountLessThanOrEqual = linkCountLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getFileSizeGreaterThanOrEqual() {
	 	return this.fileSizeGreaterThanOrEqual;
	 }
	
	/**
	 * @param fileSizeGreaterThanOrEqual float 
	 */
	 setFileSizeGreaterThanOrEqual(fileSizeGreaterThanOrEqual) {
	 	this.fileSizeGreaterThanOrEqual = fileSizeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getFileSizeLessThanOrEqual() {
	 	return this.fileSizeLessThanOrEqual;
	 }
	
	/**
	 * @param fileSizeLessThanOrEqual float 
	 */
	 setFileSizeLessThanOrEqual(fileSizeLessThanOrEqual) {
	 	this.fileSizeLessThanOrEqual = fileSizeLessThanOrEqual;
	 }
}
module.exports.FileSyncBaseFilter = FileSyncBaseFilter;

/**
 *
 */
class FlattenJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlattenJobData';
	}
}
module.exports.FlattenJobData = FlattenJobData;

/**
 *
 */
class FlavorAssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorAssetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.FlavorAssetListResponse = FlavorAssetListResponse;

/**
 *
 */
class FlavorParamsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFlavorParamsListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.FlavorParamsListResponse = FlavorParamsListResponse;

/**
 *
 */
class GenericDistributionJobProviderData extends DistributionJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionJobProviderData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getXml() {
	 	return this.xml;
	 }
	
	/**
	 * @param xml string 
	 */
	 setXml(xml) {
	 	this.xml = xml;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResultParseData() {
	 	return this.resultParseData;
	 }
	
	/**
	 * @param resultParseData string 
	 */
	 setResultParseData(resultParseData) {
	 	this.resultParseData = resultParseData;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getResultParserType() {
	 	return this.resultParserType;
	 }
	
	/**
	 * @param resultParserType int 
	 */
	 setResultParserType(resultParserType) {
	 	this.resultParserType = resultParserType;
	 }
}
module.exports.GenericDistributionJobProviderData = GenericDistributionJobProviderData;

/**
 *
 */
class GenericDistributionProfile extends DistributionProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProfile';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getGenericProviderId() {
	 	return this.genericProviderId;
	 }
	
	/**
	 * @param genericProviderId int 
	 */
	 setGenericProviderId(genericProviderId) {
	 	this.genericProviderId = genericProviderId;
	 }
	
	/**
	 * 
	 * @return GenericDistributionProfileAction
	 */
	 getSubmitAction() {
	 	return this.submitAction;
	 }
	
	/**
	 * @param submitAction GenericDistributionProfileAction 
	 */
	 setSubmitAction(submitAction) {
	 	this.submitAction = submitAction;
	 }
	
	/**
	 * 
	 * @return GenericDistributionProfileAction
	 */
	 getUpdateAction() {
	 	return this.updateAction;
	 }
	
	/**
	 * @param updateAction GenericDistributionProfileAction 
	 */
	 setUpdateAction(updateAction) {
	 	this.updateAction = updateAction;
	 }
	
	/**
	 * 
	 * @return GenericDistributionProfileAction
	 */
	 getDeleteAction() {
	 	return this.deleteAction;
	 }
	
	/**
	 * @param deleteAction GenericDistributionProfileAction 
	 */
	 setDeleteAction(deleteAction) {
	 	this.deleteAction = deleteAction;
	 }
	
	/**
	 * 
	 * @return GenericDistributionProfileAction
	 */
	 getFetchReportAction() {
	 	return this.fetchReportAction;
	 }
	
	/**
	 * @param fetchReportAction GenericDistributionProfileAction 
	 */
	 setFetchReportAction(fetchReportAction) {
	 	this.fetchReportAction = fetchReportAction;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUpdateRequiredEntryFields() {
	 	return this.updateRequiredEntryFields;
	 }
	
	/**
	 * @param updateRequiredEntryFields string 
	 */
	 setUpdateRequiredEntryFields(updateRequiredEntryFields) {
	 	this.updateRequiredEntryFields = updateRequiredEntryFields;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUpdateRequiredMetadataXPaths() {
	 	return this.updateRequiredMetadataXPaths;
	 }
	
	/**
	 * @param updateRequiredMetadataXPaths string 
	 */
	 setUpdateRequiredMetadataXPaths(updateRequiredMetadataXPaths) {
	 	this.updateRequiredMetadataXPaths = updateRequiredMetadataXPaths;
	 }
}
module.exports.GenericDistributionProfile = GenericDistributionProfile;

/**
 *
 */
class GenericDistributionProviderActionBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProviderActionBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getGenericDistributionProviderIdEqual() {
	 	return this.genericDistributionProviderIdEqual;
	 }
	
	/**
	 * @param genericDistributionProviderIdEqual int 
	 */
	 setGenericDistributionProviderIdEqual(genericDistributionProviderIdEqual) {
	 	this.genericDistributionProviderIdEqual = genericDistributionProviderIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGenericDistributionProviderIdIn() {
	 	return this.genericDistributionProviderIdIn;
	 }
	
	/**
	 * @param genericDistributionProviderIdIn string 
	 */
	 setGenericDistributionProviderIdIn(genericDistributionProviderIdIn) {
	 	this.genericDistributionProviderIdIn = genericDistributionProviderIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getActionEqual() {
	 	return this.actionEqual;
	 }
	
	/**
	 * @param actionEqual int 
	 */
	 setActionEqual(actionEqual) {
	 	this.actionEqual = actionEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getActionIn() {
	 	return this.actionIn;
	 }
	
	/**
	 * @param actionIn string 
	 */
	 setActionIn(actionIn) {
	 	this.actionIn = actionIn;
	 }
}
module.exports.GenericDistributionProviderActionBaseFilter = GenericDistributionProviderActionBaseFilter;

/**
 *
 */
class GenericDistributionProviderActionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProviderActionListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.GenericDistributionProviderActionListResponse = GenericDistributionProviderActionListResponse;

/**
 *
 */
class GenericDistributionProviderListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProviderListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.GenericDistributionProviderListResponse = GenericDistributionProviderListResponse;

/**
 *
 */
class GenericSyndicationFeed extends BaseSyndicationFeed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericSyndicationFeed';
	}
	
	/**
	 * feed description
	 * @return string
	 */
	 getFeedDescription() {
	 	return this.feedDescription;
	 }
	
	/**
	 * @param feedDescription string feed description
	 */
	 setFeedDescription(feedDescription) {
	 	this.feedDescription = feedDescription;
	 }
	
	/**
	 * feed landing page (i.e publisher website)
	 * @return string
	 */
	 getFeedLandingPage() {
	 	return this.feedLandingPage;
	 }
	
	/**
	 * @param feedLandingPage string feed landing page (i.e publisher website)
	 */
	 setFeedLandingPage(feedLandingPage) {
	 	this.feedLandingPage = feedLandingPage;
	 }
}
module.exports.GenericSyndicationFeed = GenericSyndicationFeed;

/**
 *
 */
class GoogleVideoSyndicationFeed extends BaseSyndicationFeed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGoogleVideoSyndicationFeed';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAdultContent() {
	 	return this.adultContent;
	 }
	
	/**
	 * @param adultContent string 
	 */
	 setAdultContent(adultContent) {
	 	this.adultContent = adultContent;
	 }
}
module.exports.GoogleVideoSyndicationFeed = GoogleVideoSyndicationFeed;

/**
 *
 */
class GroupUserListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGroupUserListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.GroupUserListResponse = GroupUserListResponse;

/**
 *
 */
class HashCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHashCondition';
	}
	
	/**
	 * hash name
	 * @return string
	 */
	 getHashName() {
	 	return this.hashName;
	 }
	
	/**
	 * @param hashName string hash name
	 */
	 setHashName(hashName) {
	 	this.hashName = hashName;
	 }
	
	/**
	 * hash secret
	 * @return string
	 */
	 getHashSecret() {
	 	return this.hashSecret;
	 }
	
	/**
	 * @param hashSecret string hash secret
	 */
	 setHashSecret(hashSecret) {
	 	this.hashSecret = hashSecret;
	 }
}
module.exports.HashCondition = HashCondition;

/**
 *
 */
class HttpNotificationDataFields extends HttpNotificationData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationDataFields';
	}
}
module.exports.HttpNotificationDataFields = HttpNotificationDataFields;

/**
 *
 */
class HttpNotificationDataText extends HttpNotificationData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationDataText';
	}
	
	/**
	 * 
	 * @return StringValue
	 */
	 getContent() {
	 	return this.content;
	 }
	
	/**
	 * @param content StringValue 
	 */
	 setContent(content) {
	 	this.content = content;
	 }
}
module.exports.HttpNotificationDataText = HttpNotificationDataText;

/**
 *
 */
class HttpNotificationObjectData extends HttpNotificationData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationObjectData';
	}
	
	/**
	 * Kaltura API object type
	 * @return string
	 */
	 getApiObjectType() {
	 	return this.apiObjectType;
	 }
	
	/**
	 * @param apiObjectType string Kaltura API object type
	 */
	 setApiObjectType(apiObjectType) {
	 	this.apiObjectType = apiObjectType;
	 }
	
	/**
	 * Data format
	 * @return int
	 */
	 getFormat() {
	 	return this.format;
	 }
	
	/**
	 * @param format int Data format
	 */
	 setFormat(format) {
	 	this.format = format;
	 }
	
	/**
	 * Ignore null attributes during serialization
	 * @return bool
	 */
	 getIgnoreNull() {
	 	return this.ignoreNull;
	 }
	
	/**
	 * @param ignoreNull bool Ignore null attributes during serialization
	 */
	 setIgnoreNull(ignoreNull) {
	 	this.ignoreNull = ignoreNull;
	 }
	
	/**
	 * PHP code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string PHP code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.HttpNotificationObjectData = HttpNotificationObjectData;

/**
 *
 */
class HttpNotificationTemplate extends EventNotificationTemplate{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationTemplate';
	}
	
	/**
	 * Remote server URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string Remote server URL
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Request method
	 * @return int
	 */
	 getMethod() {
	 	return this.method;
	 }
	
	/**
	 * @param method int Request method
	 */
	 setMethod(method) {
	 	this.method = method;
	 }
	
	/**
	 * Data to send
	 * @return HttpNotificationData
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data HttpNotificationData Data to send
	 */
	 setData(data) {
	 	this.data = data;
	 }
	
	/**
	 * The maximum number of seconds to allow cURL functions to execute
	 * @return int
	 */
	 getTimeout() {
	 	return this.timeout;
	 }
	
	/**
	 * @param timeout int The maximum number of seconds to allow cURL functions to execute
	 */
	 setTimeout(timeout) {
	 	this.timeout = timeout;
	 }
	
	/**
	 * The number of seconds to wait while trying to connect.
 * Must be larger than zero
	 * @return int
	 */
	 getConnectTimeout() {
	 	return this.connectTimeout;
	 }
	
	/**
	 * @param connectTimeout int The number of seconds to wait while trying to connect.
 * Must be larger than zero
	 */
	 setConnectTimeout(connectTimeout) {
	 	this.connectTimeout = connectTimeout;
	 }
	
	/**
	 * A username to use for the connection
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string A username to use for the connection
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * A password to use for the connection
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string A password to use for the connection
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * The HTTP authentication method to use
	 * @return int
	 */
	 getAuthenticationMethod() {
	 	return this.authenticationMethod;
	 }
	
	/**
	 * @param authenticationMethod int The HTTP authentication method to use
	 */
	 setAuthenticationMethod(authenticationMethod) {
	 	this.authenticationMethod = authenticationMethod;
	 }
	
	/**
	 * The SSL version (2 or 3) to use.
 * By default PHP will try to determine this itself, although in some cases this must be set manually
	 * @return int
	 */
	 getSslVersion() {
	 	return this.sslVersion;
	 }
	
	/**
	 * @param sslVersion int The SSL version (2 or 3) to use.
 * By default PHP will try to determine this itself, although in some cases this must be set manually
	 */
	 setSslVersion(sslVersion) {
	 	this.sslVersion = sslVersion;
	 }
	
	/**
	 * SSL certificate to verify the peer with
	 * @return string
	 */
	 getSslCertificate() {
	 	return this.sslCertificate;
	 }
	
	/**
	 * @param sslCertificate string SSL certificate to verify the peer with
	 */
	 setSslCertificate(sslCertificate) {
	 	this.sslCertificate = sslCertificate;
	 }
	
	/**
	 * The format of the certificate
	 * @return string
	 */
	 getSslCertificateType() {
	 	return this.sslCertificateType;
	 }
	
	/**
	 * @param sslCertificateType string The format of the certificate
	 */
	 setSslCertificateType(sslCertificateType) {
	 	this.sslCertificateType = sslCertificateType;
	 }
	
	/**
	 * The password required to use the certificate
	 * @return string
	 */
	 getSslCertificatePassword() {
	 	return this.sslCertificatePassword;
	 }
	
	/**
	 * @param sslCertificatePassword string The password required to use the certificate
	 */
	 setSslCertificatePassword(sslCertificatePassword) {
	 	this.sslCertificatePassword = sslCertificatePassword;
	 }
	
	/**
	 * The identifier for the crypto engine of the private SSL key specified in ssl key
	 * @return string
	 */
	 getSslEngine() {
	 	return this.sslEngine;
	 }
	
	/**
	 * @param sslEngine string The identifier for the crypto engine of the private SSL key specified in ssl key
	 */
	 setSslEngine(sslEngine) {
	 	this.sslEngine = sslEngine;
	 }
	
	/**
	 * The identifier for the crypto engine used for asymmetric crypto operations
	 * @return string
	 */
	 getSslEngineDefault() {
	 	return this.sslEngineDefault;
	 }
	
	/**
	 * @param sslEngineDefault string The identifier for the crypto engine used for asymmetric crypto operations
	 */
	 setSslEngineDefault(sslEngineDefault) {
	 	this.sslEngineDefault = sslEngineDefault;
	 }
	
	/**
	 * The key type of the private SSL key specified in ssl key - PEM / DER / ENG
	 * @return string
	 */
	 getSslKeyType() {
	 	return this.sslKeyType;
	 }
	
	/**
	 * @param sslKeyType string The key type of the private SSL key specified in ssl key - PEM / DER / ENG
	 */
	 setSslKeyType(sslKeyType) {
	 	this.sslKeyType = sslKeyType;
	 }
	
	/**
	 * Private SSL key
	 * @return string
	 */
	 getSslKey() {
	 	return this.sslKey;
	 }
	
	/**
	 * @param sslKey string Private SSL key
	 */
	 setSslKey(sslKey) {
	 	this.sslKey = sslKey;
	 }
	
	/**
	 * The secret password needed to use the private SSL key specified in ssl key
	 * @return string
	 */
	 getSslKeyPassword() {
	 	return this.sslKeyPassword;
	 }
	
	/**
	 * @param sslKeyPassword string The secret password needed to use the private SSL key specified in ssl key
	 */
	 setSslKeyPassword(sslKeyPassword) {
	 	this.sslKeyPassword = sslKeyPassword;
	 }
	
	/**
	 * Adds a e-mail custom header
	 * @return array
	 */
	 getCustomHeaders() {
	 	return this.customHeaders;
	 }
	
	/**
	 * @param customHeaders array Adds a e-mail custom header
	 */
	 setCustomHeaders(customHeaders) {
	 	this.customHeaders = customHeaders;
	 }
}
module.exports.HttpNotificationTemplate = HttpNotificationTemplate;

/**
 *
 */
class ITunesSyndicationFeed extends BaseSyndicationFeed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaITunesSyndicationFeed';
	}
	
	/**
	 * feed description
	 * @return string
	 */
	 getFeedDescription() {
	 	return this.feedDescription;
	 }
	
	/**
	 * @param feedDescription string feed description
	 */
	 setFeedDescription(feedDescription) {
	 	this.feedDescription = feedDescription;
	 }
	
	/**
	 * feed language
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string feed language
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * feed landing page (i.e publisher website)
	 * @return string
	 */
	 getFeedLandingPage() {
	 	return this.feedLandingPage;
	 }
	
	/**
	 * @param feedLandingPage string feed landing page (i.e publisher website)
	 */
	 setFeedLandingPage(feedLandingPage) {
	 	this.feedLandingPage = feedLandingPage;
	 }
	
	/**
	 * author/publisher name
	 * @return string
	 */
	 getOwnerName() {
	 	return this.ownerName;
	 }
	
	/**
	 * @param ownerName string author/publisher name
	 */
	 setOwnerName(ownerName) {
	 	this.ownerName = ownerName;
	 }
	
	/**
	 * publisher email
	 * @return string
	 */
	 getOwnerEmail() {
	 	return this.ownerEmail;
	 }
	
	/**
	 * @param ownerEmail string publisher email
	 */
	 setOwnerEmail(ownerEmail) {
	 	this.ownerEmail = ownerEmail;
	 }
	
	/**
	 * podcast thumbnail
	 * @return string
	 */
	 getFeedImageUrl() {
	 	return this.feedImageUrl;
	 }
	
	/**
	 * @param feedImageUrl string podcast thumbnail
	 */
	 setFeedImageUrl(feedImageUrl) {
	 	this.feedImageUrl = feedImageUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategory() {
	 	return this.category;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAdultContent() {
	 	return this.adultContent;
	 }
	
	/**
	 * @param adultContent string 
	 */
	 setAdultContent(adultContent) {
	 	this.adultContent = adultContent;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFeedAuthor() {
	 	return this.feedAuthor;
	 }
	
	/**
	 * @param feedAuthor string 
	 */
	 setFeedAuthor(feedAuthor) {
	 	this.feedAuthor = feedAuthor;
	 }
	
	/**
	 * true in case you want to enfore the palylist order on the
	 * @return int
	 */
	 getEnforceOrder() {
	 	return this.enforceOrder;
	 }
	
	/**
	 * @param enforceOrder int true in case you want to enfore the palylist order on the
	 */
	 setEnforceOrder(enforceOrder) {
	 	this.enforceOrder = enforceOrder;
	 }
}
module.exports.ITunesSyndicationFeed = ITunesSyndicationFeed;

/**
 *
 */
class IdeticDistributionProvider extends DistributionProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIdeticDistributionProvider';
	}
}
module.exports.IdeticDistributionProvider = IdeticDistributionProvider;

/**
 *
 */
class ImportJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImportJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileUrl() {
	 	return this.srcFileUrl;
	 }
	
	/**
	 * @param srcFileUrl string 
	 */
	 setSrcFileUrl(srcFileUrl) {
	 	this.srcFileUrl = srcFileUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileLocalPath() {
	 	return this.destFileLocalPath;
	 }
	
	/**
	 * @param destFileLocalPath string 
	 */
	 setDestFileLocalPath(destFileLocalPath) {
	 	this.destFileLocalPath = destFileLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getFileSize() {
	 	return this.fileSize;
	 }
	
	/**
	 * @param fileSize int 
	 */
	 setFileSize(fileSize) {
	 	this.fileSize = fileSize;
	 }
}
module.exports.ImportJobData = ImportJobData;

/**
 *
 */
class ImportMetadataJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImportMetadataJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileUrl() {
	 	return this.srcFileUrl;
	 }
	
	/**
	 * @param srcFileUrl string 
	 */
	 setSrcFileUrl(srcFileUrl) {
	 	this.srcFileUrl = srcFileUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileLocalPath() {
	 	return this.destFileLocalPath;
	 }
	
	/**
	 * @param destFileLocalPath string 
	 */
	 setDestFileLocalPath(destFileLocalPath) {
	 	this.destFileLocalPath = destFileLocalPath;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataId() {
	 	return this.metadataId;
	 }
	
	/**
	 * @param metadataId int 
	 */
	 setMetadataId(metadataId) {
	 	this.metadataId = metadataId;
	 }
}
module.exports.ImportMetadataJobData = ImportMetadataJobData;

/**
 *
 */
class IndexAdvancedFilter extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIndexAdvancedFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIndexIdGreaterThan() {
	 	return this.indexIdGreaterThan;
	 }
	
	/**
	 * @param indexIdGreaterThan int 
	 */
	 setIndexIdGreaterThan(indexIdGreaterThan) {
	 	this.indexIdGreaterThan = indexIdGreaterThan;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDepthGreaterThanEqual() {
	 	return this.depthGreaterThanEqual;
	 }
	
	/**
	 * @param depthGreaterThanEqual int 
	 */
	 setDepthGreaterThanEqual(depthGreaterThanEqual) {
	 	this.depthGreaterThanEqual = depthGreaterThanEqual;
	 }
}
module.exports.IndexAdvancedFilter = IndexAdvancedFilter;

/**
 *
 */
class IndexJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIndexJobData';
	}
	
	/**
	 * The filter should return the list of objects that need to be reindexed
	 * @return Filter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter Filter The filter should return the list of objects that need to be reindexed
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * Indicates the last id that reindexed, used when the batch crached, to re-run from the last crash point
	 * @return int
	 */
	 getLastIndexId() {
	 	return this.lastIndexId;
	 }
	
	/**
	 * @param lastIndexId int Indicates the last id that reindexed, used when the batch crached, to re-run from the last crash point
	 */
	 setLastIndexId(lastIndexId) {
	 	this.lastIndexId = lastIndexId;
	 }
	
	/**
	 * Indicates the last depth that reindexed, used when the batch crached, to re-run from the last crash point
	 * @return int
	 */
	 getLastIndexDepth() {
	 	return this.lastIndexDepth;
	 }
	
	/**
	 * @param lastIndexDepth int Indicates the last depth that reindexed, used when the batch crached, to re-run from the last crash point
	 */
	 setLastIndexDepth(lastIndexDepth) {
	 	this.lastIndexDepth = lastIndexDepth;
	 }
	
	/**
	 * Indicates that the object columns and attributes values should be recalculated before reindexed
	 * @return bool
	 */
	 getShouldUpdate() {
	 	return this.shouldUpdate;
	 }
	
	/**
	 * @param shouldUpdate bool Indicates that the object columns and attributes values should be recalculated before reindexed
	 */
	 setShouldUpdate(shouldUpdate) {
	 	this.shouldUpdate = shouldUpdate;
	 }
}
module.exports.IndexJobData = IndexJobData;

/**
 *
 */
class IndexTagsByPrivacyContextJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIndexTagsByPrivacyContextJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getChangedCategoryId() {
	 	return this.changedCategoryId;
	 }
	
	/**
	 * @param changedCategoryId int 
	 */
	 setChangedCategoryId(changedCategoryId) {
	 	this.changedCategoryId = changedCategoryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDeletedPrivacyContexts() {
	 	return this.deletedPrivacyContexts;
	 }
	
	/**
	 * @param deletedPrivacyContexts string 
	 */
	 setDeletedPrivacyContexts(deletedPrivacyContexts) {
	 	this.deletedPrivacyContexts = deletedPrivacyContexts;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAddedPrivacyContexts() {
	 	return this.addedPrivacyContexts;
	 }
	
	/**
	 * @param addedPrivacyContexts string 
	 */
	 setAddedPrivacyContexts(addedPrivacyContexts) {
	 	this.addedPrivacyContexts = addedPrivacyContexts;
	 }
}
module.exports.IndexTagsByPrivacyContextJobData = IndexTagsByPrivacyContextJobData;

/**
 *
 */
class IntegrationJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegrationJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCallbackNotificationUrl() {
	 	return this.callbackNotificationUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProviderType() {
	 	return this.providerType;
	 }
	
	/**
	 * @param providerType string 
	 */
	 setProviderType(providerType) {
	 	this.providerType = providerType;
	 }
	
	/**
	 * Additional data that relevant for the provider only
	 * @return IntegrationJobProviderData
	 */
	 getProviderData() {
	 	return this.providerData;
	 }
	
	/**
	 * @param providerData IntegrationJobProviderData Additional data that relevant for the provider only
	 */
	 setProviderData(providerData) {
	 	this.providerData = providerData;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTriggerType() {
	 	return this.triggerType;
	 }
	
	/**
	 * @param triggerType string 
	 */
	 setTriggerType(triggerType) {
	 	this.triggerType = triggerType;
	 }
	
	/**
	 * Additional data that relevant for the trigger only
	 * @return IntegrationJobTriggerData
	 */
	 getTriggerData() {
	 	return this.triggerData;
	 }
	
	/**
	 * @param triggerData IntegrationJobTriggerData Additional data that relevant for the trigger only
	 */
	 setTriggerData(triggerData) {
	 	this.triggerData = triggerData;
	 }
}
module.exports.IntegrationJobData = IntegrationJobData;

/**
 *
 */
class IpAddressRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIpAddressRestriction';
	}
	
	/**
	 * Ip address restriction type (Allow or deny)
	 * @return int
	 */
	 getIpAddressRestrictionType() {
	 	return this.ipAddressRestrictionType;
	 }
	
	/**
	 * @param ipAddressRestrictionType int Ip address restriction type (Allow or deny)
	 */
	 setIpAddressRestrictionType(ipAddressRestrictionType) {
	 	this.ipAddressRestrictionType = ipAddressRestrictionType;
	 }
	
	/**
	 * Comma separated list of ip address to allow to deny
	 * @return string
	 */
	 getIpAddressList() {
	 	return this.ipAddressList;
	 }
	
	/**
	 * @param ipAddressList string Comma separated list of ip address to allow to deny
	 */
	 setIpAddressList(ipAddressList) {
	 	this.ipAddressList = ipAddressList;
	 }
}
module.exports.IpAddressRestriction = IpAddressRestriction;

/**
 *
 */
class KontikiStorageProfile extends StorageProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKontikiStorageProfile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getServiceToken() {
	 	return this.serviceToken;
	 }
	
	/**
	 * @param serviceToken string 
	 */
	 setServiceToken(serviceToken) {
	 	this.serviceToken = serviceToken;
	 }
}
module.exports.KontikiStorageProfile = KontikiStorageProfile;

/**
 *
 */
class LikeListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLikeListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.LikeListResponse = LikeListResponse;

/**
 *
 */
class LimitFlavorsRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLimitFlavorsRestriction';
	}
	
	/**
	 * Limit flavors restriction type (Allow or deny)
	 * @return int
	 */
	 getLimitFlavorsRestrictionType() {
	 	return this.limitFlavorsRestrictionType;
	 }
	
	/**
	 * @param limitFlavorsRestrictionType int Limit flavors restriction type (Allow or deny)
	 */
	 setLimitFlavorsRestrictionType(limitFlavorsRestrictionType) {
	 	this.limitFlavorsRestrictionType = limitFlavorsRestrictionType;
	 }
	
	/**
	 * Comma separated list of flavor params ids to allow to deny
	 * @return string
	 */
	 getFlavorParamsIds() {
	 	return this.flavorParamsIds;
	 }
	
	/**
	 * @param flavorParamsIds string Comma separated list of flavor params ids to allow to deny
	 */
	 setFlavorParamsIds(flavorParamsIds) {
	 	this.flavorParamsIds = flavorParamsIds;
	 }
}
module.exports.LimitFlavorsRestriction = LimitFlavorsRestriction;

/**
 *
 */
class LiveChannelListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.LiveChannelListResponse = LiveChannelListResponse;

/**
 *
 */
class LiveChannelSegmentListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelSegmentListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.LiveChannelSegmentListResponse = LiveChannelSegmentListResponse;

/**
 *
 */
class LiveEntryScheduleResource extends ScheduleResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveEntryScheduleResource';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
}
module.exports.LiveEntryScheduleResource = LiveEntryScheduleResource;

/**
 *
 */
class LiveEntryServerNode extends EntryServerNode{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveEntryServerNode';
	}
	
	/**
	 * parameters of the stream we got
	 * @return array
	 */
	 getStreams() {
	 	return this.streams;
	 }
	
	/**
	 * @param streams array parameters of the stream we got
	 */
	 setStreams(streams) {
	 	this.streams = streams;
	 }
}
module.exports.LiveEntryServerNode = LiveEntryServerNode;

/**
 *
 */
class LiveReportExportJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveReportExportJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getTimeReference() {
	 	return this.timeReference;
	 }
	
	/**
	 * @param timeReference int 
	 */
	 setTimeReference(timeReference) {
	 	this.timeReference = timeReference;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTimeZoneOffset() {
	 	return this.timeZoneOffset;
	 }
	
	/**
	 * @param timeZoneOffset int 
	 */
	 setTimeZoneOffset(timeZoneOffset) {
	 	this.timeZoneOffset = timeZoneOffset;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIds() {
	 	return this.entryIds;
	 }
	
	/**
	 * @param entryIds string 
	 */
	 setEntryIds(entryIds) {
	 	this.entryIds = entryIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOutputPath() {
	 	return this.outputPath;
	 }
	
	/**
	 * @param outputPath string 
	 */
	 setOutputPath(outputPath) {
	 	this.outputPath = outputPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRecipientEmail() {
	 	return this.recipientEmail;
	 }
	
	/**
	 * @param recipientEmail string 
	 */
	 setRecipientEmail(recipientEmail) {
	 	this.recipientEmail = recipientEmail;
	 }
}
module.exports.LiveReportExportJobData = LiveReportExportJobData;

/**
 *
 */
class LiveStatsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStatsListResponse';
	}
	
	/**
	 * 
	 * @return LiveStats
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects LiveStats 
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.LiveStatsListResponse = LiveStatsListResponse;

/**
 *
 */
class LiveStreamListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.LiveStreamListResponse = LiveStreamListResponse;

/**
 *
 */
class LiveStreamPushPublishRTMPConfiguration extends LiveStreamPushPublishConfiguration{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamPushPublishRTMPConfiguration';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamName() {
	 	return this.streamName;
	 }
	
	/**
	 * @param streamName string 
	 */
	 setStreamName(streamName) {
	 	this.streamName = streamName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getApplicationName() {
	 	return this.applicationName;
	 }
	
	/**
	 * @param applicationName string 
	 */
	 setApplicationName(applicationName) {
	 	this.applicationName = applicationName;
	 }
}
module.exports.LiveStreamPushPublishRTMPConfiguration = LiveStreamPushPublishRTMPConfiguration;

/**
 *
 */
class LiveToVodJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveToVodJobData';
	}
	
	/**
	 * $vod Entry Id
	 * @return string
	 */
	 getVodEntryId() {
	 	return this.vodEntryId;
	 }
	
	/**
	 * @param vodEntryId string $vod Entry Id
	 */
	 setVodEntryId(vodEntryId) {
	 	this.vodEntryId = vodEntryId;
	 }
	
	/**
	 * live Entry Id
	 * @return string
	 */
	 getLiveEntryId() {
	 	return this.liveEntryId;
	 }
	
	/**
	 * @param liveEntryId string live Entry Id
	 */
	 setLiveEntryId(liveEntryId) {
	 	this.liveEntryId = liveEntryId;
	 }
	
	/**
	 * total VOD Duration
	 * @return float
	 */
	 getTotalVodDuration() {
	 	return this.totalVodDuration;
	 }
	
	/**
	 * @param totalVodDuration float total VOD Duration
	 */
	 setTotalVodDuration(totalVodDuration) {
	 	this.totalVodDuration = totalVodDuration;
	 }
	
	/**
	 * last Segment Duration
	 * @return float
	 */
	 getLastSegmentDuration() {
	 	return this.lastSegmentDuration;
	 }
	
	/**
	 * @param lastSegmentDuration float last Segment Duration
	 */
	 setLastSegmentDuration(lastSegmentDuration) {
	 	this.lastSegmentDuration = lastSegmentDuration;
	 }
	
	/**
	 * amf Array File Path
	 * @return string
	 */
	 getAmfArray() {
	 	return this.amfArray;
	 }
	
	/**
	 * @param amfArray string amf Array File Path
	 */
	 setAmfArray(amfArray) {
	 	this.amfArray = amfArray;
	 }
	
	/**
	 * last live to vod sync time
	 * @return int
	 */
	 getLastCuePointSyncTime() {
	 	return this.lastCuePointSyncTime;
	 }
	
	/**
	 * @param lastCuePointSyncTime int last live to vod sync time
	 */
	 setLastCuePointSyncTime(lastCuePointSyncTime) {
	 	this.lastCuePointSyncTime = lastCuePointSyncTime;
	 }
	
	/**
	 * last segment drift
	 * @return int
	 */
	 getLastSegmentDrift() {
	 	return this.lastSegmentDrift;
	 }
	
	/**
	 * @param lastSegmentDrift int last segment drift
	 */
	 setLastSegmentDrift(lastSegmentDrift) {
	 	this.lastSegmentDrift = lastSegmentDrift;
	 }
}
module.exports.LiveToVodJobData = LiveToVodJobData;

/**
 *
 */
class LocationScheduleResource extends ScheduleResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLocationScheduleResource';
	}
}
module.exports.LocationScheduleResource = LocationScheduleResource;

/**
 *
 */
class MailJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMailJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getMailType() {
	 	return this.mailType;
	 }
	
	/**
	 * @param mailType string 
	 */
	 setMailType(mailType) {
	 	this.mailType = mailType;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMailPriority() {
	 	return this.mailPriority;
	 }
	
	/**
	 * @param mailPriority int 
	 */
	 setMailPriority(mailPriority) {
	 	this.mailPriority = mailPriority;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRecipientName() {
	 	return this.recipientName;
	 }
	
	/**
	 * @param recipientName string 
	 */
	 setRecipientName(recipientName) {
	 	this.recipientName = recipientName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRecipientEmail() {
	 	return this.recipientEmail;
	 }
	
	/**
	 * @param recipientEmail string 
	 */
	 setRecipientEmail(recipientEmail) {
	 	this.recipientEmail = recipientEmail;
	 }
	
	/**
	 * kuserId
	 * @return int
	 */
	 getRecipientId() {
	 	return this.recipientId;
	 }
	
	/**
	 * @param recipientId int kuserId
	 */
	 setRecipientId(recipientId) {
	 	this.recipientId = recipientId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFromName() {
	 	return this.fromName;
	 }
	
	/**
	 * @param fromName string 
	 */
	 setFromName(fromName) {
	 	this.fromName = fromName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFromEmail() {
	 	return this.fromEmail;
	 }
	
	/**
	 * @param fromEmail string 
	 */
	 setFromEmail(fromEmail) {
	 	this.fromEmail = fromEmail;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBodyParams() {
	 	return this.bodyParams;
	 }
	
	/**
	 * @param bodyParams string 
	 */
	 setBodyParams(bodyParams) {
	 	this.bodyParams = bodyParams;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSubjectParams() {
	 	return this.subjectParams;
	 }
	
	/**
	 * @param subjectParams string 
	 */
	 setSubjectParams(subjectParams) {
	 	this.subjectParams = subjectParams;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTemplatePath() {
	 	return this.templatePath;
	 }
	
	/**
	 * @param templatePath string 
	 */
	 setTemplatePath(templatePath) {
	 	this.templatePath = templatePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLanguage() {
	 	return this.language;
	 }
	
	/**
	 * @param language string 
	 */
	 setLanguage(language) {
	 	this.language = language;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCampaignId() {
	 	return this.campaignId;
	 }
	
	/**
	 * @param campaignId int 
	 */
	 setCampaignId(campaignId) {
	 	this.campaignId = campaignId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMinSendDate() {
	 	return this.minSendDate;
	 }
	
	/**
	 * @param minSendDate int 
	 */
	 setMinSendDate(minSendDate) {
	 	this.minSendDate = minSendDate;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getIsHtml() {
	 	return this.isHtml;
	 }
	
	/**
	 * @param isHtml bool 
	 */
	 setIsHtml(isHtml) {
	 	this.isHtml = isHtml;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSeparator() {
	 	return this.separator;
	 }
	
	/**
	 * @param separator string 
	 */
	 setSeparator(separator) {
	 	this.separator = separator;
	 }
}
module.exports.MailJobData = MailJobData;

/**
 *
 */
class MatchCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMatchCondition';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getValues() {
	 	return this.values;
	 }
	
	/**
	 * @param values array 
	 */
	 setValues(values) {
	 	this.values = values;
	 }
}
module.exports.MatchCondition = MatchCondition;

/**
 *
 */
class MediaInfoBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaInfoBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetIdEqual() {
	 	return this.flavorAssetIdEqual;
	 }
	
	/**
	 * @param flavorAssetIdEqual string 
	 */
	 setFlavorAssetIdEqual(flavorAssetIdEqual) {
	 	this.flavorAssetIdEqual = flavorAssetIdEqual;
	 }
}
module.exports.MediaInfoBaseFilter = MediaInfoBaseFilter;

/**
 *
 */
class MediaListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.MediaListResponse = MediaListResponse;

/**
 *
 */
class MetadataListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.MetadataListResponse = MetadataListResponse;

/**
 *
 */
class MetadataProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMetadataObjectTypeEqual() {
	 	return this.metadataObjectTypeEqual;
	 }
	
	/**
	 * @param metadataObjectTypeEqual string 
	 */
	 setMetadataObjectTypeEqual(metadataObjectTypeEqual) {
	 	this.metadataObjectTypeEqual = metadataObjectTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMetadataObjectTypeIn() {
	 	return this.metadataObjectTypeIn;
	 }
	
	/**
	 * @param metadataObjectTypeIn string 
	 */
	 setMetadataObjectTypeIn(metadataObjectTypeIn) {
	 	this.metadataObjectTypeIn = metadataObjectTypeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersionEqual() {
	 	return this.versionEqual;
	 }
	
	/**
	 * @param versionEqual int 
	 */
	 setVersionEqual(versionEqual) {
	 	this.versionEqual = versionEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreateModeEqual() {
	 	return this.createModeEqual;
	 }
	
	/**
	 * @param createModeEqual int 
	 */
	 setCreateModeEqual(createModeEqual) {
	 	this.createModeEqual = createModeEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreateModeNotEqual() {
	 	return this.createModeNotEqual;
	 }
	
	/**
	 * @param createModeNotEqual int 
	 */
	 setCreateModeNotEqual(createModeNotEqual) {
	 	this.createModeNotEqual = createModeNotEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreateModeIn() {
	 	return this.createModeIn;
	 }
	
	/**
	 * @param createModeIn string 
	 */
	 setCreateModeIn(createModeIn) {
	 	this.createModeIn = createModeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreateModeNotIn() {
	 	return this.createModeNotIn;
	 }
	
	/**
	 * @param createModeNotIn string 
	 */
	 setCreateModeNotIn(createModeNotIn) {
	 	this.createModeNotIn = createModeNotIn;
	 }
}
module.exports.MetadataProfileBaseFilter = MetadataProfileBaseFilter;

/**
 *
 */
class MetadataProfileFieldListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataProfileFieldListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.MetadataProfileFieldListResponse = MetadataProfileFieldListResponse;

/**
 *
 */
class MetadataProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.MetadataProfileListResponse = MetadataProfileListResponse;

/**
 *
 */
class MetadataReplacementOptionsItem extends PluginReplacementOptionsItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataReplacementOptionsItem';
	}
	
	/**
	 * If true custom-metadata transferred to temp entry on entry replacement
	 * @return bool
	 */
	 getShouldCopyMetadata() {
	 	return this.shouldCopyMetadata;
	 }
	
	/**
	 * @param shouldCopyMetadata bool If true custom-metadata transferred to temp entry on entry replacement
	 */
	 setShouldCopyMetadata(shouldCopyMetadata) {
	 	this.shouldCopyMetadata = shouldCopyMetadata;
	 }
}
module.exports.MetadataReplacementOptionsItem = MetadataReplacementOptionsItem;

/**
 *
 */
class MetadataResponseProfileMapping extends ResponseProfileMapping{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataResponseProfileMapping';
	}
}
module.exports.MetadataResponseProfileMapping = MetadataResponseProfileMapping;

/**
 *
 */
class MixListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMixListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.MixListResponse = MixListResponse;

/**
 *
 */
class ModerationFlagListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaModerationFlagListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ModerationFlagListResponse = ModerationFlagListResponse;

/**
 *
 */
class ModifyCategoriesObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaModifyCategoriesObjectTask';
	}
	
	/**
	 * Should the object task add or remove categories?
	 * @return int
	 */
	 getAddRemoveType() {
	 	return this.addRemoveType;
	 }
	
	/**
	 * @param addRemoveType int Should the object task add or remove categories?
	 */
	 setAddRemoveType(addRemoveType) {
	 	this.addRemoveType = addRemoveType;
	 }
	
	/**
	 * The list of category ids to add or remove
	 * @return array
	 */
	 getCategoryIds() {
	 	return this.categoryIds;
	 }
	
	/**
	 * @param categoryIds array The list of category ids to add or remove
	 */
	 setCategoryIds(categoryIds) {
	 	this.categoryIds = categoryIds;
	 }
}
module.exports.ModifyCategoriesObjectTask = ModifyCategoriesObjectTask;

/**
 *
 */
class ModifyEntryObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaModifyEntryObjectTask';
	}
	
	/**
	 * The input metadata profile id
	 * @return int
	 */
	 getInputMetadataProfileId() {
	 	return this.inputMetadataProfileId;
	 }
	
	/**
	 * @param inputMetadataProfileId int The input metadata profile id
	 */
	 setInputMetadataProfileId(inputMetadataProfileId) {
	 	this.inputMetadataProfileId = inputMetadataProfileId;
	 }
	
	/**
	 * array of {input metadata xpath location,entry field} objects
	 * @return array
	 */
	 getInputMetadata() {
	 	return this.inputMetadata;
	 }
	
	/**
	 * @param inputMetadata array array of {input metadata xpath location,entry field} objects
	 */
	 setInputMetadata(inputMetadata) {
	 	this.inputMetadata = inputMetadata;
	 }
	
	/**
	 * The output metadata profile id
	 * @return int
	 */
	 getOutputMetadataProfileId() {
	 	return this.outputMetadataProfileId;
	 }
	
	/**
	 * @param outputMetadataProfileId int The output metadata profile id
	 */
	 setOutputMetadataProfileId(outputMetadataProfileId) {
	 	this.outputMetadataProfileId = outputMetadataProfileId;
	 }
	
	/**
	 * array of {output metadata xpath location,entry field} objects
	 * @return array
	 */
	 getOutputMetadata() {
	 	return this.outputMetadata;
	 }
	
	/**
	 * @param outputMetadata array array of {output metadata xpath location,entry field} objects
	 */
	 setOutputMetadata(outputMetadata) {
	 	this.outputMetadata = outputMetadata;
	 }
	
	/**
	 * The input user id to set on the entry
	 * @return string
	 */
	 getInputUserId() {
	 	return this.inputUserId;
	 }
	
	/**
	 * @param inputUserId string The input user id to set on the entry
	 */
	 setInputUserId(inputUserId) {
	 	this.inputUserId = inputUserId;
	 }
	
	/**
	 * The input entitled users edit to set on the entry
	 * @return string
	 */
	 getInputEntitledUsersEdit() {
	 	return this.inputEntitledUsersEdit;
	 }
	
	/**
	 * @param inputEntitledUsersEdit string The input entitled users edit to set on the entry
	 */
	 setInputEntitledUsersEdit(inputEntitledUsersEdit) {
	 	this.inputEntitledUsersEdit = inputEntitledUsersEdit;
	 }
	
	/**
	 * The input entitled users publish to set on the entry
	 * @return string
	 */
	 getInputEntitledUsersPublish() {
	 	return this.inputEntitledUsersPublish;
	 }
	
	/**
	 * @param inputEntitledUsersPublish string The input entitled users publish to set on the entry
	 */
	 setInputEntitledUsersPublish(inputEntitledUsersPublish) {
	 	this.inputEntitledUsersPublish = inputEntitledUsersPublish;
	 }
}
module.exports.ModifyEntryObjectTask = ModifyEntryObjectTask;

/**
 *
 */
class MoveCategoryEntriesJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMoveCategoryEntriesJobData';
	}
	
	/**
	 * Source category id
	 * @return int
	 */
	 getSrcCategoryId() {
	 	return this.srcCategoryId;
	 }
	
	/**
	 * @param srcCategoryId int Source category id
	 */
	 setSrcCategoryId(srcCategoryId) {
	 	this.srcCategoryId = srcCategoryId;
	 }
	
	/**
	 * Destination category id
	 * @return int
	 */
	 getDestCategoryId() {
	 	return this.destCategoryId;
	 }
	
	/**
	 * @param destCategoryId int Destination category id
	 */
	 setDestCategoryId(destCategoryId) {
	 	this.destCategoryId = destCategoryId;
	 }
	
	/**
	 * Saves the last category id that its entries moved completely
 * In case of crash the batch will restart from that point
	 * @return int
	 */
	 getLastMovedCategoryId() {
	 	return this.lastMovedCategoryId;
	 }
	
	/**
	 * @param lastMovedCategoryId int Saves the last category id that its entries moved completely
 * In case of crash the batch will restart from that point
	 */
	 setLastMovedCategoryId(lastMovedCategoryId) {
	 	this.lastMovedCategoryId = lastMovedCategoryId;
	 }
	
	/**
	 * Saves the last page index of the child categories filter pager
 * In case of crash the batch will restart from that point
	 * @return int
	 */
	 getLastMovedCategoryPageIndex() {
	 	return this.lastMovedCategoryPageIndex;
	 }
	
	/**
	 * @param lastMovedCategoryPageIndex int Saves the last page index of the child categories filter pager
 * In case of crash the batch will restart from that point
	 */
	 setLastMovedCategoryPageIndex(lastMovedCategoryPageIndex) {
	 	this.lastMovedCategoryPageIndex = lastMovedCategoryPageIndex;
	 }
	
	/**
	 * Saves the last page index of the category entries filter pager
 * In case of crash the batch will restart from that point
	 * @return int
	 */
	 getLastMovedCategoryEntryPageIndex() {
	 	return this.lastMovedCategoryEntryPageIndex;
	 }
	
	/**
	 * @param lastMovedCategoryEntryPageIndex int Saves the last page index of the category entries filter pager
 * In case of crash the batch will restart from that point
	 */
	 setLastMovedCategoryEntryPageIndex(lastMovedCategoryEntryPageIndex) {
	 	this.lastMovedCategoryEntryPageIndex = lastMovedCategoryEntryPageIndex;
	 }
	
	/**
	 * All entries from all child categories will be moved as well
	 * @return bool
	 */
	 getMoveFromChildren() {
	 	return this.moveFromChildren;
	 }
	
	/**
	 * @param moveFromChildren bool All entries from all child categories will be moved as well
	 */
	 setMoveFromChildren(moveFromChildren) {
	 	this.moveFromChildren = moveFromChildren;
	 }
	
	/**
	 * Destination categories fallback ids
	 * @return string
	 */
	 getDestCategoryFullIds() {
	 	return this.destCategoryFullIds;
	 }
	
	/**
	 * @param destCategoryFullIds string Destination categories fallback ids
	 */
	 setDestCategoryFullIds(destCategoryFullIds) {
	 	this.destCategoryFullIds = destCategoryFullIds;
	 }
}
module.exports.MoveCategoryEntriesJobData = MoveCategoryEntriesJobData;

/**
 *
 */
class NotificationJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaNotificationJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserId() {
	 	return this.userId;
	 }
	
	/**
	 * @param userId string 
	 */
	 setUserId(userId) {
	 	this.userId = userId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeAsString() {
	 	return this.typeAsString;
	 }
	
	/**
	 * @param typeAsString string 
	 */
	 setTypeAsString(typeAsString) {
	 	this.typeAsString = typeAsString;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string 
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatus() {
	 	return this.status;
	 }
	
	/**
	 * @param status int 
	 */
	 setStatus(status) {
	 	this.status = status;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string 
	 */
	 setData(data) {
	 	this.data = data;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getNumberOfAttempts() {
	 	return this.numberOfAttempts;
	 }
	
	/**
	 * @param numberOfAttempts int 
	 */
	 setNumberOfAttempts(numberOfAttempts) {
	 	this.numberOfAttempts = numberOfAttempts;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNotificationResult() {
	 	return this.notificationResult;
	 }
	
	/**
	 * @param notificationResult string 
	 */
	 setNotificationResult(notificationResult) {
	 	this.notificationResult = notificationResult;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getObjType() {
	 	return this.objType;
	 }
	
	/**
	 * @param objType int 
	 */
	 setObjType(objType) {
	 	this.objType = objType;
	 }
}
module.exports.NotificationJobData = NotificationJobData;

/**
 *
 */
class ObjectListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaObjectListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ObjectListResponse = ObjectListResponse;

/**
 *
 */
class OrCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOrCondition';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getConditions() {
	 	return this.conditions;
	 }
	
	/**
	 * @param conditions array 
	 */
	 setConditions(conditions) {
	 	this.conditions = conditions;
	 }
}
module.exports.OrCondition = OrCondition;

/**
 *
 */
class ParseCaptionAssetJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParseCaptionAssetJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCaptionAssetId() {
	 	return this.captionAssetId;
	 }
	
	/**
	 * @param captionAssetId string 
	 */
	 setCaptionAssetId(captionAssetId) {
	 	this.captionAssetId = captionAssetId;
	 }
}
module.exports.ParseCaptionAssetJobData = ParseCaptionAssetJobData;

/**
 *
 */
class ParseMultiLanguageCaptionAssetJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaParseMultiLanguageCaptionAssetJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getMultiLanaguageCaptionAssetId() {
	 	return this.multiLanaguageCaptionAssetId;
	 }
	
	/**
	 * @param multiLanaguageCaptionAssetId string 
	 */
	 setMultiLanaguageCaptionAssetId(multiLanaguageCaptionAssetId) {
	 	this.multiLanaguageCaptionAssetId = multiLanaguageCaptionAssetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string 
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileLocation() {
	 	return this.fileLocation;
	 }
	
	/**
	 * @param fileLocation string 
	 */
	 setFileLocation(fileLocation) {
	 	this.fileLocation = fileLocation;
	 }
}
module.exports.ParseMultiLanguageCaptionAssetJobData = ParseMultiLanguageCaptionAssetJobData;

/**
 *
 */
class PartnerBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdNotIn() {
	 	return this.idNotIn;
	 }
	
	/**
	 * @param idNotIn string 
	 */
	 setIdNotIn(idNotIn) {
	 	this.idNotIn = idNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameLike() {
	 	return this.nameLike;
	 }
	
	/**
	 * @param nameLike string 
	 */
	 setNameLike(nameLike) {
	 	this.nameLike = nameLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameMultiLikeOr() {
	 	return this.nameMultiLikeOr;
	 }
	
	/**
	 * @param nameMultiLikeOr string 
	 */
	 setNameMultiLikeOr(nameMultiLikeOr) {
	 	this.nameMultiLikeOr = nameMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameMultiLikeAnd() {
	 	return this.nameMultiLikeAnd;
	 }
	
	/**
	 * @param nameMultiLikeAnd string 
	 */
	 setNameMultiLikeAnd(nameMultiLikeAnd) {
	 	this.nameMultiLikeAnd = nameMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerPackageEqual() {
	 	return this.partnerPackageEqual;
	 }
	
	/**
	 * @param partnerPackageEqual int 
	 */
	 setPartnerPackageEqual(partnerPackageEqual) {
	 	this.partnerPackageEqual = partnerPackageEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerPackageGreaterThanOrEqual() {
	 	return this.partnerPackageGreaterThanOrEqual;
	 }
	
	/**
	 * @param partnerPackageGreaterThanOrEqual int 
	 */
	 setPartnerPackageGreaterThanOrEqual(partnerPackageGreaterThanOrEqual) {
	 	this.partnerPackageGreaterThanOrEqual = partnerPackageGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerPackageLessThanOrEqual() {
	 	return this.partnerPackageLessThanOrEqual;
	 }
	
	/**
	 * @param partnerPackageLessThanOrEqual int 
	 */
	 setPartnerPackageLessThanOrEqual(partnerPackageLessThanOrEqual) {
	 	this.partnerPackageLessThanOrEqual = partnerPackageLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerPackageIn() {
	 	return this.partnerPackageIn;
	 }
	
	/**
	 * @param partnerPackageIn string 
	 */
	 setPartnerPackageIn(partnerPackageIn) {
	 	this.partnerPackageIn = partnerPackageIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerGroupTypeEqual() {
	 	return this.partnerGroupTypeEqual;
	 }
	
	/**
	 * @param partnerGroupTypeEqual int 
	 */
	 setPartnerGroupTypeEqual(partnerGroupTypeEqual) {
	 	this.partnerGroupTypeEqual = partnerGroupTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerNameDescriptionWebsiteAdminNameAdminEmailLike() {
	 	return this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike;
	 }
	
	/**
	 * @param partnerNameDescriptionWebsiteAdminNameAdminEmailLike string 
	 */
	 setPartnerNameDescriptionWebsiteAdminNameAdminEmailLike(partnerNameDescriptionWebsiteAdminNameAdminEmailLike) {
	 	this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = partnerNameDescriptionWebsiteAdminNameAdminEmailLike;
	 }
}
module.exports.PartnerBaseFilter = PartnerBaseFilter;

/**
 *
 */
class PartnerListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.PartnerListResponse = PartnerListResponse;

/**
 *
 */
class PartnerUsageListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerUsageListResponse';
	}
	
	/**
	 * 
	 * @return VarPartnerUsageItem
	 */
	 getTotal() {
	 	return this.total;
	 }
	
	/**
	 * @param total VarPartnerUsageItem 
	 */
	 setTotal(total) {
	 	this.total = total;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array 
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.PartnerUsageListResponse = PartnerUsageListResponse;

/**
 *
 */
class PermissionItemListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionItemListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.PermissionItemListResponse = PermissionItemListResponse;

/**
 *
 */
class PermissionListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.PermissionListResponse = PermissionListResponse;

/**
 *
 */
class PlaylistListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaylistListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.PlaylistListResponse = PlaylistListResponse;

/**
 *
 */
class ProvisionJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaProvisionJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getStreamID() {
	 	return this.streamID;
	 }
	
	/**
	 * @param streamID string 
	 */
	 setStreamID(streamID) {
	 	this.streamID = streamID;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBackupStreamID() {
	 	return this.backupStreamID;
	 }
	
	/**
	 * @param backupStreamID string 
	 */
	 setBackupStreamID(backupStreamID) {
	 	this.backupStreamID = backupStreamID;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRtmp() {
	 	return this.rtmp;
	 }
	
	/**
	 * @param rtmp string 
	 */
	 setRtmp(rtmp) {
	 	this.rtmp = rtmp;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEncoderIP() {
	 	return this.encoderIP;
	 }
	
	/**
	 * @param encoderIP string 
	 */
	 setEncoderIP(encoderIP) {
	 	this.encoderIP = encoderIP;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getBackupEncoderIP() {
	 	return this.backupEncoderIP;
	 }
	
	/**
	 * @param backupEncoderIP string 
	 */
	 setBackupEncoderIP(backupEncoderIP) {
	 	this.backupEncoderIP = backupEncoderIP;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEncoderPassword() {
	 	return this.encoderPassword;
	 }
	
	/**
	 * @param encoderPassword string 
	 */
	 setEncoderPassword(encoderPassword) {
	 	this.encoderPassword = encoderPassword;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEncoderUsername() {
	 	return this.encoderUsername;
	 }
	
	/**
	 * @param encoderUsername string 
	 */
	 setEncoderUsername(encoderUsername) {
	 	this.encoderUsername = encoderUsername;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDate() {
	 	return this.endDate;
	 }
	
	/**
	 * @param endDate int 
	 */
	 setEndDate(endDate) {
	 	this.endDate = endDate;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReturnVal() {
	 	return this.returnVal;
	 }
	
	/**
	 * @param returnVal string 
	 */
	 setReturnVal(returnVal) {
	 	this.returnVal = returnVal;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMediaType() {
	 	return this.mediaType;
	 }
	
	/**
	 * @param mediaType int 
	 */
	 setMediaType(mediaType) {
	 	this.mediaType = mediaType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrimaryBroadcastingUrl() {
	 	return this.primaryBroadcastingUrl;
	 }
	
	/**
	 * @param primaryBroadcastingUrl string 
	 */
	 setPrimaryBroadcastingUrl(primaryBroadcastingUrl) {
	 	this.primaryBroadcastingUrl = primaryBroadcastingUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSecondaryBroadcastingUrl() {
	 	return this.secondaryBroadcastingUrl;
	 }
	
	/**
	 * @param secondaryBroadcastingUrl string 
	 */
	 setSecondaryBroadcastingUrl(secondaryBroadcastingUrl) {
	 	this.secondaryBroadcastingUrl = secondaryBroadcastingUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamName() {
	 	return this.streamName;
	 }
	
	/**
	 * @param streamName string 
	 */
	 setStreamName(streamName) {
	 	this.streamName = streamName;
	 }
}
module.exports.ProvisionJobData = ProvisionJobData;

/**
 *
 */
class QuestionCuePoint extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaQuestionCuePoint';
	}
	
	/**
	 * Array of key value answerKey->optionAnswer objects
	 * @return map
	 */
	 getOptionalAnswers() {
	 	return this.optionalAnswers;
	 }
	
	/**
	 * @param optionalAnswers map Array of key value answerKey->optionAnswer objects
	 */
	 setOptionalAnswers(optionalAnswers) {
	 	this.optionalAnswers = optionalAnswers;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHint() {
	 	return this.hint;
	 }
	
	/**
	 * @param hint string 
	 */
	 setHint(hint) {
	 	this.hint = hint;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getQuestion() {
	 	return this.question;
	 }
	
	/**
	 * @param question string 
	 */
	 setQuestion(question) {
	 	this.question = question;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getExplanation() {
	 	return this.explanation;
	 }
	
	/**
	 * @param explanation string 
	 */
	 setExplanation(explanation) {
	 	this.explanation = explanation;
	 }
}
module.exports.QuestionCuePoint = QuestionCuePoint;

/**
 *
 */
class QuizAdvancedFilter extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaQuizAdvancedFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIsQuiz() {
	 	return this.isQuiz;
	 }
	
	/**
	 * @param isQuiz int 
	 */
	 setIsQuiz(isQuiz) {
	 	this.isQuiz = isQuiz;
	 }
}
module.exports.QuizAdvancedFilter = QuizAdvancedFilter;

/**
 *
 */
class QuizListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaQuizListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.QuizListResponse = QuizListResponse;

/**
 *
 */
class QuizUserEntry extends UserEntry{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaQuizUserEntry';
	}
	
	/**
	 * 
	 * @return float
	 */
	 getScore() {
	 	return this.score;
	 }
}
module.exports.QuizUserEntry = QuizUserEntry;

/**
 *
 */
class RecalculateCacheJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecalculateCacheJobData';
	}
}
module.exports.RecalculateCacheJobData = RecalculateCacheJobData;

/**
 *
 */
class RemoteDropFolder extends DropFolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRemoteDropFolder';
	}
}
module.exports.RemoteDropFolder = RemoteDropFolder;

/**
 *
 */
class RemotePathListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRemotePathListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.RemotePathListResponse = RemotePathListResponse;

/**
 *
 */
class ReportBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
}
module.exports.ReportBaseFilter = ReportBaseFilter;

/**
 *
 */
class ReportInputFilter extends ReportInputBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportInputFilter';
	}
	
	/**
	 * Search keywords to filter objects
	 * @return string
	 */
	 getKeywords() {
	 	return this.keywords;
	 }
	
	/**
	 * @param keywords string Search keywords to filter objects
	 */
	 setKeywords(keywords) {
	 	this.keywords = keywords;
	 }
	
	/**
	 * Search keywords in onjects tags
	 * @return bool
	 */
	 getSearchInTags() {
	 	return this.searchInTags;
	 }
	
	/**
	 * @param searchInTags bool Search keywords in onjects tags
	 */
	 setSearchInTags(searchInTags) {
	 	this.searchInTags = searchInTags;
	 }
	
	/**
	 * Search keywords in onjects admin tags
	 * @return bool
	 */
	 getSearchInAdminTags() {
	 	return this.searchInAdminTags;
	 }
	
	/**
	 * @param searchInAdminTags bool Search keywords in onjects admin tags
	 */
	 setSearchInAdminTags(searchInAdminTags) {
	 	this.searchInAdminTags = searchInAdminTags;
	 }
	
	/**
	 * Search onjects in specified categories
	 * @return string
	 */
	 getCategories() {
	 	return this.categories;
	 }
	
	/**
	 * @param categories string Search onjects in specified categories
	 */
	 setCategories(categories) {
	 	this.categories = categories;
	 }
	
	/**
	 * Time zone offset in minutes
	 * @return int
	 */
	 getTimeZoneOffset() {
	 	return this.timeZoneOffset;
	 }
	
	/**
	 * @param timeZoneOffset int Time zone offset in minutes
	 */
	 setTimeZoneOffset(timeZoneOffset) {
	 	this.timeZoneOffset = timeZoneOffset;
	 }
	
	/**
	 * Aggregated results according to interval
	 * @return string
	 */
	 getInterval() {
	 	return this.interval;
	 }
	
	/**
	 * @param interval string Aggregated results according to interval
	 */
	 setInterval(interval) {
	 	this.interval = interval;
	 }
}
module.exports.ReportInputFilter = ReportInputFilter;

/**
 *
 */
class ReportListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaReportListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ReportListResponse = ReportListResponse;

/**
 *
 */
class ResponseProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.ResponseProfileBaseFilter = ResponseProfileBaseFilter;

/**
 *
 */
class ResponseProfileHolder extends BaseResponseProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileHolder';
	}
	
	/**
	 * Auto generated numeric identifier
	 * @return int
	 */
	 getId() {
	 	return this.id;
	 }
	
	/**
	 * @param id int Auto generated numeric identifier
	 */
	 setId(id) {
	 	this.id = id;
	 }
	
	/**
	 * Unique system name
	 * @return string
	 */
	 getSystemName() {
	 	return this.systemName;
	 }
	
	/**
	 * @param systemName string Unique system name
	 */
	 setSystemName(systemName) {
	 	this.systemName = systemName;
	 }
}
module.exports.ResponseProfileHolder = ResponseProfileHolder;

/**
 *
 */
class ResponseProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ResponseProfileListResponse = ResponseProfileListResponse;

/**
 *
 */
class ScheduleEventListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ScheduleEventListResponse = ScheduleEventListResponse;

/**
 *
 */
class ScheduleEventResourceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventResourceListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ScheduleEventResourceListResponse = ScheduleEventResourceListResponse;

/**
 *
 */
class ScheduleResourceListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleResourceListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ScheduleResourceListResponse = ScheduleResourceListResponse;

/**
 *
 */
class ScheduledTaskJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduledTaskJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getMaxResults() {
	 	return this.maxResults;
	 }
	
	/**
	 * @param maxResults int 
	 */
	 setMaxResults(maxResults) {
	 	this.maxResults = maxResults;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResultsFilePath() {
	 	return this.resultsFilePath;
	 }
	
	/**
	 * @param resultsFilePath string 
	 */
	 setResultsFilePath(resultsFilePath) {
	 	this.resultsFilePath = resultsFilePath;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReferenceTime() {
	 	return this.referenceTime;
	 }
	
	/**
	 * @param referenceTime int 
	 */
	 setReferenceTime(referenceTime) {
	 	this.referenceTime = referenceTime;
	 }
}
module.exports.ScheduledTaskJobData = ScheduledTaskJobData;

/**
 *
 */
class ScheduledTaskProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduledTaskProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastExecutionStartedAtGreaterThanOrEqual() {
	 	return this.lastExecutionStartedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param lastExecutionStartedAtGreaterThanOrEqual int 
	 */
	 setLastExecutionStartedAtGreaterThanOrEqual(lastExecutionStartedAtGreaterThanOrEqual) {
	 	this.lastExecutionStartedAtGreaterThanOrEqual = lastExecutionStartedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getLastExecutionStartedAtLessThanOrEqual() {
	 	return this.lastExecutionStartedAtLessThanOrEqual;
	 }
	
	/**
	 * @param lastExecutionStartedAtLessThanOrEqual int 
	 */
	 setLastExecutionStartedAtLessThanOrEqual(lastExecutionStartedAtLessThanOrEqual) {
	 	this.lastExecutionStartedAtLessThanOrEqual = lastExecutionStartedAtLessThanOrEqual;
	 }
}
module.exports.ScheduledTaskProfileBaseFilter = ScheduledTaskProfileBaseFilter;

/**
 *
 */
class ScheduledTaskProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduledTaskProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ScheduledTaskProfileListResponse = ScheduledTaskProfileListResponse;

/**
 *
 */
class SchedulerListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSchedulerListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.SchedulerListResponse = SchedulerListResponse;

/**
 *
 */
class SchedulerWorkerListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSchedulerWorkerListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.SchedulerWorkerListResponse = SchedulerWorkerListResponse;

/**
 *
 */
class SearchCondition extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string 
	 */
	 setField(field) {
	 	this.field = field;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getValue() {
	 	return this.value;
	 }
	
	/**
	 * @param value string 
	 */
	 setValue(value) {
	 	this.value = value;
	 }
}
module.exports.SearchCondition = SearchCondition;

/**
 *
 */
class SearchOperator extends SearchItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchOperator';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type int 
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getItems() {
	 	return this.items;
	 }
	
	/**
	 * @param items array 
	 */
	 setItems(items) {
	 	this.items = items;
	 }
}
module.exports.SearchOperator = SearchOperator;

/**
 *
 */
class ServerNodeBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaServerNodeBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeartbeatTimeGreaterThanOrEqual() {
	 	return this.heartbeatTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param heartbeatTimeGreaterThanOrEqual int 
	 */
	 setHeartbeatTimeGreaterThanOrEqual(heartbeatTimeGreaterThanOrEqual) {
	 	this.heartbeatTimeGreaterThanOrEqual = heartbeatTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getHeartbeatTimeLessThanOrEqual() {
	 	return this.heartbeatTimeLessThanOrEqual;
	 }
	
	/**
	 * @param heartbeatTimeLessThanOrEqual int 
	 */
	 setHeartbeatTimeLessThanOrEqual(heartbeatTimeLessThanOrEqual) {
	 	this.heartbeatTimeLessThanOrEqual = heartbeatTimeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameIn() {
	 	return this.nameIn;
	 }
	
	/**
	 * @param nameIn string 
	 */
	 setNameIn(nameIn) {
	 	this.nameIn = nameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHostNameLike() {
	 	return this.hostNameLike;
	 }
	
	/**
	 * @param hostNameLike string 
	 */
	 setHostNameLike(hostNameLike) {
	 	this.hostNameLike = hostNameLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHostNameMultiLikeOr() {
	 	return this.hostNameMultiLikeOr;
	 }
	
	/**
	 * @param hostNameMultiLikeOr string 
	 */
	 setHostNameMultiLikeOr(hostNameMultiLikeOr) {
	 	this.hostNameMultiLikeOr = hostNameMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getHostNameMultiLikeAnd() {
	 	return this.hostNameMultiLikeAnd;
	 }
	
	/**
	 * @param hostNameMultiLikeAnd string 
	 */
	 setHostNameMultiLikeAnd(hostNameMultiLikeAnd) {
	 	this.hostNameMultiLikeAnd = hostNameMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDcEqual() {
	 	return this.dcEqual;
	 }
	
	/**
	 * @param dcEqual int 
	 */
	 setDcEqual(dcEqual) {
	 	this.dcEqual = dcEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDcIn() {
	 	return this.dcIn;
	 }
	
	/**
	 * @param dcIn string 
	 */
	 setDcIn(dcIn) {
	 	this.dcIn = dcIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentIdEqual() {
	 	return this.parentIdEqual;
	 }
	
	/**
	 * @param parentIdEqual int 
	 */
	 setParentIdEqual(parentIdEqual) {
	 	this.parentIdEqual = parentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdIn() {
	 	return this.parentIdIn;
	 }
	
	/**
	 * @param parentIdIn string 
	 */
	 setParentIdIn(parentIdIn) {
	 	this.parentIdIn = parentIdIn;
	 }
}
module.exports.ServerNodeBaseFilter = ServerNodeBaseFilter;

/**
 *
 */
class ServerNodeListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaServerNodeListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ServerNodeListResponse = ServerNodeListResponse;

/**
 *
 */
class SessionRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSessionRestriction';
	}
}
module.exports.SessionRestriction = SessionRestriction;

/**
 *
 */
class ShortLinkBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaShortLinkBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExpiresAtGreaterThanOrEqual() {
	 	return this.expiresAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param expiresAtGreaterThanOrEqual int 
	 */
	 setExpiresAtGreaterThanOrEqual(expiresAtGreaterThanOrEqual) {
	 	this.expiresAtGreaterThanOrEqual = expiresAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getExpiresAtLessThanOrEqual() {
	 	return this.expiresAtLessThanOrEqual;
	 }
	
	/**
	 * @param expiresAtLessThanOrEqual int 
	 */
	 setExpiresAtLessThanOrEqual(expiresAtLessThanOrEqual) {
	 	this.expiresAtLessThanOrEqual = expiresAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.ShortLinkBaseFilter = ShortLinkBaseFilter;

/**
 *
 */
class ShortLinkListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaShortLinkListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ShortLinkListResponse = ShortLinkListResponse;

/**
 *
 */
class SiteRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSiteRestriction';
	}
	
	/**
	 * The site restriction type (allow or deny)
	 * @return int
	 */
	 getSiteRestrictionType() {
	 	return this.siteRestrictionType;
	 }
	
	/**
	 * @param siteRestrictionType int The site restriction type (allow or deny)
	 */
	 setSiteRestrictionType(siteRestrictionType) {
	 	this.siteRestrictionType = siteRestrictionType;
	 }
	
	/**
	 * Comma separated list of sites (domains) to allow or deny
	 * @return string
	 */
	 getSiteList() {
	 	return this.siteList;
	 }
	
	/**
	 * @param siteList string Comma separated list of sites (domains) to allow or deny
	 */
	 setSiteList(siteList) {
	 	this.siteList = siteList;
	 }
}
module.exports.SiteRestriction = SiteRestriction;

/**
 *
 */
class StorageAddAction extends RuleAction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageAddAction';
	}
}
module.exports.StorageAddAction = StorageAddAction;

/**
 *
 */
class StorageExportObjectTask extends ObjectTask{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageExportObjectTask';
	}
	
	/**
	 * Storage profile id
	 * @return string
	 */
	 getStorageId() {
	 	return this.storageId;
	 }
	
	/**
	 * @param storageId string Storage profile id
	 */
	 setStorageId(storageId) {
	 	this.storageId = storageId;
	 }
}
module.exports.StorageExportObjectTask = StorageExportObjectTask;

/**
 *
 */
class StorageJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getServerUrl() {
	 	return this.serverUrl;
	 }
	
	/**
	 * @param serverUrl string 
	 */
	 setServerUrl(serverUrl) {
	 	this.serverUrl = serverUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerUsername() {
	 	return this.serverUsername;
	 }
	
	/**
	 * @param serverUsername string 
	 */
	 setServerUsername(serverUsername) {
	 	this.serverUsername = serverUsername;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerPassword() {
	 	return this.serverPassword;
	 }
	
	/**
	 * @param serverPassword string 
	 */
	 setServerPassword(serverPassword) {
	 	this.serverPassword = serverPassword;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerPrivateKey() {
	 	return this.serverPrivateKey;
	 }
	
	/**
	 * @param serverPrivateKey string 
	 */
	 setServerPrivateKey(serverPrivateKey) {
	 	this.serverPrivateKey = serverPrivateKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerPublicKey() {
	 	return this.serverPublicKey;
	 }
	
	/**
	 * @param serverPublicKey string 
	 */
	 setServerPublicKey(serverPublicKey) {
	 	this.serverPublicKey = serverPublicKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerPassPhrase() {
	 	return this.serverPassPhrase;
	 }
	
	/**
	 * @param serverPassPhrase string 
	 */
	 setServerPassPhrase(serverPassPhrase) {
	 	this.serverPassPhrase = serverPassPhrase;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getFtpPassiveMode() {
	 	return this.ftpPassiveMode;
	 }
	
	/**
	 * @param ftpPassiveMode bool 
	 */
	 setFtpPassiveMode(ftpPassiveMode) {
	 	this.ftpPassiveMode = ftpPassiveMode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileSyncLocalPath() {
	 	return this.srcFileSyncLocalPath;
	 }
	
	/**
	 * @param srcFileSyncLocalPath string 
	 */
	 setSrcFileSyncLocalPath(srcFileSyncLocalPath) {
	 	this.srcFileSyncLocalPath = srcFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFileSyncId() {
	 	return this.srcFileSyncId;
	 }
	
	/**
	 * @param srcFileSyncId string 
	 */
	 setSrcFileSyncId(srcFileSyncId) {
	 	this.srcFileSyncId = srcFileSyncId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileSyncStoredPath() {
	 	return this.destFileSyncStoredPath;
	 }
	
	/**
	 * @param destFileSyncStoredPath string 
	 */
	 setDestFileSyncStoredPath(destFileSyncStoredPath) {
	 	this.destFileSyncStoredPath = destFileSyncStoredPath;
	 }
}
module.exports.StorageJobData = StorageJobData;

/**
 *
 */
class StorageProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProtocolEqual() {
	 	return this.protocolEqual;
	 }
	
	/**
	 * @param protocolEqual string 
	 */
	 setProtocolEqual(protocolEqual) {
	 	this.protocolEqual = protocolEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProtocolIn() {
	 	return this.protocolIn;
	 }
	
	/**
	 * @param protocolIn string 
	 */
	 setProtocolIn(protocolIn) {
	 	this.protocolIn = protocolIn;
	 }
}
module.exports.StorageProfileBaseFilter = StorageProfileBaseFilter;

/**
 *
 */
class StorageProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.StorageProfileListResponse = StorageProfileListResponse;

/**
 *
 */
class SyncCategoryPrivacyContextJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSyncCategoryPrivacyContextJobData';
	}
	
	/**
	 * category id
	 * @return int
	 */
	 getCategoryId() {
	 	return this.categoryId;
	 }
	
	/**
	 * @param categoryId int category id
	 */
	 setCategoryId(categoryId) {
	 	this.categoryId = categoryId;
	 }
	
	/**
	 * Saves the last category entry creation date that was updated
 * In case of crash the batch will restart from that point
	 * @return int
	 */
	 getLastUpdatedCategoryEntryCreatedAt() {
	 	return this.lastUpdatedCategoryEntryCreatedAt;
	 }
	
	/**
	 * @param lastUpdatedCategoryEntryCreatedAt int Saves the last category entry creation date that was updated
 * In case of crash the batch will restart from that point
	 */
	 setLastUpdatedCategoryEntryCreatedAt(lastUpdatedCategoryEntryCreatedAt) {
	 	this.lastUpdatedCategoryEntryCreatedAt = lastUpdatedCategoryEntryCreatedAt;
	 }
	
	/**
	 * Saves the last sub category creation date that was updated
 * In case of crash the batch will restart from that point
	 * @return int
	 */
	 getLastUpdatedCategoryCreatedAt() {
	 	return this.lastUpdatedCategoryCreatedAt;
	 }
	
	/**
	 * @param lastUpdatedCategoryCreatedAt int Saves the last sub category creation date that was updated
 * In case of crash the batch will restart from that point
	 */
	 setLastUpdatedCategoryCreatedAt(lastUpdatedCategoryCreatedAt) {
	 	this.lastUpdatedCategoryCreatedAt = lastUpdatedCategoryCreatedAt;
	 }
}
module.exports.SyncCategoryPrivacyContextJobData = SyncCategoryPrivacyContextJobData;

/**
 *
 */
class SyndicationDistributionProfile extends DistributionProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSyndicationDistributionProfile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getXsl() {
	 	return this.xsl;
	 }
	
	/**
	 * @param xsl string 
	 */
	 setXsl(xsl) {
	 	this.xsl = xsl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFeedId() {
	 	return this.feedId;
	 }
}
module.exports.SyndicationDistributionProfile = SyndicationDistributionProfile;

/**
 *
 */
class SyndicationDistributionProvider extends DistributionProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSyndicationDistributionProvider';
	}
}
module.exports.SyndicationDistributionProvider = SyndicationDistributionProvider;

/**
 *
 */
class SystemPartnerUsageFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSystemPartnerUsageFilter';
	}
	
	/**
	 * Date range from
	 * @return int
	 */
	 getFromDate() {
	 	return this.fromDate;
	 }
	
	/**
	 * @param fromDate int Date range from
	 */
	 setFromDate(fromDate) {
	 	this.fromDate = fromDate;
	 }
	
	/**
	 * Date range to
	 * @return int
	 */
	 getToDate() {
	 	return this.toDate;
	 }
	
	/**
	 * @param toDate int Date range to
	 */
	 setToDate(toDate) {
	 	this.toDate = toDate;
	 }
	
	/**
	 * Time zone offset
	 * @return int
	 */
	 getTimezoneOffset() {
	 	return this.timezoneOffset;
	 }
	
	/**
	 * @param timezoneOffset int Time zone offset
	 */
	 setTimezoneOffset(timezoneOffset) {
	 	this.timezoneOffset = timezoneOffset;
	 }
}
module.exports.SystemPartnerUsageFilter = SystemPartnerUsageFilter;

/**
 *
 */
class SystemPartnerUsageListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSystemPartnerUsageListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
	
	/**
	 * @param objects array 
	 */
	 setObjects(objects) {
	 	this.objects = objects;
	 }
}
module.exports.SystemPartnerUsageListResponse = SystemPartnerUsageListResponse;

/**
 *
 */
class TagFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTagFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getObjectTypeEqual() {
	 	return this.objectTypeEqual;
	 }
	
	/**
	 * @param objectTypeEqual string 
	 */
	 setObjectTypeEqual(objectTypeEqual) {
	 	this.objectTypeEqual = objectTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagEqual() {
	 	return this.tagEqual;
	 }
	
	/**
	 * @param tagEqual string 
	 */
	 setTagEqual(tagEqual) {
	 	this.tagEqual = tagEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagStartsWith() {
	 	return this.tagStartsWith;
	 }
	
	/**
	 * @param tagStartsWith string 
	 */
	 setTagStartsWith(tagStartsWith) {
	 	this.tagStartsWith = tagStartsWith;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInstanceCountEqual() {
	 	return this.instanceCountEqual;
	 }
	
	/**
	 * @param instanceCountEqual int 
	 */
	 setInstanceCountEqual(instanceCountEqual) {
	 	this.instanceCountEqual = instanceCountEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInstanceCountIn() {
	 	return this.instanceCountIn;
	 }
	
	/**
	 * @param instanceCountIn int 
	 */
	 setInstanceCountIn(instanceCountIn) {
	 	this.instanceCountIn = instanceCountIn;
	 }
}
module.exports.TagFilter = TagFilter;

/**
 *
 */
class TagListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTagListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.TagListResponse = TagListResponse;

/**
 *
 */
class ThumbAssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbAssetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ThumbAssetListResponse = ThumbAssetListResponse;

/**
 *
 */
class ThumbCuePoint extends CuePoint{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbCuePoint';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string 
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescription() {
	 	return this.description;
	 }
	
	/**
	 * @param description string 
	 */
	 setDescription(description) {
	 	this.description = description;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitle() {
	 	return this.title;
	 }
	
	/**
	 * @param title string 
	 */
	 setTitle(title) {
	 	this.title = title;
	 }
	
	/**
	 * The sub type of the ThumbCuePoint
	 * @return int
	 */
	 getSubType() {
	 	return this.subType;
	 }
	
	/**
	 * @param subType int The sub type of the ThumbCuePoint
	 */
	 setSubType(subType) {
	 	this.subType = subType;
	 }
}
module.exports.ThumbCuePoint = ThumbCuePoint;

/**
 *
 */
class ThumbParamsListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaThumbParamsListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.ThumbParamsListResponse = ThumbParamsListResponse;

/**
 *
 */
class TrackEntryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTrackEntryListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.TrackEntryListResponse = TrackEntryListResponse;

/**
 *
 */
class TranscriptAssetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTranscriptAssetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.TranscriptAssetListResponse = TranscriptAssetListResponse;

/**
 *
 */
class TransformMetadataJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTransformMetadataJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSrcXslPath() {
	 	return this.srcXslPath;
	 }
	
	/**
	 * @param srcXslPath string 
	 */
	 setSrcXslPath(srcXslPath) {
	 	this.srcXslPath = srcXslPath;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSrcVersion() {
	 	return this.srcVersion;
	 }
	
	/**
	 * @param srcVersion int 
	 */
	 setSrcVersion(srcVersion) {
	 	this.srcVersion = srcVersion;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDestVersion() {
	 	return this.destVersion;
	 }
	
	/**
	 * @param destVersion int 
	 */
	 setDestVersion(destVersion) {
	 	this.destVersion = destVersion;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestXsdPath() {
	 	return this.destXsdPath;
	 }
	
	/**
	 * @param destXsdPath string 
	 */
	 setDestXsdPath(destXsdPath) {
	 	this.destXsdPath = destXsdPath;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileId() {
	 	return this.metadataProfileId;
	 }
	
	/**
	 * @param metadataProfileId int 
	 */
	 setMetadataProfileId(metadataProfileId) {
	 	this.metadataProfileId = metadataProfileId;
	 }
}
module.exports.TransformMetadataJobData = TransformMetadataJobData;

/**
 *
 */
class TubeMogulSyndicationFeed extends BaseSyndicationFeed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTubeMogulSyndicationFeed';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCategory() {
	 	return this.category;
	 }
}
module.exports.TubeMogulSyndicationFeed = TubeMogulSyndicationFeed;

/**
 *
 */
class UiConfAdminListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfAdminListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UiConfAdminListResponse = UiConfAdminListResponse;

/**
 *
 */
class UiConfBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameLike() {
	 	return this.nameLike;
	 }
	
	/**
	 * @param nameLike string 
	 */
	 setNameLike(nameLike) {
	 	this.nameLike = nameLike;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getObjTypeEqual() {
	 	return this.objTypeEqual;
	 }
	
	/**
	 * @param objTypeEqual int 
	 */
	 setObjTypeEqual(objTypeEqual) {
	 	this.objTypeEqual = objTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjTypeIn() {
	 	return this.objTypeIn;
	 }
	
	/**
	 * @param objTypeIn string 
	 */
	 setObjTypeIn(objTypeIn) {
	 	this.objTypeIn = objTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreationModeEqual() {
	 	return this.creationModeEqual;
	 }
	
	/**
	 * @param creationModeEqual int 
	 */
	 setCreationModeEqual(creationModeEqual) {
	 	this.creationModeEqual = creationModeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreationModeIn() {
	 	return this.creationModeIn;
	 }
	
	/**
	 * @param creationModeIn string 
	 */
	 setCreationModeIn(creationModeIn) {
	 	this.creationModeIn = creationModeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionEqual() {
	 	return this.versionEqual;
	 }
	
	/**
	 * @param versionEqual string 
	 */
	 setVersionEqual(versionEqual) {
	 	this.versionEqual = versionEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionMultiLikeOr() {
	 	return this.versionMultiLikeOr;
	 }
	
	/**
	 * @param versionMultiLikeOr string 
	 */
	 setVersionMultiLikeOr(versionMultiLikeOr) {
	 	this.versionMultiLikeOr = versionMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionMultiLikeAnd() {
	 	return this.versionMultiLikeAnd;
	 }
	
	/**
	 * @param versionMultiLikeAnd string 
	 */
	 setVersionMultiLikeAnd(versionMultiLikeAnd) {
	 	this.versionMultiLikeAnd = versionMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerTagsMultiLikeOr() {
	 	return this.partnerTagsMultiLikeOr;
	 }
	
	/**
	 * @param partnerTagsMultiLikeOr string 
	 */
	 setPartnerTagsMultiLikeOr(partnerTagsMultiLikeOr) {
	 	this.partnerTagsMultiLikeOr = partnerTagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerTagsMultiLikeAnd() {
	 	return this.partnerTagsMultiLikeAnd;
	 }
	
	/**
	 * @param partnerTagsMultiLikeAnd string 
	 */
	 setPartnerTagsMultiLikeAnd(partnerTagsMultiLikeAnd) {
	 	this.partnerTagsMultiLikeAnd = partnerTagsMultiLikeAnd;
	 }
}
module.exports.UiConfBaseFilter = UiConfBaseFilter;

/**
 *
 */
class UiConfListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UiConfListResponse = UiConfListResponse;

/**
 *
 */
class UploadTokenBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadTokenBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileNameEqual() {
	 	return this.fileNameEqual;
	 }
	
	/**
	 * @param fileNameEqual string 
	 */
	 setFileNameEqual(fileNameEqual) {
	 	this.fileNameEqual = fileNameEqual;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getFileSizeEqual() {
	 	return this.fileSizeEqual;
	 }
	
	/**
	 * @param fileSizeEqual float 
	 */
	 setFileSizeEqual(fileSizeEqual) {
	 	this.fileSizeEqual = fileSizeEqual;
	 }
}
module.exports.UploadTokenBaseFilter = UploadTokenBaseFilter;

/**
 *
 */
class UploadTokenListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadTokenListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UploadTokenListResponse = UploadTokenListResponse;

/**
 *
 */
class UrlRecognizerAkamaiG2O extends UrlRecognizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlRecognizerAkamaiG2O';
	}
	
	/**
	 * headerData
	 * @return string
	 */
	 getHeaderData() {
	 	return this.headerData;
	 }
	
	/**
	 * @param headerData string headerData
	 */
	 setHeaderData(headerData) {
	 	this.headerData = headerData;
	 }
	
	/**
	 * headerSign
	 * @return string
	 */
	 getHeaderSign() {
	 	return this.headerSign;
	 }
	
	/**
	 * @param headerSign string headerSign
	 */
	 setHeaderSign(headerSign) {
	 	this.headerSign = headerSign;
	 }
	
	/**
	 * timeout
	 * @return int
	 */
	 getTimeout() {
	 	return this.timeout;
	 }
	
	/**
	 * @param timeout int timeout
	 */
	 setTimeout(timeout) {
	 	this.timeout = timeout;
	 }
	
	/**
	 * salt
	 * @return string
	 */
	 getSalt() {
	 	return this.salt;
	 }
	
	/**
	 * @param salt string salt
	 */
	 setSalt(salt) {
	 	this.salt = salt;
	 }
}
module.exports.UrlRecognizerAkamaiG2O = UrlRecognizerAkamaiG2O;

/**
 *
 */
class UrlTokenizerAkamaiHttp extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerAkamaiHttp';
	}
	
	/**
	 * param
	 * @return string
	 */
	 getParamName() {
	 	return this.paramName;
	 }
	
	/**
	 * @param paramName string param
	 */
	 setParamName(paramName) {
	 	this.paramName = paramName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootDir() {
	 	return this.rootDir;
	 }
	
	/**
	 * @param rootDir string 
	 */
	 setRootDir(rootDir) {
	 	this.rootDir = rootDir;
	 }
}
module.exports.UrlTokenizerAkamaiHttp = UrlTokenizerAkamaiHttp;

/**
 *
 */
class UrlTokenizerAkamaiRtmp extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerAkamaiRtmp';
	}
	
	/**
	 * profile
	 * @return string
	 */
	 getProfile() {
	 	return this.profile;
	 }
	
	/**
	 * @param profile string profile
	 */
	 setProfile(profile) {
	 	this.profile = profile;
	 }
	
	/**
	 * Type
	 * @return string
	 */
	 getType() {
	 	return this.type;
	 }
	
	/**
	 * @param type string Type
	 */
	 setType(type) {
	 	this.type = type;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAifp() {
	 	return this.aifp;
	 }
	
	/**
	 * @param aifp string 
	 */
	 setAifp(aifp) {
	 	this.aifp = aifp;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getUsePrefix() {
	 	return this.usePrefix;
	 }
	
	/**
	 * @param usePrefix bool 
	 */
	 setUsePrefix(usePrefix) {
	 	this.usePrefix = usePrefix;
	 }
}
module.exports.UrlTokenizerAkamaiRtmp = UrlTokenizerAkamaiRtmp;

/**
 *
 */
class UrlTokenizerAkamaiRtsp extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerAkamaiRtsp';
	}
	
	/**
	 * host
	 * @return string
	 */
	 getHost() {
	 	return this.host;
	 }
	
	/**
	 * @param host string host
	 */
	 setHost(host) {
	 	this.host = host;
	 }
	
	/**
	 * Cp-Code
	 * @return int
	 */
	 getCpcode() {
	 	return this.cpcode;
	 }
	
	/**
	 * @param cpcode int Cp-Code
	 */
	 setCpcode(cpcode) {
	 	this.cpcode = cpcode;
	 }
}
module.exports.UrlTokenizerAkamaiRtsp = UrlTokenizerAkamaiRtsp;

/**
 *
 */
class UrlTokenizerAkamaiSecureHd extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerAkamaiSecureHd';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getParamName() {
	 	return this.paramName;
	 }
	
	/**
	 * @param paramName string 
	 */
	 setParamName(paramName) {
	 	this.paramName = paramName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAclPostfix() {
	 	return this.aclPostfix;
	 }
	
	/**
	 * @param aclPostfix string 
	 */
	 setAclPostfix(aclPostfix) {
	 	this.aclPostfix = aclPostfix;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCustomPostfixes() {
	 	return this.customPostfixes;
	 }
	
	/**
	 * @param customPostfixes string 
	 */
	 setCustomPostfixes(customPostfixes) {
	 	this.customPostfixes = customPostfixes;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUseCookieHosts() {
	 	return this.useCookieHosts;
	 }
	
	/**
	 * @param useCookieHosts string 
	 */
	 setUseCookieHosts(useCookieHosts) {
	 	this.useCookieHosts = useCookieHosts;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootDir() {
	 	return this.rootDir;
	 }
	
	/**
	 * @param rootDir string 
	 */
	 setRootDir(rootDir) {
	 	this.rootDir = rootDir;
	 }
}
module.exports.UrlTokenizerAkamaiSecureHd = UrlTokenizerAkamaiSecureHd;

/**
 *
 */
class UrlTokenizerBitGravity extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerBitGravity';
	}
	
	/**
	 * hashPatternRegex
	 * @return string
	 */
	 getHashPatternRegex() {
	 	return this.hashPatternRegex;
	 }
	
	/**
	 * @param hashPatternRegex string hashPatternRegex
	 */
	 setHashPatternRegex(hashPatternRegex) {
	 	this.hashPatternRegex = hashPatternRegex;
	 }
}
module.exports.UrlTokenizerBitGravity = UrlTokenizerBitGravity;

/**
 *
 */
class UrlTokenizerCht extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerCht';
	}
}
module.exports.UrlTokenizerCht = UrlTokenizerCht;

/**
 *
 */
class UrlTokenizerCloudFront extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerCloudFront';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getKeyPairId() {
	 	return this.keyPairId;
	 }
	
	/**
	 * @param keyPairId string 
	 */
	 setKeyPairId(keyPairId) {
	 	this.keyPairId = keyPairId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootDir() {
	 	return this.rootDir;
	 }
	
	/**
	 * @param rootDir string 
	 */
	 setRootDir(rootDir) {
	 	this.rootDir = rootDir;
	 }
}
module.exports.UrlTokenizerCloudFront = UrlTokenizerCloudFront;

/**
 *
 */
class UrlTokenizerKs extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerKs';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getUsePath() {
	 	return this.usePath;
	 }
	
	/**
	 * @param usePath bool 
	 */
	 setUsePath(usePath) {
	 	this.usePath = usePath;
	 }
}
module.exports.UrlTokenizerKs = UrlTokenizerKs;

/**
 *
 */
class UrlTokenizerLevel3 extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerLevel3';
	}
	
	/**
	 * paramName
	 * @return string
	 */
	 getParamName() {
	 	return this.paramName;
	 }
	
	/**
	 * @param paramName string paramName
	 */
	 setParamName(paramName) {
	 	this.paramName = paramName;
	 }
	
	/**
	 * expiryName
	 * @return string
	 */
	 getExpiryName() {
	 	return this.expiryName;
	 }
	
	/**
	 * @param expiryName string expiryName
	 */
	 setExpiryName(expiryName) {
	 	this.expiryName = expiryName;
	 }
	
	/**
	 * gen
	 * @return string
	 */
	 getGen() {
	 	return this.gen;
	 }
	
	/**
	 * @param gen string gen
	 */
	 setGen(gen) {
	 	this.gen = gen;
	 }
}
module.exports.UrlTokenizerLevel3 = UrlTokenizerLevel3;

/**
 *
 */
class UrlTokenizerLimeLight extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerLimeLight';
	}
}
module.exports.UrlTokenizerLimeLight = UrlTokenizerLimeLight;

/**
 *
 */
class UrlTokenizerVelocix extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerVelocix';
	}
	
	/**
	 * hdsPaths
	 * @return string
	 */
	 getHdsPaths() {
	 	return this.hdsPaths;
	 }
	
	/**
	 * @param hdsPaths string hdsPaths
	 */
	 setHdsPaths(hdsPaths) {
	 	this.hdsPaths = hdsPaths;
	 }
	
	/**
	 * tokenParamName
	 * @return string
	 */
	 getParamName() {
	 	return this.paramName;
	 }
	
	/**
	 * @param paramName string tokenParamName
	 */
	 setParamName(paramName) {
	 	this.paramName = paramName;
	 }
	
	/**
	 * secure URL prefix
	 * @return string
	 */
	 getAuthPrefix() {
	 	return this.authPrefix;
	 }
	
	/**
	 * @param authPrefix string secure URL prefix
	 */
	 setAuthPrefix(authPrefix) {
	 	this.authPrefix = authPrefix;
	 }
}
module.exports.UrlTokenizerVelocix = UrlTokenizerVelocix;

/**
 *
 */
class UrlTokenizerVnpt extends UrlTokenizer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUrlTokenizerVnpt';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getTokenizationFormat() {
	 	return this.tokenizationFormat;
	 }
	
	/**
	 * @param tokenizationFormat int 
	 */
	 setTokenizationFormat(tokenizationFormat) {
	 	this.tokenizationFormat = tokenizationFormat;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getShouldIncludeClientIp() {
	 	return this.shouldIncludeClientIp;
	 }
	
	/**
	 * @param shouldIncludeClientIp bool 
	 */
	 setShouldIncludeClientIp(shouldIncludeClientIp) {
	 	this.shouldIncludeClientIp = shouldIncludeClientIp;
	 }
}
module.exports.UrlTokenizerVnpt = UrlTokenizerVnpt;

/**
 *
 */
class UserAgentRestriction extends BaseRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAgentRestriction';
	}
	
	/**
	 * User agent restriction type (Allow or deny)
	 * @return int
	 */
	 getUserAgentRestrictionType() {
	 	return this.userAgentRestrictionType;
	 }
	
	/**
	 * @param userAgentRestrictionType int User agent restriction type (Allow or deny)
	 */
	 setUserAgentRestrictionType(userAgentRestrictionType) {
	 	this.userAgentRestrictionType = userAgentRestrictionType;
	 }
	
	/**
	 * A comma seperated list of user agent regular expressions
	 * @return string
	 */
	 getUserAgentRegexList() {
	 	return this.userAgentRegexList;
	 }
	
	/**
	 * @param userAgentRegexList string A comma seperated list of user agent regular expressions
	 */
	 setUserAgentRegexList(userAgentRegexList) {
	 	this.userAgentRegexList = userAgentRegexList;
	 }
}
module.exports.UserAgentRestriction = UserAgentRestriction;

/**
 *
 */
class UserEntryListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserEntryListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UserEntryListResponse = UserEntryListResponse;

/**
 *
 */
class UserListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UserListResponse = UserListResponse;

/**
 *
 */
class UserLoginDataListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserLoginDataListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UserLoginDataListResponse = UserLoginDataListResponse;

/**
 *
 */
class UserRoleCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleCondition';
	}
	
	/**
	 * Comma separated list of role ids
	 * @return string
	 */
	 getRoleIds() {
	 	return this.roleIds;
	 }
	
	/**
	 * @param roleIds string Comma separated list of role ids
	 */
	 setRoleIds(roleIds) {
	 	this.roleIds = roleIds;
	 }
}
module.exports.UserRoleCondition = UserRoleCondition;

/**
 *
 */
class UserRoleListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.UserRoleListResponse = UserRoleListResponse;

/**
 *
 */
class ValidateActiveEdgeCondition extends Condition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaValidateActiveEdgeCondition';
	}
	
	/**
	 * Comma separated list of edge servers to validate are active
	 * @return string
	 */
	 getEdgeServerIds() {
	 	return this.edgeServerIds;
	 }
	
	/**
	 * @param edgeServerIds string Comma separated list of edge servers to validate are active
	 */
	 setEdgeServerIds(edgeServerIds) {
	 	this.edgeServerIds = edgeServerIds;
	 }
}
module.exports.ValidateActiveEdgeCondition = ValidateActiveEdgeCondition;

/**
 *
 */
class VarPartnerUsageTotalItem extends VarPartnerUsageItem{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVarPartnerUsageTotalItem';
	}
}
module.exports.VarPartnerUsageTotalItem = VarPartnerUsageTotalItem;

/**
 *
 */
class VirusScanJobData extends JobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVirusScanJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSrcFilePath() {
	 	return this.srcFilePath;
	 }
	
	/**
	 * @param srcFilePath string 
	 */
	 setSrcFilePath(srcFilePath) {
	 	this.srcFilePath = srcFilePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getScanResult() {
	 	return this.scanResult;
	 }
	
	/**
	 * @param scanResult int 
	 */
	 setScanResult(scanResult) {
	 	this.scanResult = scanResult;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVirusFoundAction() {
	 	return this.virusFoundAction;
	 }
	
	/**
	 * @param virusFoundAction int 
	 */
	 setVirusFoundAction(virusFoundAction) {
	 	this.virusFoundAction = virusFoundAction;
	 }
}
module.exports.VirusScanJobData = VirusScanJobData;

/**
 *
 */
class VirusScanProfileBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVirusScanProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameLike() {
	 	return this.nameLike;
	 }
	
	/**
	 * @param nameLike string 
	 */
	 setNameLike(nameLike) {
	 	this.nameLike = nameLike;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEngineTypeEqual() {
	 	return this.engineTypeEqual;
	 }
	
	/**
	 * @param engineTypeEqual string 
	 */
	 setEngineTypeEqual(engineTypeEqual) {
	 	this.engineTypeEqual = engineTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEngineTypeIn() {
	 	return this.engineTypeIn;
	 }
	
	/**
	 * @param engineTypeIn string 
	 */
	 setEngineTypeIn(engineTypeIn) {
	 	this.engineTypeIn = engineTypeIn;
	 }
}
module.exports.VirusScanProfileBaseFilter = VirusScanProfileBaseFilter;

/**
 *
 */
class VirusScanProfileListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVirusScanProfileListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.VirusScanProfileListResponse = VirusScanProfileListResponse;

/**
 *
 */
class VoicebaseJobProviderData extends IntegrationJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVoicebaseJobProviderData';
	}
	
	/**
	 * Entry ID
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string Entry ID
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * Flavor ID
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string Flavor ID
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * input Transcript-asset ID
	 * @return string
	 */
	 getTranscriptId() {
	 	return this.transcriptId;
	 }
	
	/**
	 * @param transcriptId string input Transcript-asset ID
	 */
	 setTranscriptId(transcriptId) {
	 	this.transcriptId = transcriptId;
	 }
	
	/**
	 * Caption formats
	 * @return string
	 */
	 getCaptionAssetFormats() {
	 	return this.captionAssetFormats;
	 }
	
	/**
	 * @param captionAssetFormats string Caption formats
	 */
	 setCaptionAssetFormats(captionAssetFormats) {
	 	this.captionAssetFormats = captionAssetFormats;
	 }
	
	/**
	 * Api key for service provider
	 * @return string
	 */
	 getApiKey() {
	 	return this.apiKey;
	 }
	
	/**
	 * Api key for service provider
	 * @return string
	 */
	 getApiPassword() {
	 	return this.apiPassword;
	 }
	
	/**
	 * Transcript content language
	 * @return string
	 */
	 getSpokenLanguage() {
	 	return this.spokenLanguage;
	 }
	
	/**
	 * @param spokenLanguage string Transcript content language
	 */
	 setSpokenLanguage(spokenLanguage) {
	 	this.spokenLanguage = spokenLanguage;
	 }
	
	/**
	 * Transcript Content location
	 * @return string
	 */
	 getFileLocation() {
	 	return this.fileLocation;
	 }
	
	/**
	 * should replace remote media content
	 * @return bool
	 */
	 getReplaceMediaContent() {
	 	return this.replaceMediaContent;
	 }
	
	/**
	 * @param replaceMediaContent bool should replace remote media content
	 */
	 setReplaceMediaContent(replaceMediaContent) {
	 	this.replaceMediaContent = replaceMediaContent;
	 }
}
module.exports.VoicebaseJobProviderData = VoicebaseJobProviderData;

/**
 *
 */
class WidgetBaseFilter extends Filter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaWidgetBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSourceWidgetIdEqual() {
	 	return this.sourceWidgetIdEqual;
	 }
	
	/**
	 * @param sourceWidgetIdEqual string 
	 */
	 setSourceWidgetIdEqual(sourceWidgetIdEqual) {
	 	this.sourceWidgetIdEqual = sourceWidgetIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRootWidgetIdEqual() {
	 	return this.rootWidgetIdEqual;
	 }
	
	/**
	 * @param rootWidgetIdEqual string 
	 */
	 setRootWidgetIdEqual(rootWidgetIdEqual) {
	 	this.rootWidgetIdEqual = rootWidgetIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUiConfIdEqual() {
	 	return this.uiConfIdEqual;
	 }
	
	/**
	 * @param uiConfIdEqual int 
	 */
	 setUiConfIdEqual(uiConfIdEqual) {
	 	this.uiConfIdEqual = uiConfIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerDataLike() {
	 	return this.partnerDataLike;
	 }
	
	/**
	 * @param partnerDataLike string 
	 */
	 setPartnerDataLike(partnerDataLike) {
	 	this.partnerDataLike = partnerDataLike;
	 }
}
module.exports.WidgetBaseFilter = WidgetBaseFilter;

/**
 *
 */
class WidgetListResponse extends ListResponse{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaWidgetListResponse';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getObjects() {
	 	return this.objects;
	 }
}
module.exports.WidgetListResponse = WidgetListResponse;

/**
 *
 */
class YahooSyndicationFeed extends BaseSyndicationFeed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYahooSyndicationFeed';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCategory() {
	 	return this.category;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAdultContent() {
	 	return this.adultContent;
	 }
	
	/**
	 * @param adultContent string 
	 */
	 setAdultContent(adultContent) {
	 	this.adultContent = adultContent;
	 }
	
	/**
	 * feed description
	 * @return string
	 */
	 getFeedDescription() {
	 	return this.feedDescription;
	 }
	
	/**
	 * @param feedDescription string feed description
	 */
	 setFeedDescription(feedDescription) {
	 	this.feedDescription = feedDescription;
	 }
	
	/**
	 * feed landing page (i.e publisher website)
	 * @return string
	 */
	 getFeedLandingPage() {
	 	return this.feedLandingPage;
	 }
	
	/**
	 * @param feedLandingPage string feed landing page (i.e publisher website)
	 */
	 setFeedLandingPage(feedLandingPage) {
	 	this.feedLandingPage = feedLandingPage;
	 }
}
module.exports.YahooSyndicationFeed = YahooSyndicationFeed;

/**
 *
 */
class YoutubeApiDistributionProvider extends DistributionProvider{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYoutubeApiDistributionProvider';
	}
}
module.exports.YoutubeApiDistributionProvider = YoutubeApiDistributionProvider;

/**
 *
 */
class AccessControlBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
}
module.exports.AccessControlBaseFilter = AccessControlBaseFilter;

/**
 *
 */
class AccessControlProfileBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.AccessControlProfileBaseFilter = AccessControlProfileBaseFilter;

/**
 *
 */
class AkamaiProvisionJobData extends ProvisionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAkamaiProvisionJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getWsdlUsername() {
	 	return this.wsdlUsername;
	 }
	
	/**
	 * @param wsdlUsername string 
	 */
	 setWsdlUsername(wsdlUsername) {
	 	this.wsdlUsername = wsdlUsername;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getWsdlPassword() {
	 	return this.wsdlPassword;
	 }
	
	/**
	 * @param wsdlPassword string 
	 */
	 setWsdlPassword(wsdlPassword) {
	 	this.wsdlPassword = wsdlPassword;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCpcode() {
	 	return this.cpcode;
	 }
	
	/**
	 * @param cpcode string 
	 */
	 setCpcode(cpcode) {
	 	this.cpcode = cpcode;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEmailId() {
	 	return this.emailId;
	 }
	
	/**
	 * @param emailId string 
	 */
	 setEmailId(emailId) {
	 	this.emailId = emailId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrimaryContact() {
	 	return this.primaryContact;
	 }
	
	/**
	 * @param primaryContact string 
	 */
	 setPrimaryContact(primaryContact) {
	 	this.primaryContact = primaryContact;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSecondaryContact() {
	 	return this.secondaryContact;
	 }
	
	/**
	 * @param secondaryContact string 
	 */
	 setSecondaryContact(secondaryContact) {
	 	this.secondaryContact = secondaryContact;
	 }
}
module.exports.AkamaiProvisionJobData = AkamaiProvisionJobData;

/**
 *
 */
class AkamaiUniversalProvisionJobData extends ProvisionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAkamaiUniversalProvisionJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getStreamId() {
	 	return this.streamId;
	 }
	
	/**
	 * @param streamId int 
	 */
	 setStreamId(streamId) {
	 	this.streamId = streamId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemUserName() {
	 	return this.systemUserName;
	 }
	
	/**
	 * @param systemUserName string 
	 */
	 setSystemUserName(systemUserName) {
	 	this.systemUserName = systemUserName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemPassword() {
	 	return this.systemPassword;
	 }
	
	/**
	 * @param systemPassword string 
	 */
	 setSystemPassword(systemPassword) {
	 	this.systemPassword = systemPassword;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDomainName() {
	 	return this.domainName;
	 }
	
	/**
	 * @param domainName string 
	 */
	 setDomainName(domainName) {
	 	this.domainName = domainName;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDvrEnabled() {
	 	return this.dvrEnabled;
	 }
	
	/**
	 * @param dvrEnabled int 
	 */
	 setDvrEnabled(dvrEnabled) {
	 	this.dvrEnabled = dvrEnabled;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDvrWindow() {
	 	return this.dvrWindow;
	 }
	
	/**
	 * @param dvrWindow int 
	 */
	 setDvrWindow(dvrWindow) {
	 	this.dvrWindow = dvrWindow;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrimaryContact() {
	 	return this.primaryContact;
	 }
	
	/**
	 * @param primaryContact string 
	 */
	 setPrimaryContact(primaryContact) {
	 	this.primaryContact = primaryContact;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSecondaryContact() {
	 	return this.secondaryContact;
	 }
	
	/**
	 * @param secondaryContact string 
	 */
	 setSecondaryContact(secondaryContact) {
	 	this.secondaryContact = secondaryContact;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStreamType() {
	 	return this.streamType;
	 }
	
	/**
	 * @param streamType string 
	 */
	 setStreamType(streamType) {
	 	this.streamType = streamType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNotificationEmail() {
	 	return this.notificationEmail;
	 }
	
	/**
	 * @param notificationEmail string 
	 */
	 setNotificationEmail(notificationEmail) {
	 	this.notificationEmail = notificationEmail;
	 }
}
module.exports.AkamaiUniversalProvisionJobData = AkamaiUniversalProvisionJobData;

/**
 *
 */
class AppTokenFilter extends AppTokenBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAppTokenFilter';
	}
}
module.exports.AppTokenFilter = AppTokenFilter;

/**
 *
 */
class AssetParamsBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetParamsBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsSystemDefaultEqual() {
	 	return this.isSystemDefaultEqual;
	 }
	
	/**
	 * @param isSystemDefaultEqual int 
	 */
	 setIsSystemDefaultEqual(isSystemDefaultEqual) {
	 	this.isSystemDefaultEqual = isSystemDefaultEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsEqual() {
	 	return this.tagsEqual;
	 }
	
	/**
	 * @param tagsEqual string 
	 */
	 setTagsEqual(tagsEqual) {
	 	this.tagsEqual = tagsEqual;
	 }
}
module.exports.AssetParamsBaseFilter = AssetParamsBaseFilter;

/**
 *
 */
class AssetResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetResource';
	}
	
	/**
	 * ID of the source asset
	 * @return string
	 */
	 getAssetId() {
	 	return this.assetId;
	 }
	
	/**
	 * @param assetId string ID of the source asset
	 */
	 setAssetId(assetId) {
	 	this.assetId = assetId;
	 }
}
module.exports.AssetResource = AssetResource;

/**
 *
 */
class BaseSyndicationFeedFilter extends BaseSyndicationFeedBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseSyndicationFeedFilter';
	}
}
module.exports.BaseSyndicationFeedFilter = BaseSyndicationFeedFilter;

/**
 *
 */
class BulkUploadCsvJobData extends BulkUploadJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadCsvJobData';
	}
	
	/**
	 * The version of the csv file
	 * @return int
	 */
	 getCsvVersion() {
	 	return this.csvVersion;
	 }
	
	/**
	 * Array containing CSV headers
	 * @return array
	 */
	 getColumns() {
	 	return this.columns;
	 }
	
	/**
	 * @param columns array Array containing CSV headers
	 */
	 setColumns(columns) {
	 	this.columns = columns;
	 }
}
module.exports.BulkUploadCsvJobData = BulkUploadCsvJobData;

/**
 *
 */
class BulkUploadFilter extends BulkUploadBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadFilter';
	}
}
module.exports.BulkUploadFilter = BulkUploadFilter;

/**
 *
 */
class BulkUploadFilterJobData extends BulkUploadJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadFilterJobData';
	}
	
	/**
	 * Filter for extracting the objects list to upload
	 * @return Filter
	 */
	 getFilter() {
	 	return this.filter;
	 }
	
	/**
	 * @param filter Filter Filter for extracting the objects list to upload
	 */
	 setFilter(filter) {
	 	this.filter = filter;
	 }
	
	/**
	 * Template object for new object creation
	 * @return ObjectBase
	 */
	 getTemplateObject() {
	 	return this.templateObject;
	 }
	
	/**
	 * @param templateObject ObjectBase Template object for new object creation
	 */
	 setTemplateObject(templateObject) {
	 	this.templateObject = templateObject;
	 }
}
module.exports.BulkUploadFilterJobData = BulkUploadFilterJobData;

/**
 *
 */
class BulkUploadICalJobData extends BulkUploadJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadICalJobData';
	}
	
	/**
	 * The type of the events that ill be created by this upload
	 * @return int
	 */
	 getEventsType() {
	 	return this.eventsType;
	 }
	
	/**
	 * @param eventsType int The type of the events that ill be created by this upload
	 */
	 setEventsType(eventsType) {
	 	this.eventsType = eventsType;
	 }
}
module.exports.BulkUploadICalJobData = BulkUploadICalJobData;

/**
 *
 */
class BulkUploadXmlJobData extends BulkUploadJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBulkUploadXmlJobData';
	}
}
module.exports.BulkUploadXmlJobData = BulkUploadXmlJobData;

/**
 *
 */
class CategoryBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdNotIn() {
	 	return this.idNotIn;
	 }
	
	/**
	 * @param idNotIn string 
	 */
	 setIdNotIn(idNotIn) {
	 	this.idNotIn = idNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentIdEqual() {
	 	return this.parentIdEqual;
	 }
	
	/**
	 * @param parentIdEqual int 
	 */
	 setParentIdEqual(parentIdEqual) {
	 	this.parentIdEqual = parentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdIn() {
	 	return this.parentIdIn;
	 }
	
	/**
	 * @param parentIdIn string 
	 */
	 setParentIdIn(parentIdIn) {
	 	this.parentIdIn = parentIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDepthEqual() {
	 	return this.depthEqual;
	 }
	
	/**
	 * @param depthEqual int 
	 */
	 setDepthEqual(depthEqual) {
	 	this.depthEqual = depthEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullNameEqual() {
	 	return this.fullNameEqual;
	 }
	
	/**
	 * @param fullNameEqual string 
	 */
	 setFullNameEqual(fullNameEqual) {
	 	this.fullNameEqual = fullNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullNameStartsWith() {
	 	return this.fullNameStartsWith;
	 }
	
	/**
	 * @param fullNameStartsWith string 
	 */
	 setFullNameStartsWith(fullNameStartsWith) {
	 	this.fullNameStartsWith = fullNameStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullNameIn() {
	 	return this.fullNameIn;
	 }
	
	/**
	 * @param fullNameIn string 
	 */
	 setFullNameIn(fullNameIn) {
	 	this.fullNameIn = fullNameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullIdsEqual() {
	 	return this.fullIdsEqual;
	 }
	
	/**
	 * @param fullIdsEqual string 
	 */
	 setFullIdsEqual(fullIdsEqual) {
	 	this.fullIdsEqual = fullIdsEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullIdsStartsWith() {
	 	return this.fullIdsStartsWith;
	 }
	
	/**
	 * @param fullIdsStartsWith string 
	 */
	 setFullIdsStartsWith(fullIdsStartsWith) {
	 	this.fullIdsStartsWith = fullIdsStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullIdsMatchOr() {
	 	return this.fullIdsMatchOr;
	 }
	
	/**
	 * @param fullIdsMatchOr string 
	 */
	 setFullIdsMatchOr(fullIdsMatchOr) {
	 	this.fullIdsMatchOr = fullIdsMatchOr;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAppearInListEqual() {
	 	return this.appearInListEqual;
	 }
	
	/**
	 * @param appearInListEqual int 
	 */
	 setAppearInListEqual(appearInListEqual) {
	 	this.appearInListEqual = appearInListEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPrivacyEqual() {
	 	return this.privacyEqual;
	 }
	
	/**
	 * @param privacyEqual int 
	 */
	 setPrivacyEqual(privacyEqual) {
	 	this.privacyEqual = privacyEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrivacyIn() {
	 	return this.privacyIn;
	 }
	
	/**
	 * @param privacyIn string 
	 */
	 setPrivacyIn(privacyIn) {
	 	this.privacyIn = privacyIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInheritanceTypeEqual() {
	 	return this.inheritanceTypeEqual;
	 }
	
	/**
	 * @param inheritanceTypeEqual int 
	 */
	 setInheritanceTypeEqual(inheritanceTypeEqual) {
	 	this.inheritanceTypeEqual = inheritanceTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getInheritanceTypeIn() {
	 	return this.inheritanceTypeIn;
	 }
	
	/**
	 * @param inheritanceTypeIn string 
	 */
	 setInheritanceTypeIn(inheritanceTypeIn) {
	 	this.inheritanceTypeIn = inheritanceTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceIdEqual() {
	 	return this.referenceIdEqual;
	 }
	
	/**
	 * @param referenceIdEqual string 
	 */
	 setReferenceIdEqual(referenceIdEqual) {
	 	this.referenceIdEqual = referenceIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReferenceIdEmpty() {
	 	return this.referenceIdEmpty;
	 }
	
	/**
	 * @param referenceIdEmpty int 
	 */
	 setReferenceIdEmpty(referenceIdEmpty) {
	 	this.referenceIdEmpty = referenceIdEmpty;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getContributionPolicyEqual() {
	 	return this.contributionPolicyEqual;
	 }
	
	/**
	 * @param contributionPolicyEqual int 
	 */
	 setContributionPolicyEqual(contributionPolicyEqual) {
	 	this.contributionPolicyEqual = contributionPolicyEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMembersCountGreaterThanOrEqual() {
	 	return this.membersCountGreaterThanOrEqual;
	 }
	
	/**
	 * @param membersCountGreaterThanOrEqual int 
	 */
	 setMembersCountGreaterThanOrEqual(membersCountGreaterThanOrEqual) {
	 	this.membersCountGreaterThanOrEqual = membersCountGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMembersCountLessThanOrEqual() {
	 	return this.membersCountLessThanOrEqual;
	 }
	
	/**
	 * @param membersCountLessThanOrEqual int 
	 */
	 setMembersCountLessThanOrEqual(membersCountLessThanOrEqual) {
	 	this.membersCountLessThanOrEqual = membersCountLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPendingMembersCountGreaterThanOrEqual() {
	 	return this.pendingMembersCountGreaterThanOrEqual;
	 }
	
	/**
	 * @param pendingMembersCountGreaterThanOrEqual int 
	 */
	 setPendingMembersCountGreaterThanOrEqual(pendingMembersCountGreaterThanOrEqual) {
	 	this.pendingMembersCountGreaterThanOrEqual = pendingMembersCountGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPendingMembersCountLessThanOrEqual() {
	 	return this.pendingMembersCountLessThanOrEqual;
	 }
	
	/**
	 * @param pendingMembersCountLessThanOrEqual int 
	 */
	 setPendingMembersCountLessThanOrEqual(pendingMembersCountLessThanOrEqual) {
	 	this.pendingMembersCountLessThanOrEqual = pendingMembersCountLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrivacyContextEqual() {
	 	return this.privacyContextEqual;
	 }
	
	/**
	 * @param privacyContextEqual string 
	 */
	 setPrivacyContextEqual(privacyContextEqual) {
	 	this.privacyContextEqual = privacyContextEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getInheritedParentIdEqual() {
	 	return this.inheritedParentIdEqual;
	 }
	
	/**
	 * @param inheritedParentIdEqual int 
	 */
	 setInheritedParentIdEqual(inheritedParentIdEqual) {
	 	this.inheritedParentIdEqual = inheritedParentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getInheritedParentIdIn() {
	 	return this.inheritedParentIdIn;
	 }
	
	/**
	 * @param inheritedParentIdIn string 
	 */
	 setInheritedParentIdIn(inheritedParentIdIn) {
	 	this.inheritedParentIdIn = inheritedParentIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueGreaterThanOrEqual() {
	 	return this.partnerSortValueGreaterThanOrEqual;
	 }
	
	/**
	 * @param partnerSortValueGreaterThanOrEqual int 
	 */
	 setPartnerSortValueGreaterThanOrEqual(partnerSortValueGreaterThanOrEqual) {
	 	this.partnerSortValueGreaterThanOrEqual = partnerSortValueGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueLessThanOrEqual() {
	 	return this.partnerSortValueLessThanOrEqual;
	 }
	
	/**
	 * @param partnerSortValueLessThanOrEqual int 
	 */
	 setPartnerSortValueLessThanOrEqual(partnerSortValueLessThanOrEqual) {
	 	this.partnerSortValueLessThanOrEqual = partnerSortValueLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAggregationCategoriesMultiLikeOr() {
	 	return this.aggregationCategoriesMultiLikeOr;
	 }
	
	/**
	 * @param aggregationCategoriesMultiLikeOr string 
	 */
	 setAggregationCategoriesMultiLikeOr(aggregationCategoriesMultiLikeOr) {
	 	this.aggregationCategoriesMultiLikeOr = aggregationCategoriesMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAggregationCategoriesMultiLikeAnd() {
	 	return this.aggregationCategoriesMultiLikeAnd;
	 }
	
	/**
	 * @param aggregationCategoriesMultiLikeAnd string 
	 */
	 setAggregationCategoriesMultiLikeAnd(aggregationCategoriesMultiLikeAnd) {
	 	this.aggregationCategoriesMultiLikeAnd = aggregationCategoriesMultiLikeAnd;
	 }
}
module.exports.CategoryBaseFilter = CategoryBaseFilter;

/**
 *
 */
class CategoryEntryBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryEntryBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCategoryIdEqual() {
	 	return this.categoryIdEqual;
	 }
	
	/**
	 * @param categoryIdEqual int 
	 */
	 setCategoryIdEqual(categoryIdEqual) {
	 	this.categoryIdEqual = categoryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryIdIn() {
	 	return this.categoryIdIn;
	 }
	
	/**
	 * @param categoryIdIn string 
	 */
	 setCategoryIdIn(categoryIdIn) {
	 	this.categoryIdIn = categoryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCategoryFullIdsStartsWith() {
	 	return this.categoryFullIdsStartsWith;
	 }
	
	/**
	 * @param categoryFullIdsStartsWith string 
	 */
	 setCategoryFullIdsStartsWith(categoryFullIdsStartsWith) {
	 	this.categoryFullIdsStartsWith = categoryFullIdsStartsWith;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreatorUserIdEqual() {
	 	return this.creatorUserIdEqual;
	 }
	
	/**
	 * @param creatorUserIdEqual string 
	 */
	 setCreatorUserIdEqual(creatorUserIdEqual) {
	 	this.creatorUserIdEqual = creatorUserIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCreatorUserIdIn() {
	 	return this.creatorUserIdIn;
	 }
	
	/**
	 * @param creatorUserIdIn string 
	 */
	 setCreatorUserIdIn(creatorUserIdIn) {
	 	this.creatorUserIdIn = creatorUserIdIn;
	 }
}
module.exports.CategoryEntryBaseFilter = CategoryEntryBaseFilter;

/**
 *
 */
class CompareMetadataCondition extends CompareCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCompareMetadataCondition';
	}
	
	/**
	 * May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 * @return string
	 */
	 getXPath() {
	 	return this.xPath;
	 }
	
	/**
	 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 */
	 setXPath(xPath) {
	 	this.xPath = xPath;
	 }
	
	/**
	 * Metadata profile id
	 * @return int
	 */
	 getProfileId() {
	 	return this.profileId;
	 }
	
	/**
	 * @param profileId int Metadata profile id
	 */
	 setProfileId(profileId) {
	 	this.profileId = profileId;
	 }
	
	/**
	 * Metadata profile system name
	 * @return string
	 */
	 getProfileSystemName() {
	 	return this.profileSystemName;
	 }
	
	/**
	 * @param profileSystemName string Metadata profile system name
	 */
	 setProfileSystemName(profileSystemName) {
	 	this.profileSystemName = profileSystemName;
	 }
}
module.exports.CompareMetadataCondition = CompareMetadataCondition;

/**
 *
 */
class ControlPanelCommandFilter extends ControlPanelCommandBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaControlPanelCommandFilter';
	}
}
module.exports.ControlPanelCommandFilter = ControlPanelCommandFilter;

/**
 *
 */
class ConversionProfileAssetParamsBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileAssetParamsBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getConversionProfileIdEqual() {
	 	return this.conversionProfileIdEqual;
	 }
	
	/**
	 * @param conversionProfileIdEqual int 
	 */
	 setConversionProfileIdEqual(conversionProfileIdEqual) {
	 	this.conversionProfileIdEqual = conversionProfileIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getConversionProfileIdIn() {
	 	return this.conversionProfileIdIn;
	 }
	
	/**
	 * @param conversionProfileIdIn string 
	 */
	 setConversionProfileIdIn(conversionProfileIdIn) {
	 	this.conversionProfileIdIn = conversionProfileIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getAssetParamsIdEqual() {
	 	return this.assetParamsIdEqual;
	 }
	
	/**
	 * @param assetParamsIdEqual int 
	 */
	 setAssetParamsIdEqual(assetParamsIdEqual) {
	 	this.assetParamsIdEqual = assetParamsIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAssetParamsIdIn() {
	 	return this.assetParamsIdIn;
	 }
	
	/**
	 * @param assetParamsIdIn string 
	 */
	 setAssetParamsIdIn(assetParamsIdIn) {
	 	this.assetParamsIdIn = assetParamsIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReadyBehaviorEqual() {
	 	return this.readyBehaviorEqual;
	 }
	
	/**
	 * @param readyBehaviorEqual int 
	 */
	 setReadyBehaviorEqual(readyBehaviorEqual) {
	 	this.readyBehaviorEqual = readyBehaviorEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReadyBehaviorIn() {
	 	return this.readyBehaviorIn;
	 }
	
	/**
	 * @param readyBehaviorIn string 
	 */
	 setReadyBehaviorIn(readyBehaviorIn) {
	 	this.readyBehaviorIn = readyBehaviorIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getOriginEqual() {
	 	return this.originEqual;
	 }
	
	/**
	 * @param originEqual int 
	 */
	 setOriginEqual(originEqual) {
	 	this.originEqual = originEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOriginIn() {
	 	return this.originIn;
	 }
	
	/**
	 * @param originIn string 
	 */
	 setOriginIn(originIn) {
	 	this.originIn = originIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
}
module.exports.ConversionProfileAssetParamsBaseFilter = ConversionProfileAssetParamsBaseFilter;

/**
 *
 */
class ConversionProfileBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultEntryIdEqual() {
	 	return this.defaultEntryIdEqual;
	 }
	
	/**
	 * @param defaultEntryIdEqual string 
	 */
	 setDefaultEntryIdEqual(defaultEntryIdEqual) {
	 	this.defaultEntryIdEqual = defaultEntryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDefaultEntryIdIn() {
	 	return this.defaultEntryIdIn;
	 }
	
	/**
	 * @param defaultEntryIdIn string 
	 */
	 setDefaultEntryIdIn(defaultEntryIdIn) {
	 	this.defaultEntryIdIn = defaultEntryIdIn;
	 }
}
module.exports.ConversionProfileBaseFilter = ConversionProfileBaseFilter;

/**
 *
 */
class ConvertCollectionJobData extends ConvartableJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvertCollectionJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getDestDirLocalPath() {
	 	return this.destDirLocalPath;
	 }
	
	/**
	 * @param destDirLocalPath string 
	 */
	 setDestDirLocalPath(destDirLocalPath) {
	 	this.destDirLocalPath = destDirLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestDirRemoteUrl() {
	 	return this.destDirRemoteUrl;
	 }
	
	/**
	 * @param destDirRemoteUrl string 
	 */
	 setDestDirRemoteUrl(destDirRemoteUrl) {
	 	this.destDirRemoteUrl = destDirRemoteUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileName() {
	 	return this.destFileName;
	 }
	
	/**
	 * @param destFileName string 
	 */
	 setDestFileName(destFileName) {
	 	this.destFileName = destFileName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getInputXmlLocalPath() {
	 	return this.inputXmlLocalPath;
	 }
	
	/**
	 * @param inputXmlLocalPath string 
	 */
	 setInputXmlLocalPath(inputXmlLocalPath) {
	 	this.inputXmlLocalPath = inputXmlLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getInputXmlRemoteUrl() {
	 	return this.inputXmlRemoteUrl;
	 }
	
	/**
	 * @param inputXmlRemoteUrl string 
	 */
	 setInputXmlRemoteUrl(inputXmlRemoteUrl) {
	 	this.inputXmlRemoteUrl = inputXmlRemoteUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCommandLinesStr() {
	 	return this.commandLinesStr;
	 }
	
	/**
	 * @param commandLinesStr string 
	 */
	 setCommandLinesStr(commandLinesStr) {
	 	this.commandLinesStr = commandLinesStr;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getFlavors() {
	 	return this.flavors;
	 }
	
	/**
	 * @param flavors array 
	 */
	 setFlavors(flavors) {
	 	this.flavors = flavors;
	 }
}
module.exports.ConvertCollectionJobData = ConvertCollectionJobData;

/**
 *
 */
class ConvertJobData extends ConvartableJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConvertJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileSyncLocalPath() {
	 	return this.destFileSyncLocalPath;
	 }
	
	/**
	 * @param destFileSyncLocalPath string 
	 */
	 setDestFileSyncLocalPath(destFileSyncLocalPath) {
	 	this.destFileSyncLocalPath = destFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDestFileSyncRemoteUrl() {
	 	return this.destFileSyncRemoteUrl;
	 }
	
	/**
	 * @param destFileSyncRemoteUrl string 
	 */
	 setDestFileSyncRemoteUrl(destFileSyncRemoteUrl) {
	 	this.destFileSyncRemoteUrl = destFileSyncRemoteUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLogFileSyncLocalPath() {
	 	return this.logFileSyncLocalPath;
	 }
	
	/**
	 * @param logFileSyncLocalPath string 
	 */
	 setLogFileSyncLocalPath(logFileSyncLocalPath) {
	 	this.logFileSyncLocalPath = logFileSyncLocalPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getLogFileSyncRemoteUrl() {
	 	return this.logFileSyncRemoteUrl;
	 }
	
	/**
	 * @param logFileSyncRemoteUrl string 
	 */
	 setLogFileSyncRemoteUrl(logFileSyncRemoteUrl) {
	 	this.logFileSyncRemoteUrl = logFileSyncRemoteUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRemoteMediaId() {
	 	return this.remoteMediaId;
	 }
	
	/**
	 * @param remoteMediaId string 
	 */
	 setRemoteMediaId(remoteMediaId) {
	 	this.remoteMediaId = remoteMediaId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCustomData() {
	 	return this.customData;
	 }
	
	/**
	 * @param customData string 
	 */
	 setCustomData(customData) {
	 	this.customData = customData;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getExtraDestFileSyncs() {
	 	return this.extraDestFileSyncs;
	 }
	
	/**
	 * @param extraDestFileSyncs array 
	 */
	 setExtraDestFileSyncs(extraDestFileSyncs) {
	 	this.extraDestFileSyncs = extraDestFileSyncs;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEngineMessage() {
	 	return this.engineMessage;
	 }
	
	/**
	 * @param engineMessage string 
	 */
	 setEngineMessage(engineMessage) {
	 	this.engineMessage = engineMessage;
	 }
}
module.exports.ConvertJobData = ConvertJobData;

/**
 *
 */
class CountryCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountryCondition';
	}
	
	/**
	 * The ip geo coder engine to be used
	 * @return string
	 */
	 getGeoCoderType() {
	 	return this.geoCoderType;
	 }
	
	/**
	 * @param geoCoderType string The ip geo coder engine to be used
	 */
	 setGeoCoderType(geoCoderType) {
	 	this.geoCoderType = geoCoderType;
	 }
}
module.exports.CountryCondition = CountryCondition;

/**
 *
 */
class CuePointBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCuePointBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual string 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCuePointTypeEqual() {
	 	return this.cuePointTypeEqual;
	 }
	
	/**
	 * @param cuePointTypeEqual string 
	 */
	 setCuePointTypeEqual(cuePointTypeEqual) {
	 	this.cuePointTypeEqual = cuePointTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCuePointTypeIn() {
	 	return this.cuePointTypeIn;
	 }
	
	/**
	 * @param cuePointTypeIn string 
	 */
	 setCuePointTypeIn(cuePointTypeIn) {
	 	this.cuePointTypeIn = cuePointTypeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTriggeredAtGreaterThanOrEqual() {
	 	return this.triggeredAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param triggeredAtGreaterThanOrEqual int 
	 */
	 setTriggeredAtGreaterThanOrEqual(triggeredAtGreaterThanOrEqual) {
	 	this.triggeredAtGreaterThanOrEqual = triggeredAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTriggeredAtLessThanOrEqual() {
	 	return this.triggeredAtLessThanOrEqual;
	 }
	
	/**
	 * @param triggeredAtLessThanOrEqual int 
	 */
	 setTriggeredAtLessThanOrEqual(triggeredAtLessThanOrEqual) {
	 	this.triggeredAtLessThanOrEqual = triggeredAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartTimeGreaterThanOrEqual() {
	 	return this.startTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param startTimeGreaterThanOrEqual int 
	 */
	 setStartTimeGreaterThanOrEqual(startTimeGreaterThanOrEqual) {
	 	this.startTimeGreaterThanOrEqual = startTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartTimeLessThanOrEqual() {
	 	return this.startTimeLessThanOrEqual;
	 }
	
	/**
	 * @param startTimeLessThanOrEqual int 
	 */
	 setStartTimeLessThanOrEqual(startTimeLessThanOrEqual) {
	 	this.startTimeLessThanOrEqual = startTimeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueEqual() {
	 	return this.partnerSortValueEqual;
	 }
	
	/**
	 * @param partnerSortValueEqual int 
	 */
	 setPartnerSortValueEqual(partnerSortValueEqual) {
	 	this.partnerSortValueEqual = partnerSortValueEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerSortValueIn() {
	 	return this.partnerSortValueIn;
	 }
	
	/**
	 * @param partnerSortValueIn string 
	 */
	 setPartnerSortValueIn(partnerSortValueIn) {
	 	this.partnerSortValueIn = partnerSortValueIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueGreaterThanOrEqual() {
	 	return this.partnerSortValueGreaterThanOrEqual;
	 }
	
	/**
	 * @param partnerSortValueGreaterThanOrEqual int 
	 */
	 setPartnerSortValueGreaterThanOrEqual(partnerSortValueGreaterThanOrEqual) {
	 	this.partnerSortValueGreaterThanOrEqual = partnerSortValueGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerSortValueLessThanOrEqual() {
	 	return this.partnerSortValueLessThanOrEqual;
	 }
	
	/**
	 * @param partnerSortValueLessThanOrEqual int 
	 */
	 setPartnerSortValueLessThanOrEqual(partnerSortValueLessThanOrEqual) {
	 	this.partnerSortValueLessThanOrEqual = partnerSortValueLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getForceStopEqual() {
	 	return this.forceStopEqual;
	 }
	
	/**
	 * @param forceStopEqual int 
	 */
	 setForceStopEqual(forceStopEqual) {
	 	this.forceStopEqual = forceStopEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
}
module.exports.CuePointBaseFilter = CuePointBaseFilter;

/**
 *
 */
class DeliveryProfileFilter extends DeliveryProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIsLive() {
	 	return this.isLive;
	 }
	
	/**
	 * @param isLive int 
	 */
	 setIsLive(isLive) {
	 	this.isLive = isLive;
	 }
}
module.exports.DeliveryProfileFilter = DeliveryProfileFilter;

/**
 *
 */
class DeliveryProfileGenericRtmp extends DeliveryProfileRtmp{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericRtmp';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPattern() {
	 	return this.pattern;
	 }
	
	/**
	 * @param pattern string 
	 */
	 setPattern(pattern) {
	 	this.pattern = pattern;
	 }
	
	/**
	 * rendererClass
	 * @return string
	 */
	 getRendererClass() {
	 	return this.rendererClass;
	 }
	
	/**
	 * @param rendererClass string rendererClass
	 */
	 setRendererClass(rendererClass) {
	 	this.rendererClass = rendererClass;
	 }
}
module.exports.DeliveryProfileGenericRtmp = DeliveryProfileGenericRtmp;

/**
 *
 */
class DeliveryProfileVodPackagerHls extends DeliveryProfileVodPackagerPlayServer{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileVodPackagerHls';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getAllowFairplayOffline() {
	 	return this.allowFairplayOffline;
	 }
	
	/**
	 * @param allowFairplayOffline bool 
	 */
	 setAllowFairplayOffline(allowFairplayOffline) {
	 	this.allowFairplayOffline = allowFairplayOffline;
	 }
}
module.exports.DeliveryProfileVodPackagerHls = DeliveryProfileVodPackagerHls;

/**
 *
 */
class DistributionDeleteJobData extends DistributionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionDeleteJobData';
	}
	
	/**
	 * Flag signifying that the associated distribution item should not be moved to 'removed' status
	 * @return bool
	 */
	 getKeepDistributionItem() {
	 	return this.keepDistributionItem;
	 }
	
	/**
	 * @param keepDistributionItem bool Flag signifying that the associated distribution item should not be moved to 'removed' status
	 */
	 setKeepDistributionItem(keepDistributionItem) {
	 	this.keepDistributionItem = keepDistributionItem;
	 }
}
module.exports.DistributionDeleteJobData = DistributionDeleteJobData;

/**
 *
 */
class DistributionFetchReportJobData extends DistributionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionFetchReportJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPlays() {
	 	return this.plays;
	 }
	
	/**
	 * @param plays int 
	 */
	 setPlays(plays) {
	 	this.plays = plays;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getViews() {
	 	return this.views;
	 }
	
	/**
	 * @param views int 
	 */
	 setViews(views) {
	 	this.views = views;
	 }
}
module.exports.DistributionFetchReportJobData = DistributionFetchReportJobData;

/**
 *
 */
class DistributionProfileFilter extends DistributionProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProfileFilter';
	}
}
module.exports.DistributionProfileFilter = DistributionProfileFilter;

/**
 *
 */
class DistributionProviderFilter extends DistributionProviderBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionProviderFilter';
	}
}
module.exports.DistributionProviderFilter = DistributionProviderFilter;

/**
 *
 */
class DistributionSubmitJobData extends DistributionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionSubmitJobData';
	}
}
module.exports.DistributionSubmitJobData = DistributionSubmitJobData;

/**
 *
 */
class DistributionUpdateJobData extends DistributionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionUpdateJobData';
	}
}
module.exports.DistributionUpdateJobData = DistributionUpdateJobData;

/**
 *
 */
class DistributionValidationErrorInvalidMetadata extends DistributionValidationErrorInvalidData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionValidationErrorInvalidMetadata';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileId() {
	 	return this.metadataProfileId;
	 }
	
	/**
	 * @param metadataProfileId int 
	 */
	 setMetadataProfileId(metadataProfileId) {
	 	this.metadataProfileId = metadataProfileId;
	 }
}
module.exports.DistributionValidationErrorInvalidMetadata = DistributionValidationErrorInvalidMetadata;

/**
 *
 */
class DocumentFlavorParams extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDocumentFlavorParams';
	}
}
module.exports.DocumentFlavorParams = DocumentFlavorParams;

/**
 *
 */
class DropFolderFileFilter extends DropFolderFileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFileFilter';
	}
}
module.exports.DropFolderFileFilter = DropFolderFileFilter;

/**
 *
 */
class DropFolderFilter extends DropFolderBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCurrentDc() {
	 	return this.currentDc;
	 }
	
	/**
	 * @param currentDc int 
	 */
	 setCurrentDc(currentDc) {
	 	this.currentDc = currentDc;
	 }
}
module.exports.DropFolderFilter = DropFolderFilter;

/**
 *
 */
class DynamicObjectSearchItem extends SearchOperator{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDynamicObjectSearchItem';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field string 
	 */
	 setField(field) {
	 	this.field = field;
	 }
}
module.exports.DynamicObjectSearchItem = DynamicObjectSearchItem;

/**
 *
 */
class EdgeServerNode extends DeliveryServerNode{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEdgeServerNode';
	}
	
	/**
	 * Delivery server playback Domain
	 * @return string
	 */
	 getPlaybackDomain() {
	 	return this.playbackDomain;
	 }
	
	/**
	 * @param playbackDomain string Delivery server playback Domain
	 */
	 setPlaybackDomain(playbackDomain) {
	 	this.playbackDomain = playbackDomain;
	 }
	
	/**
	 * Overdie edge server default configuration - json format
	 * @return string
	 */
	 getConfig() {
	 	return this.config;
	 }
	
	/**
	 * @param config string Overdie edge server default configuration - json format
	 */
	 setConfig(config) {
	 	this.config = config;
	 }
}
module.exports.EdgeServerNode = EdgeServerNode;

/**
 *
 */
class EmailNotificationDispatchJobData extends EventNotificationDispatchJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationDispatchJobData';
	}
	
	/**
	 * Define the email sender email
	 * @return string
	 */
	 getFromEmail() {
	 	return this.fromEmail;
	 }
	
	/**
	 * @param fromEmail string Define the email sender email
	 */
	 setFromEmail(fromEmail) {
	 	this.fromEmail = fromEmail;
	 }
	
	/**
	 * Define the email sender name
	 * @return string
	 */
	 getFromName() {
	 	return this.fromName;
	 }
	
	/**
	 * @param fromName string Define the email sender name
	 */
	 setFromName(fromName) {
	 	this.fromName = fromName;
	 }
	
	/**
	 * Email recipient emails and names, key is mail address and value is the name
	 * @return EmailNotificationRecipientJobData
	 */
	 getTo() {
	 	return this.to;
	 }
	
	/**
	 * @param to EmailNotificationRecipientJobData Email recipient emails and names, key is mail address and value is the name
	 */
	 setTo(to) {
	 	this.to = to;
	 }
	
	/**
	 * Email cc emails and names, key is mail address and value is the name
	 * @return EmailNotificationRecipientJobData
	 */
	 getCc() {
	 	return this.cc;
	 }
	
	/**
	 * @param cc EmailNotificationRecipientJobData Email cc emails and names, key is mail address and value is the name
	 */
	 setCc(cc) {
	 	this.cc = cc;
	 }
	
	/**
	 * Email bcc emails and names, key is mail address and value is the name
	 * @return EmailNotificationRecipientJobData
	 */
	 getBcc() {
	 	return this.bcc;
	 }
	
	/**
	 * @param bcc EmailNotificationRecipientJobData Email bcc emails and names, key is mail address and value is the name
	 */
	 setBcc(bcc) {
	 	this.bcc = bcc;
	 }
	
	/**
	 * Email addresses that a replies should be sent to, key is mail address and value is the name
	 * @return EmailNotificationRecipientJobData
	 */
	 getReplyTo() {
	 	return this.replyTo;
	 }
	
	/**
	 * @param replyTo EmailNotificationRecipientJobData Email addresses that a replies should be sent to, key is mail address and value is the name
	 */
	 setReplyTo(replyTo) {
	 	this.replyTo = replyTo;
	 }
	
	/**
	 * Define the email priority
	 * @return int
	 */
	 getPriority() {
	 	return this.priority;
	 }
	
	/**
	 * @param priority int Define the email priority
	 */
	 setPriority(priority) {
	 	this.priority = priority;
	 }
	
	/**
	 * Email address that a reading confirmation will be sent to
	 * @return string
	 */
	 getConfirmReadingTo() {
	 	return this.confirmReadingTo;
	 }
	
	/**
	 * @param confirmReadingTo string Email address that a reading confirmation will be sent to
	 */
	 setConfirmReadingTo(confirmReadingTo) {
	 	this.confirmReadingTo = confirmReadingTo;
	 }
	
	/**
	 * Hostname to use in Message-Id and Received headers and as default HELO string.
 * If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'
	 * @return string
	 */
	 getHostname() {
	 	return this.hostname;
	 }
	
	/**
	 * @param hostname string Hostname to use in Message-Id and Received headers and as default HELO string.
 * If empty, the value returned by SERVER_NAME is used or 'localhost.localdomain'
	 */
	 setHostname(hostname) {
	 	this.hostname = hostname;
	 }
	
	/**
	 * Sets the message ID to be used in the Message-Id header.
 * If empty, a unique id will be generated
	 * @return string
	 */
	 getMessageID() {
	 	return this.messageID;
	 }
	
	/**
	 * @param messageID string Sets the message ID to be used in the Message-Id header.
 * If empty, a unique id will be generated
	 */
	 setMessageID(messageID) {
	 	this.messageID = messageID;
	 }
	
	/**
	 * Adds a e-mail custom header
	 * @return array
	 */
	 getCustomHeaders() {
	 	return this.customHeaders;
	 }
	
	/**
	 * @param customHeaders array Adds a e-mail custom header
	 */
	 setCustomHeaders(customHeaders) {
	 	this.customHeaders = customHeaders;
	 }
}
module.exports.EmailNotificationDispatchJobData = EmailNotificationDispatchJobData;

/**
 *
 */
class EndUserReportInputFilter extends ReportInputFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEndUserReportInputFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getApplication() {
	 	return this.application;
	 }
	
	/**
	 * @param application string 
	 */
	 setApplication(application) {
	 	this.application = application;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIds() {
	 	return this.userIds;
	 }
	
	/**
	 * @param userIds string 
	 */
	 setUserIds(userIds) {
	 	this.userIds = userIds;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPlaybackContext() {
	 	return this.playbackContext;
	 }
	
	/**
	 * @param playbackContext string 
	 */
	 setPlaybackContext(playbackContext) {
	 	this.playbackContext = playbackContext;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAncestorPlaybackContext() {
	 	return this.ancestorPlaybackContext;
	 }
	
	/**
	 * @param ancestorPlaybackContext string 
	 */
	 setAncestorPlaybackContext(ancestorPlaybackContext) {
	 	this.ancestorPlaybackContext = ancestorPlaybackContext;
	 }
}
module.exports.EndUserReportInputFilter = EndUserReportInputFilter;

/**
 *
 */
class EntryDistributionBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryDistributionBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSubmittedAtGreaterThanOrEqual() {
	 	return this.submittedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param submittedAtGreaterThanOrEqual int 
	 */
	 setSubmittedAtGreaterThanOrEqual(submittedAtGreaterThanOrEqual) {
	 	this.submittedAtGreaterThanOrEqual = submittedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSubmittedAtLessThanOrEqual() {
	 	return this.submittedAtLessThanOrEqual;
	 }
	
	/**
	 * @param submittedAtLessThanOrEqual int 
	 */
	 setSubmittedAtLessThanOrEqual(submittedAtLessThanOrEqual) {
	 	this.submittedAtLessThanOrEqual = submittedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDistributionProfileIdEqual() {
	 	return this.distributionProfileIdEqual;
	 }
	
	/**
	 * @param distributionProfileIdEqual int 
	 */
	 setDistributionProfileIdEqual(distributionProfileIdEqual) {
	 	this.distributionProfileIdEqual = distributionProfileIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDistributionProfileIdIn() {
	 	return this.distributionProfileIdIn;
	 }
	
	/**
	 * @param distributionProfileIdIn string 
	 */
	 setDistributionProfileIdIn(distributionProfileIdIn) {
	 	this.distributionProfileIdIn = distributionProfileIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDirtyStatusEqual() {
	 	return this.dirtyStatusEqual;
	 }
	
	/**
	 * @param dirtyStatusEqual int 
	 */
	 setDirtyStatusEqual(dirtyStatusEqual) {
	 	this.dirtyStatusEqual = dirtyStatusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDirtyStatusIn() {
	 	return this.dirtyStatusIn;
	 }
	
	/**
	 * @param dirtyStatusIn string 
	 */
	 setDirtyStatusIn(dirtyStatusIn) {
	 	this.dirtyStatusIn = dirtyStatusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSunriseGreaterThanOrEqual() {
	 	return this.sunriseGreaterThanOrEqual;
	 }
	
	/**
	 * @param sunriseGreaterThanOrEqual int 
	 */
	 setSunriseGreaterThanOrEqual(sunriseGreaterThanOrEqual) {
	 	this.sunriseGreaterThanOrEqual = sunriseGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSunriseLessThanOrEqual() {
	 	return this.sunriseLessThanOrEqual;
	 }
	
	/**
	 * @param sunriseLessThanOrEqual int 
	 */
	 setSunriseLessThanOrEqual(sunriseLessThanOrEqual) {
	 	this.sunriseLessThanOrEqual = sunriseLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSunsetGreaterThanOrEqual() {
	 	return this.sunsetGreaterThanOrEqual;
	 }
	
	/**
	 * @param sunsetGreaterThanOrEqual int 
	 */
	 setSunsetGreaterThanOrEqual(sunsetGreaterThanOrEqual) {
	 	this.sunsetGreaterThanOrEqual = sunsetGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSunsetLessThanOrEqual() {
	 	return this.sunsetLessThanOrEqual;
	 }
	
	/**
	 * @param sunsetLessThanOrEqual int 
	 */
	 setSunsetLessThanOrEqual(sunsetLessThanOrEqual) {
	 	this.sunsetLessThanOrEqual = sunsetLessThanOrEqual;
	 }
}
module.exports.EntryDistributionBaseFilter = EntryDistributionBaseFilter;

/**
 *
 */
class EntryReferrerLiveStats extends EntryLiveStats{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryReferrerLiveStats';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getReferrer() {
	 	return this.referrer;
	 }
	
	/**
	 * @param referrer string 
	 */
	 setReferrer(referrer) {
	 	this.referrer = referrer;
	 }
}
module.exports.EntryReferrerLiveStats = EntryReferrerLiveStats;

/**
 *
 */
class EntryResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryResource';
	}
	
	/**
	 * ID of the source entry
	 * @return string
	 */
	 getEntryId() {
	 	return this.entryId;
	 }
	
	/**
	 * @param entryId string ID of the source entry
	 */
	 setEntryId(entryId) {
	 	this.entryId = entryId;
	 }
	
	/**
	 * ID of the source flavor params, set to null to use the source flavor
	 * @return int
	 */
	 getFlavorParamsId() {
	 	return this.flavorParamsId;
	 }
	
	/**
	 * @param flavorParamsId int ID of the source flavor params, set to null to use the source flavor
	 */
	 setFlavorParamsId(flavorParamsId) {
	 	this.flavorParamsId = flavorParamsId;
	 }
}
module.exports.EntryResource = EntryResource;

/**
 *
 */
class EntryServerNodeBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryServerNodeBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getServerNodeIdEqual() {
	 	return this.serverNodeIdEqual;
	 }
	
	/**
	 * @param serverNodeIdEqual int 
	 */
	 setServerNodeIdEqual(serverNodeIdEqual) {
	 	this.serverNodeIdEqual = serverNodeIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServerTypeEqual() {
	 	return this.serverTypeEqual;
	 }
	
	/**
	 * @param serverTypeEqual string 
	 */
	 setServerTypeEqual(serverTypeEqual) {
	 	this.serverTypeEqual = serverTypeEqual;
	 }
}
module.exports.EntryServerNodeBaseFilter = EntryServerNodeBaseFilter;

/**
 *
 */
class EventNotificationTemplateFilter extends EventNotificationTemplateBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEventNotificationTemplateFilter';
	}
}
module.exports.EventNotificationTemplateFilter = EventNotificationTemplateFilter;

/**
 *
 */
class ExtractMediaJobData extends ConvartableJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExtractMediaJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getCalculateComplexity() {
	 	return this.calculateComplexity;
	 }
	
	/**
	 * @param calculateComplexity bool 
	 */
	 setCalculateComplexity(calculateComplexity) {
	 	this.calculateComplexity = calculateComplexity;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getExtractId3Tags() {
	 	return this.extractId3Tags;
	 }
	
	/**
	 * @param extractId3Tags bool 
	 */
	 setExtractId3Tags(extractId3Tags) {
	 	this.extractId3Tags = extractId3Tags;
	 }
	
	/**
	 * The data output file
	 * @return string
	 */
	 getDestDataFilePath() {
	 	return this.destDataFilePath;
	 }
	
	/**
	 * @param destDataFilePath string The data output file
	 */
	 setDestDataFilePath(destDataFilePath) {
	 	this.destDataFilePath = destDataFilePath;
	 }
}
module.exports.ExtractMediaJobData = ExtractMediaJobData;

/**
 *
 */
class FacebookDistributionJobProviderData extends ConfigurableDistributionJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookDistributionJobProviderData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getVideoAssetFilePath() {
	 	return this.videoAssetFilePath;
	 }
	
	/**
	 * @param videoAssetFilePath string 
	 */
	 setVideoAssetFilePath(videoAssetFilePath) {
	 	this.videoAssetFilePath = videoAssetFilePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbAssetFilePath() {
	 	return this.thumbAssetFilePath;
	 }
	
	/**
	 * @param thumbAssetFilePath string 
	 */
	 setThumbAssetFilePath(thumbAssetFilePath) {
	 	this.thumbAssetFilePath = thumbAssetFilePath;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getCaptionsInfo() {
	 	return this.captionsInfo;
	 }
	
	/**
	 * @param captionsInfo array 
	 */
	 setCaptionsInfo(captionsInfo) {
	 	this.captionsInfo = captionsInfo;
	 }
}
module.exports.FacebookDistributionJobProviderData = FacebookDistributionJobProviderData;

/**
 *
 */
class FacebookDistributionProfile extends ConfigurableDistributionProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookDistributionProfile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getApiAuthorizeUrl() {
	 	return this.apiAuthorizeUrl;
	 }
	
	/**
	 * @param apiAuthorizeUrl string 
	 */
	 setApiAuthorizeUrl(apiAuthorizeUrl) {
	 	this.apiAuthorizeUrl = apiAuthorizeUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPageId() {
	 	return this.pageId;
	 }
	
	/**
	 * @param pageId string 
	 */
	 setPageId(pageId) {
	 	this.pageId = pageId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPageAccessToken() {
	 	return this.pageAccessToken;
	 }
	
	/**
	 * @param pageAccessToken string 
	 */
	 setPageAccessToken(pageAccessToken) {
	 	this.pageAccessToken = pageAccessToken;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserAccessToken() {
	 	return this.userAccessToken;
	 }
	
	/**
	 * @param userAccessToken string 
	 */
	 setUserAccessToken(userAccessToken) {
	 	this.userAccessToken = userAccessToken;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getState() {
	 	return this.state;
	 }
	
	/**
	 * @param state string 
	 */
	 setState(state) {
	 	this.state = state;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPermissions() {
	 	return this.permissions;
	 }
	
	/**
	 * @param permissions string 
	 */
	 setPermissions(permissions) {
	 	this.permissions = permissions;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getReRequestPermissions() {
	 	return this.reRequestPermissions;
	 }
	
	/**
	 * @param reRequestPermissions int 
	 */
	 setReRequestPermissions(reRequestPermissions) {
	 	this.reRequestPermissions = reRequestPermissions;
	 }
}
module.exports.FacebookDistributionProfile = FacebookDistributionProfile;

/**
 *
 */
class FairPlayPlaybackPluginData extends DrmPlaybackPluginData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFairPlayPlaybackPluginData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getCertificate() {
	 	return this.certificate;
	 }
	
	/**
	 * @param certificate string 
	 */
	 setCertificate(certificate) {
	 	this.certificate = certificate;
	 }
}
module.exports.FairPlayPlaybackPluginData = FairPlayPlaybackPluginData;

/**
 *
 */
class IntegerField extends IntegerValue{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIntegerField';
	}
}
module.exports.IntegerField = IntegerField;

/**
 *
 */
class FieldCompareCondition extends CompareCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFieldCompareCondition';
	}
	
	/**
	 * Field to evaluate
	 * @return IntegerField
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field IntegerField Field to evaluate
	 */
	 setField(field) {
	 	this.field = field;
	 }
}
module.exports.FieldCompareCondition = FieldCompareCondition;

/**
 *
 */
class StringField extends StringValue{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringField';
	}
}
module.exports.StringField = StringField;

/**
 *
 */
class FieldMatchCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFieldMatchCondition';
	}
	
	/**
	 * Field to evaluate
	 * @return StringField
	 */
	 getField() {
	 	return this.field;
	 }
	
	/**
	 * @param field StringField Field to evaluate
	 */
	 setField(field) {
	 	this.field = field;
	 }
}
module.exports.FieldMatchCondition = FieldMatchCondition;

/**
 *
 */
class FileAssetBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileAssetBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFileAssetObjectTypeEqual() {
	 	return this.fileAssetObjectTypeEqual;
	 }
	
	/**
	 * @param fileAssetObjectTypeEqual string 
	 */
	 setFileAssetObjectTypeEqual(fileAssetObjectTypeEqual) {
	 	this.fileAssetObjectTypeEqual = fileAssetObjectTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectIdEqual() {
	 	return this.objectIdEqual;
	 }
	
	/**
	 * @param objectIdEqual string 
	 */
	 setObjectIdEqual(objectIdEqual) {
	 	this.objectIdEqual = objectIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectIdIn() {
	 	return this.objectIdIn;
	 }
	
	/**
	 * @param objectIdIn string 
	 */
	 setObjectIdIn(objectIdIn) {
	 	this.objectIdIn = objectIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.FileAssetBaseFilter = FileAssetBaseFilter;

/**
 *
 */
class FileSyncFilter extends FileSyncBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileSyncFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCurrentDc() {
	 	return this.currentDc;
	 }
	
	/**
	 * @param currentDc int 
	 */
	 setCurrentDc(currentDc) {
	 	this.currentDc = currentDc;
	 }
}
module.exports.FileSyncFilter = FileSyncFilter;

/**
 *
 */
class FileSyncResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileSyncResource';
	}
	
	/**
	 * The object type of the file sync object
	 * @return int
	 */
	 getFileSyncObjectType() {
	 	return this.fileSyncObjectType;
	 }
	
	/**
	 * @param fileSyncObjectType int The object type of the file sync object
	 */
	 setFileSyncObjectType(fileSyncObjectType) {
	 	this.fileSyncObjectType = fileSyncObjectType;
	 }
	
	/**
	 * The object sub-type of the file sync object
	 * @return int
	 */
	 getObjectSubType() {
	 	return this.objectSubType;
	 }
	
	/**
	 * @param objectSubType int The object sub-type of the file sync object
	 */
	 setObjectSubType(objectSubType) {
	 	this.objectSubType = objectSubType;
	 }
	
	/**
	 * The object id of the file sync object
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string The object id of the file sync object
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * The version of the file sync object
	 * @return string
	 */
	 getVersion() {
	 	return this.version;
	 }
	
	/**
	 * @param version string The version of the file sync object
	 */
	 setVersion(version) {
	 	this.version = version;
	 }
}
module.exports.FileSyncResource = FileSyncResource;

/**
 *
 */
class FtpDropFolder extends RemoteDropFolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFtpDropFolder';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getHost() {
	 	return this.host;
	 }
	
	/**
	 * @param host string 
	 */
	 setHost(host) {
	 	this.host = host;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPort() {
	 	return this.port;
	 }
	
	/**
	 * @param port int 
	 */
	 setPort(port) {
	 	this.port = port;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string 
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
}
module.exports.FtpDropFolder = FtpDropFolder;

/**
 *
 */
class GenericDistributionProviderActionFilter extends GenericDistributionProviderActionBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProviderActionFilter';
	}
}
module.exports.GenericDistributionProviderActionFilter = GenericDistributionProviderActionFilter;

/**
 *
 */
class GenericXsltSyndicationFeed extends GenericSyndicationFeed{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericXsltSyndicationFeed';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getXslt() {
	 	return this.xslt;
	 }
	
	/**
	 * @param xslt string 
	 */
	 setXslt(xslt) {
	 	this.xslt = xslt;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getItemXpathsToExtend() {
	 	return this.itemXpathsToExtend;
	 }
	
	/**
	 * @param itemXpathsToExtend array 
	 */
	 setItemXpathsToExtend(itemXpathsToExtend) {
	 	this.itemXpathsToExtend = itemXpathsToExtend;
	 }
}
module.exports.GenericXsltSyndicationFeed = GenericXsltSyndicationFeed;

/**
 *
 */
class GeoDistanceCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGeoDistanceCondition';
	}
	
	/**
	 * The ip geo coder engine to be used
	 * @return string
	 */
	 getGeoCoderType() {
	 	return this.geoCoderType;
	 }
	
	/**
	 * @param geoCoderType string The ip geo coder engine to be used
	 */
	 setGeoCoderType(geoCoderType) {
	 	this.geoCoderType = geoCoderType;
	 }
}
module.exports.GeoDistanceCondition = GeoDistanceCondition;

/**
 *
 */
class GeoTimeLiveStats extends EntryLiveStats{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGeoTimeLiveStats';
	}
	
	/**
	 * 
	 * @return Coordinate
	 */
	 getCity() {
	 	return this.city;
	 }
	
	/**
	 * @param city Coordinate 
	 */
	 setCity(city) {
	 	this.city = city;
	 }
	
	/**
	 * 
	 * @return Coordinate
	 */
	 getCountry() {
	 	return this.country;
	 }
	
	/**
	 * @param country Coordinate 
	 */
	 setCountry(country) {
	 	this.country = country;
	 }
}
module.exports.GeoTimeLiveStats = GeoTimeLiveStats;

/**
 *
 */
class GroupUserBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGroupUserBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGroupIdEqual() {
	 	return this.groupIdEqual;
	 }
	
	/**
	 * @param groupIdEqual string 
	 */
	 setGroupIdEqual(groupIdEqual) {
	 	this.groupIdEqual = groupIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGroupIdIn() {
	 	return this.groupIdIn;
	 }
	
	/**
	 * @param groupIdIn string 
	 */
	 setGroupIdIn(groupIdIn) {
	 	this.groupIdIn = groupIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.GroupUserBaseFilter = GroupUserBaseFilter;

/**
 *
 */
class HttpNotificationDispatchJobData extends EventNotificationDispatchJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationDispatchJobData';
	}
	
	/**
	 * Remote server URL
	 * @return string
	 */
	 getUrl() {
	 	return this.url;
	 }
	
	/**
	 * @param url string Remote server URL
	 */
	 setUrl(url) {
	 	this.url = url;
	 }
	
	/**
	 * Request method
	 * @return int
	 */
	 getMethod() {
	 	return this.method;
	 }
	
	/**
	 * @param method int Request method
	 */
	 setMethod(method) {
	 	this.method = method;
	 }
	
	/**
	 * Data to send
	 * @return string
	 */
	 getData() {
	 	return this.data;
	 }
	
	/**
	 * @param data string Data to send
	 */
	 setData(data) {
	 	this.data = data;
	 }
	
	/**
	 * The maximum number of seconds to allow cURL functions to execute
	 * @return int
	 */
	 getTimeout() {
	 	return this.timeout;
	 }
	
	/**
	 * @param timeout int The maximum number of seconds to allow cURL functions to execute
	 */
	 setTimeout(timeout) {
	 	this.timeout = timeout;
	 }
	
	/**
	 * The number of seconds to wait while trying to connect.
 * Must be larger than zero
	 * @return int
	 */
	 getConnectTimeout() {
	 	return this.connectTimeout;
	 }
	
	/**
	 * @param connectTimeout int The number of seconds to wait while trying to connect.
 * Must be larger than zero
	 */
	 setConnectTimeout(connectTimeout) {
	 	this.connectTimeout = connectTimeout;
	 }
	
	/**
	 * A username to use for the connection
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string A username to use for the connection
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * A password to use for the connection
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string A password to use for the connection
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * The HTTP authentication method to use
	 * @return int
	 */
	 getAuthenticationMethod() {
	 	return this.authenticationMethod;
	 }
	
	/**
	 * @param authenticationMethod int The HTTP authentication method to use
	 */
	 setAuthenticationMethod(authenticationMethod) {
	 	this.authenticationMethod = authenticationMethod;
	 }
	
	/**
	 * The SSL version (2 or 3) to use.
 * By default PHP will try to determine this itself, although in some cases this must be set manually
	 * @return int
	 */
	 getSslVersion() {
	 	return this.sslVersion;
	 }
	
	/**
	 * @param sslVersion int The SSL version (2 or 3) to use.
 * By default PHP will try to determine this itself, although in some cases this must be set manually
	 */
	 setSslVersion(sslVersion) {
	 	this.sslVersion = sslVersion;
	 }
	
	/**
	 * SSL certificate to verify the peer with
	 * @return string
	 */
	 getSslCertificate() {
	 	return this.sslCertificate;
	 }
	
	/**
	 * @param sslCertificate string SSL certificate to verify the peer with
	 */
	 setSslCertificate(sslCertificate) {
	 	this.sslCertificate = sslCertificate;
	 }
	
	/**
	 * The format of the certificate
	 * @return string
	 */
	 getSslCertificateType() {
	 	return this.sslCertificateType;
	 }
	
	/**
	 * @param sslCertificateType string The format of the certificate
	 */
	 setSslCertificateType(sslCertificateType) {
	 	this.sslCertificateType = sslCertificateType;
	 }
	
	/**
	 * The password required to use the certificate
	 * @return string
	 */
	 getSslCertificatePassword() {
	 	return this.sslCertificatePassword;
	 }
	
	/**
	 * @param sslCertificatePassword string The password required to use the certificate
	 */
	 setSslCertificatePassword(sslCertificatePassword) {
	 	this.sslCertificatePassword = sslCertificatePassword;
	 }
	
	/**
	 * The identifier for the crypto engine of the private SSL key specified in ssl key
	 * @return string
	 */
	 getSslEngine() {
	 	return this.sslEngine;
	 }
	
	/**
	 * @param sslEngine string The identifier for the crypto engine of the private SSL key specified in ssl key
	 */
	 setSslEngine(sslEngine) {
	 	this.sslEngine = sslEngine;
	 }
	
	/**
	 * The identifier for the crypto engine used for asymmetric crypto operations
	 * @return string
	 */
	 getSslEngineDefault() {
	 	return this.sslEngineDefault;
	 }
	
	/**
	 * @param sslEngineDefault string The identifier for the crypto engine used for asymmetric crypto operations
	 */
	 setSslEngineDefault(sslEngineDefault) {
	 	this.sslEngineDefault = sslEngineDefault;
	 }
	
	/**
	 * The key type of the private SSL key specified in ssl key - PEM / DER / ENG
	 * @return string
	 */
	 getSslKeyType() {
	 	return this.sslKeyType;
	 }
	
	/**
	 * @param sslKeyType string The key type of the private SSL key specified in ssl key - PEM / DER / ENG
	 */
	 setSslKeyType(sslKeyType) {
	 	this.sslKeyType = sslKeyType;
	 }
	
	/**
	 * Private SSL key
	 * @return string
	 */
	 getSslKey() {
	 	return this.sslKey;
	 }
	
	/**
	 * @param sslKey string Private SSL key
	 */
	 setSslKey(sslKey) {
	 	this.sslKey = sslKey;
	 }
	
	/**
	 * The secret password needed to use the private SSL key specified in ssl key
	 * @return string
	 */
	 getSslKeyPassword() {
	 	return this.sslKeyPassword;
	 }
	
	/**
	 * @param sslKeyPassword string The secret password needed to use the private SSL key specified in ssl key
	 */
	 setSslKeyPassword(sslKeyPassword) {
	 	this.sslKeyPassword = sslKeyPassword;
	 }
	
	/**
	 * Adds a e-mail custom header
	 * @return array
	 */
	 getCustomHeaders() {
	 	return this.customHeaders;
	 }
	
	/**
	 * @param customHeaders array Adds a e-mail custom header
	 */
	 setCustomHeaders(customHeaders) {
	 	this.customHeaders = customHeaders;
	 }
	
	/**
	 * The secret to sign the notification with
	 * @return string
	 */
	 getSignSecret() {
	 	return this.signSecret;
	 }
	
	/**
	 * @param signSecret string The secret to sign the notification with
	 */
	 setSignSecret(signSecret) {
	 	this.signSecret = signSecret;
	 }
}
module.exports.HttpNotificationDispatchJobData = HttpNotificationDispatchJobData;

/**
 *
 */
class IdeticDistributionJobProviderData extends ConfigurableDistributionJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIdeticDistributionJobProviderData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getThumbnailUrl() {
	 	return this.thumbnailUrl;
	 }
	
	/**
	 * @param thumbnailUrl string 
	 */
	 setThumbnailUrl(thumbnailUrl) {
	 	this.thumbnailUrl = thumbnailUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetUrl() {
	 	return this.flavorAssetUrl;
	 }
	
	/**
	 * @param flavorAssetUrl string 
	 */
	 setFlavorAssetUrl(flavorAssetUrl) {
	 	this.flavorAssetUrl = flavorAssetUrl;
	 }
}
module.exports.IdeticDistributionJobProviderData = IdeticDistributionJobProviderData;

/**
 *
 */
class IdeticDistributionProfile extends ConfigurableDistributionProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIdeticDistributionProfile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFtpPath() {
	 	return this.ftpPath;
	 }
	
	/**
	 * @param ftpPath string 
	 */
	 setFtpPath(ftpPath) {
	 	this.ftpPath = ftpPath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string 
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDomain() {
	 	return this.domain;
	 }
	
	/**
	 * @param domain string 
	 */
	 setDomain(domain) {
	 	this.domain = domain;
	 }
}
module.exports.IdeticDistributionProfile = IdeticDistributionProfile;

/**
 *
 */
class ImageFlavorParams extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageFlavorParams';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getDensityWidth() {
	 	return this.densityWidth;
	 }
	
	/**
	 * @param densityWidth int 
	 */
	 setDensityWidth(densityWidth) {
	 	this.densityWidth = densityWidth;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDensityHeight() {
	 	return this.densityHeight;
	 }
	
	/**
	 * @param densityHeight int 
	 */
	 setDensityHeight(densityHeight) {
	 	this.densityHeight = densityHeight;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSizeWidth() {
	 	return this.sizeWidth;
	 }
	
	/**
	 * @param sizeWidth int 
	 */
	 setSizeWidth(sizeWidth) {
	 	this.sizeWidth = sizeWidth;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSizeHeight() {
	 	return this.sizeHeight;
	 }
	
	/**
	 * @param sizeHeight int 
	 */
	 setSizeHeight(sizeHeight) {
	 	this.sizeHeight = sizeHeight;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDepth() {
	 	return this.depth;
	 }
	
	/**
	 * @param depth int 
	 */
	 setDepth(depth) {
	 	this.depth = depth;
	 }
}
module.exports.ImageFlavorParams = ImageFlavorParams;

/**
 *
 */
class IpAddressCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIpAddressCondition';
	}
	
	/**
	 * allow internal ips
	 * @return bool
	 */
	 getAcceptInternalIps() {
	 	return this.acceptInternalIps;
	 }
	
	/**
	 * @param acceptInternalIps bool allow internal ips
	 */
	 setAcceptInternalIps(acceptInternalIps) {
	 	this.acceptInternalIps = acceptInternalIps;
	 }
	
	/**
	 * http header name for extracting the ip
	 * @return string
	 */
	 getHttpHeader() {
	 	return this.httpHeader;
	 }
	
	/**
	 * @param httpHeader string http header name for extracting the ip
	 */
	 setHttpHeader(httpHeader) {
	 	this.httpHeader = httpHeader;
	 }
}
module.exports.IpAddressCondition = IpAddressCondition;

/**
 *
 */
class LikeBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLikeBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
}
module.exports.LikeBaseFilter = LikeBaseFilter;

/**
 *
 */
class LiveAsset extends FlavorAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveAsset';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getMulticastIP() {
	 	return this.multicastIP;
	 }
	
	/**
	 * @param multicastIP string 
	 */
	 setMulticastIP(multicastIP) {
	 	this.multicastIP = multicastIP;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMulticastPort() {
	 	return this.multicastPort;
	 }
	
	/**
	 * @param multicastPort int 
	 */
	 setMulticastPort(multicastPort) {
	 	this.multicastPort = multicastPort;
	 }
}
module.exports.LiveAsset = LiveAsset;

/**
 *
 */
class LiveChannelSegmentBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelSegmentBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getChannelIdEqual() {
	 	return this.channelIdEqual;
	 }
	
	/**
	 * @param channelIdEqual string 
	 */
	 setChannelIdEqual(channelIdEqual) {
	 	this.channelIdEqual = channelIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getChannelIdIn() {
	 	return this.channelIdIn;
	 }
	
	/**
	 * @param channelIdIn string 
	 */
	 setChannelIdIn(channelIdIn) {
	 	this.channelIdIn = channelIdIn;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getStartTimeGreaterThanOrEqual() {
	 	return this.startTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param startTimeGreaterThanOrEqual float 
	 */
	 setStartTimeGreaterThanOrEqual(startTimeGreaterThanOrEqual) {
	 	this.startTimeGreaterThanOrEqual = startTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return float
	 */
	 getStartTimeLessThanOrEqual() {
	 	return this.startTimeLessThanOrEqual;
	 }
	
	/**
	 * @param startTimeLessThanOrEqual float 
	 */
	 setStartTimeLessThanOrEqual(startTimeLessThanOrEqual) {
	 	this.startTimeLessThanOrEqual = startTimeLessThanOrEqual;
	 }
}
module.exports.LiveChannelSegmentBaseFilter = LiveChannelSegmentBaseFilter;

/**
 *
 */
class LiveParams extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveParams';
	}
	
	/**
	 * Suffix to be added to the stream name after the entry id {entry_id}_{stream_suffix}, e.g. for entry id 0_kjdu5jr6 and suffix 1, the stream name will be 0_kjdu5jr6_1
	 * @return string
	 */
	 getStreamSuffix() {
	 	return this.streamSuffix;
	 }
	
	/**
	 * @param streamSuffix string Suffix to be added to the stream name after the entry id {entry_id}_{stream_suffix}, e.g. for entry id 0_kjdu5jr6 and suffix 1, the stream name will be 0_kjdu5jr6_1
	 */
	 setStreamSuffix(streamSuffix) {
	 	this.streamSuffix = streamSuffix;
	 }
}
module.exports.LiveParams = LiveParams;

/**
 *
 */
class LiveStreamScheduleEvent extends EntryScheduleEvent{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamScheduleEvent';
	}
}
module.exports.LiveStreamScheduleEvent = LiveStreamScheduleEvent;

/**
 *
 */
class MatchMetadataCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMatchMetadataCondition';
	}
	
	/**
	 * May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 * @return string
	 */
	 getXPath() {
	 	return this.xPath;
	 }
	
	/**
	 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 */
	 setXPath(xPath) {
	 	this.xPath = xPath;
	 }
	
	/**
	 * Metadata profile id
	 * @return int
	 */
	 getProfileId() {
	 	return this.profileId;
	 }
	
	/**
	 * @param profileId int Metadata profile id
	 */
	 setProfileId(profileId) {
	 	this.profileId = profileId;
	 }
	
	/**
	 * Metadata profile system name
	 * @return string
	 */
	 getProfileSystemName() {
	 	return this.profileSystemName;
	 }
	
	/**
	 * @param profileSystemName string Metadata profile system name
	 */
	 setProfileSystemName(profileSystemName) {
	 	this.profileSystemName = profileSystemName;
	 }
}
module.exports.MatchMetadataCondition = MatchMetadataCondition;

/**
 *
 */
class MediaFlavorParams extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFlavorParams';
	}
}
module.exports.MediaFlavorParams = MediaFlavorParams;

/**
 *
 */
class MediaInfoFilter extends MediaInfoBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaInfoFilter';
	}
}
module.exports.MediaInfoFilter = MediaInfoFilter;

/**
 *
 */
class MediaServerNode extends DeliveryServerNode{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaServerNode';
	}
	
	/**
	 * Media server application name
	 * @return string
	 */
	 getApplicationName() {
	 	return this.applicationName;
	 }
	
	/**
	 * @param applicationName string Media server application name
	 */
	 setApplicationName(applicationName) {
	 	this.applicationName = applicationName;
	 }
	
	/**
	 * Media server playback port configuration by protocol and format
	 * @return array
	 */
	 getMediaServerPortConfig() {
	 	return this.mediaServerPortConfig;
	 }
	
	/**
	 * @param mediaServerPortConfig array Media server playback port configuration by protocol and format
	 */
	 setMediaServerPortConfig(mediaServerPortConfig) {
	 	this.mediaServerPortConfig = mediaServerPortConfig;
	 }
	
	/**
	 * Media server playback Domain configuration by protocol and format
	 * @return array
	 */
	 getMediaServerPlaybackDomainConfig() {
	 	return this.mediaServerPlaybackDomainConfig;
	 }
	
	/**
	 * @param mediaServerPlaybackDomainConfig array Media server playback Domain configuration by protocol and format
	 */
	 setMediaServerPlaybackDomainConfig(mediaServerPlaybackDomainConfig) {
	 	this.mediaServerPlaybackDomainConfig = mediaServerPlaybackDomainConfig;
	 }
}
module.exports.MediaServerNode = MediaServerNode;

/**
 *
 */
class MetadataBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileIdEqual() {
	 	return this.metadataProfileIdEqual;
	 }
	
	/**
	 * @param metadataProfileIdEqual int 
	 */
	 setMetadataProfileIdEqual(metadataProfileIdEqual) {
	 	this.metadataProfileIdEqual = metadataProfileIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMetadataProfileIdIn() {
	 	return this.metadataProfileIdIn;
	 }
	
	/**
	 * @param metadataProfileIdIn string 
	 */
	 setMetadataProfileIdIn(metadataProfileIdIn) {
	 	this.metadataProfileIdIn = metadataProfileIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileVersionEqual() {
	 	return this.metadataProfileVersionEqual;
	 }
	
	/**
	 * @param metadataProfileVersionEqual int 
	 */
	 setMetadataProfileVersionEqual(metadataProfileVersionEqual) {
	 	this.metadataProfileVersionEqual = metadataProfileVersionEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileVersionGreaterThanOrEqual() {
	 	return this.metadataProfileVersionGreaterThanOrEqual;
	 }
	
	/**
	 * @param metadataProfileVersionGreaterThanOrEqual int 
	 */
	 setMetadataProfileVersionGreaterThanOrEqual(metadataProfileVersionGreaterThanOrEqual) {
	 	this.metadataProfileVersionGreaterThanOrEqual = metadataProfileVersionGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileVersionLessThanOrEqual() {
	 	return this.metadataProfileVersionLessThanOrEqual;
	 }
	
	/**
	 * @param metadataProfileVersionLessThanOrEqual int 
	 */
	 setMetadataProfileVersionLessThanOrEqual(metadataProfileVersionLessThanOrEqual) {
	 	this.metadataProfileVersionLessThanOrEqual = metadataProfileVersionLessThanOrEqual;
	 }
	
	/**
	 * When null, default is KalturaMetadataObjectType::ENTRY
	 * @return string
	 */
	 getMetadataObjectTypeEqual() {
	 	return this.metadataObjectTypeEqual;
	 }
	
	/**
	 * @param metadataObjectTypeEqual string When null, default is KalturaMetadataObjectType::ENTRY
	 */
	 setMetadataObjectTypeEqual(metadataObjectTypeEqual) {
	 	this.metadataObjectTypeEqual = metadataObjectTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectIdEqual() {
	 	return this.objectIdEqual;
	 }
	
	/**
	 * @param objectIdEqual string 
	 */
	 setObjectIdEqual(objectIdEqual) {
	 	this.objectIdEqual = objectIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectIdIn() {
	 	return this.objectIdIn;
	 }
	
	/**
	 * @param objectIdIn string 
	 */
	 setObjectIdIn(objectIdIn) {
	 	this.objectIdIn = objectIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersionEqual() {
	 	return this.versionEqual;
	 }
	
	/**
	 * @param versionEqual int 
	 */
	 setVersionEqual(versionEqual) {
	 	this.versionEqual = versionEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersionGreaterThanOrEqual() {
	 	return this.versionGreaterThanOrEqual;
	 }
	
	/**
	 * @param versionGreaterThanOrEqual int 
	 */
	 setVersionGreaterThanOrEqual(versionGreaterThanOrEqual) {
	 	this.versionGreaterThanOrEqual = versionGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getVersionLessThanOrEqual() {
	 	return this.versionLessThanOrEqual;
	 }
	
	/**
	 * @param versionLessThanOrEqual int 
	 */
	 setVersionLessThanOrEqual(versionLessThanOrEqual) {
	 	this.versionLessThanOrEqual = versionLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.MetadataBaseFilter = MetadataBaseFilter;

/**
 *
 */
class MetadataFieldChangedCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataFieldChangedCondition';
	}
	
	/**
	 * May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 * @return string
	 */
	 getXPath() {
	 	return this.xPath;
	 }
	
	/**
	 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 */
	 setXPath(xPath) {
	 	this.xPath = xPath;
	 }
	
	/**
	 * Metadata profile id
	 * @return int
	 */
	 getProfileId() {
	 	return this.profileId;
	 }
	
	/**
	 * @param profileId int Metadata profile id
	 */
	 setProfileId(profileId) {
	 	this.profileId = profileId;
	 }
	
	/**
	 * Metadata profile system name
	 * @return string
	 */
	 getProfileSystemName() {
	 	return this.profileSystemName;
	 }
	
	/**
	 * @param profileSystemName string Metadata profile system name
	 */
	 setProfileSystemName(profileSystemName) {
	 	this.profileSystemName = profileSystemName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionA() {
	 	return this.versionA;
	 }
	
	/**
	 * @param versionA string 
	 */
	 setVersionA(versionA) {
	 	this.versionA = versionA;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getVersionB() {
	 	return this.versionB;
	 }
	
	/**
	 * @param versionB string 
	 */
	 setVersionB(versionB) {
	 	this.versionB = versionB;
	 }
}
module.exports.MetadataFieldChangedCondition = MetadataFieldChangedCondition;

/**
 *
 */
class MetadataProfileFilter extends MetadataProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataProfileFilter';
	}
}
module.exports.MetadataProfileFilter = MetadataProfileFilter;

/**
 *
 */
class MetadataSearchItem extends SearchOperator{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataSearchItem';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getMetadataProfileId() {
	 	return this.metadataProfileId;
	 }
	
	/**
	 * @param metadataProfileId int 
	 */
	 setMetadataProfileId(metadataProfileId) {
	 	this.metadataProfileId = metadataProfileId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOrderBy() {
	 	return this.orderBy;
	 }
	
	/**
	 * @param orderBy string 
	 */
	 setOrderBy(orderBy) {
	 	this.orderBy = orderBy;
	 }
}
module.exports.MetadataSearchItem = MetadataSearchItem;

/**
 *
 */
class OperationResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaOperationResource';
	}
	
	/**
	 * Only KalturaEntryResource and KalturaAssetResource are supported
	 * @return ContentResource
	 */
	 getResource() {
	 	return this.resource;
	 }
	
	/**
	 * @param resource ContentResource Only KalturaEntryResource and KalturaAssetResource are supported
	 */
	 setResource(resource) {
	 	this.resource = resource;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getOperationAttributes() {
	 	return this.operationAttributes;
	 }
	
	/**
	 * @param operationAttributes array 
	 */
	 setOperationAttributes(operationAttributes) {
	 	this.operationAttributes = operationAttributes;
	 }
	
	/**
	 * ID of alternative asset params to be used instead of the system default flavor params
	 * @return int
	 */
	 getAssetParamsId() {
	 	return this.assetParamsId;
	 }
	
	/**
	 * @param assetParamsId int ID of alternative asset params to be used instead of the system default flavor params
	 */
	 setAssetParamsId(assetParamsId) {
	 	this.assetParamsId = assetParamsId;
	 }
}
module.exports.OperationResource = OperationResource;

/**
 *
 */
class PartnerFilter extends PartnerBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPartnerFilter';
	}
}
module.exports.PartnerFilter = PartnerFilter;

/**
 *
 */
class PdfFlavorParams extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPdfFlavorParams';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getReadonly() {
	 	return this.readonly;
	 }
	
	/**
	 * @param readonly bool 
	 */
	 setReadonly(readonly) {
	 	this.readonly = readonly;
	 }
}
module.exports.PdfFlavorParams = PdfFlavorParams;

/**
 *
 */
class PermissionBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual int 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameIn() {
	 	return this.nameIn;
	 }
	
	/**
	 * @param nameIn string 
	 */
	 setNameIn(nameIn) {
	 	this.nameIn = nameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFriendlyNameLike() {
	 	return this.friendlyNameLike;
	 }
	
	/**
	 * @param friendlyNameLike string 
	 */
	 setFriendlyNameLike(friendlyNameLike) {
	 	this.friendlyNameLike = friendlyNameLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescriptionLike() {
	 	return this.descriptionLike;
	 }
	
	/**
	 * @param descriptionLike string 
	 */
	 setDescriptionLike(descriptionLike) {
	 	this.descriptionLike = descriptionLike;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDependsOnPermissionNamesMultiLikeOr() {
	 	return this.dependsOnPermissionNamesMultiLikeOr;
	 }
	
	/**
	 * @param dependsOnPermissionNamesMultiLikeOr string 
	 */
	 setDependsOnPermissionNamesMultiLikeOr(dependsOnPermissionNamesMultiLikeOr) {
	 	this.dependsOnPermissionNamesMultiLikeOr = dependsOnPermissionNamesMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDependsOnPermissionNamesMultiLikeAnd() {
	 	return this.dependsOnPermissionNamesMultiLikeAnd;
	 }
	
	/**
	 * @param dependsOnPermissionNamesMultiLikeAnd string 
	 */
	 setDependsOnPermissionNamesMultiLikeAnd(dependsOnPermissionNamesMultiLikeAnd) {
	 	this.dependsOnPermissionNamesMultiLikeAnd = dependsOnPermissionNamesMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.PermissionBaseFilter = PermissionBaseFilter;

/**
 *
 */
class PermissionItemBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionItemBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeIn() {
	 	return this.typeIn;
	 }
	
	/**
	 * @param typeIn string 
	 */
	 setTypeIn(typeIn) {
	 	this.typeIn = typeIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.PermissionItemBaseFilter = PermissionItemBaseFilter;

/**
 *
 */
class PlaybackContextOptions extends EntryContextDataParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaybackContextOptions';
	}
}
module.exports.PlaybackContextOptions = PlaybackContextOptions;

/**
 *
 */
class PostConvertJobData extends ConvartableJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPostConvertJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string 
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * Indicates if a thumbnail should be created
	 * @return bool
	 */
	 getCreateThumb() {
	 	return this.createThumb;
	 }
	
	/**
	 * @param createThumb bool Indicates if a thumbnail should be created
	 */
	 setCreateThumb(createThumb) {
	 	this.createThumb = createThumb;
	 }
	
	/**
	 * The path of the created thumbnail
	 * @return string
	 */
	 getThumbPath() {
	 	return this.thumbPath;
	 }
	
	/**
	 * @param thumbPath string The path of the created thumbnail
	 */
	 setThumbPath(thumbPath) {
	 	this.thumbPath = thumbPath;
	 }
	
	/**
	 * The position of the thumbnail in the media file
	 * @return int
	 */
	 getThumbOffset() {
	 	return this.thumbOffset;
	 }
	
	/**
	 * @param thumbOffset int The position of the thumbnail in the media file
	 */
	 setThumbOffset(thumbOffset) {
	 	this.thumbOffset = thumbOffset;
	 }
	
	/**
	 * The height of the movie, will be used to comapare if this thumbnail is the best we can have
	 * @return int
	 */
	 getThumbHeight() {
	 	return this.thumbHeight;
	 }
	
	/**
	 * @param thumbHeight int The height of the movie, will be used to comapare if this thumbnail is the best we can have
	 */
	 setThumbHeight(thumbHeight) {
	 	this.thumbHeight = thumbHeight;
	 }
	
	/**
	 * The bit rate of the movie, will be used to comapare if this thumbnail is the best we can have
	 * @return int
	 */
	 getThumbBitrate() {
	 	return this.thumbBitrate;
	 }
	
	/**
	 * @param thumbBitrate int The bit rate of the movie, will be used to comapare if this thumbnail is the best we can have
	 */
	 setThumbBitrate(thumbBitrate) {
	 	this.thumbBitrate = thumbBitrate;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getCustomData() {
	 	return this.customData;
	 }
	
	/**
	 * @param customData string 
	 */
	 setCustomData(customData) {
	 	this.customData = customData;
	 }
}
module.exports.PostConvertJobData = PostConvertJobData;

/**
 *
 */
class PreviewRestriction extends SessionRestriction{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPreviewRestriction';
	}
	
	/**
	 * The preview restriction length
	 * @return int
	 */
	 getPreviewLength() {
	 	return this.previewLength;
	 }
	
	/**
	 * @param previewLength int The preview restriction length
	 */
	 setPreviewLength(previewLength) {
	 	this.previewLength = previewLength;
	 }
}
module.exports.PreviewRestriction = PreviewRestriction;

/**
 *
 */
class QuizFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaQuizFilter';
	}
	
	/**
	 * This filter should be in use for retrieving only a specific quiz entry (identified by its entryId)
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string This filter should be in use for retrieving only a specific quiz entry (identified by its entryId)
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * This filter should be in use for retrieving few specific quiz entries (string should include comma separated list of entryId strings)
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string This filter should be in use for retrieving few specific quiz entries (string should include comma separated list of entryId strings)
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
}
module.exports.QuizFilter = QuizFilter;

/**
 *
 */
class RecalculateResponseProfileCacheJobData extends RecalculateCacheJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecalculateResponseProfileCacheJobData';
	}
	
	/**
	 * http / https
	 * @return string
	 */
	 getProtocol() {
	 	return this.protocol;
	 }
	
	/**
	 * @param protocol string http / https
	 */
	 setProtocol(protocol) {
	 	this.protocol = protocol;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getKsType() {
	 	return this.ksType;
	 }
	
	/**
	 * @param ksType int 
	 */
	 setKsType(ksType) {
	 	this.ksType = ksType;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getUserRoles() {
	 	return this.userRoles;
	 }
	
	/**
	 * @param userRoles array 
	 */
	 setUserRoles(userRoles) {
	 	this.userRoles = userRoles;
	 }
	
	/**
	 * Class name
	 * @return string
	 */
	 getCachedObjectType() {
	 	return this.cachedObjectType;
	 }
	
	/**
	 * @param cachedObjectType string Class name
	 */
	 setCachedObjectType(cachedObjectType) {
	 	this.cachedObjectType = cachedObjectType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getObjectId() {
	 	return this.objectId;
	 }
	
	/**
	 * @param objectId string 
	 */
	 setObjectId(objectId) {
	 	this.objectId = objectId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStartObjectKey() {
	 	return this.startObjectKey;
	 }
	
	/**
	 * @param startObjectKey string 
	 */
	 setStartObjectKey(startObjectKey) {
	 	this.startObjectKey = startObjectKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEndObjectKey() {
	 	return this.endObjectKey;
	 }
	
	/**
	 * @param endObjectKey string 
	 */
	 setEndObjectKey(endObjectKey) {
	 	this.endObjectKey = endObjectKey;
	 }
}
module.exports.RecalculateResponseProfileCacheJobData = RecalculateResponseProfileCacheJobData;

/**
 *
 */
class RecordScheduleEvent extends EntryScheduleEvent{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRecordScheduleEvent';
	}
}
module.exports.RecordScheduleEvent = RecordScheduleEvent;

/**
 *
 */
class RegexCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRegexCondition';
	}
}
module.exports.RegexCondition = RegexCondition;

/**
 *
 */
class RemoteStorageResources extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRemoteStorageResources';
	}
	
	/**
	 * Array of remote stoage resources
	 * @return array
	 */
	 getResources() {
	 	return this.resources;
	 }
	
	/**
	 * @param resources array Array of remote stoage resources
	 */
	 setResources(resources) {
	 	this.resources = resources;
	 }
}
module.exports.RemoteStorageResources = RemoteStorageResources;

/**
 *
 */
class ResponseProfileFilter extends ResponseProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaResponseProfileFilter';
	}
}
module.exports.ResponseProfileFilter = ResponseProfileFilter;

/**
 *
 */
class ScheduleEventBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdNotIn() {
	 	return this.idNotIn;
	 }
	
	/**
	 * @param idNotIn string 
	 */
	 setIdNotIn(idNotIn) {
	 	this.idNotIn = idNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentIdEqual() {
	 	return this.parentIdEqual;
	 }
	
	/**
	 * @param parentIdEqual int 
	 */
	 setParentIdEqual(parentIdEqual) {
	 	this.parentIdEqual = parentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdIn() {
	 	return this.parentIdIn;
	 }
	
	/**
	 * @param parentIdIn string 
	 */
	 setParentIdIn(parentIdIn) {
	 	this.parentIdIn = parentIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdNotIn() {
	 	return this.parentIdNotIn;
	 }
	
	/**
	 * @param parentIdNotIn string 
	 */
	 setParentIdNotIn(parentIdNotIn) {
	 	this.parentIdNotIn = parentIdNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDateGreaterThanOrEqual() {
	 	return this.startDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param startDateGreaterThanOrEqual int 
	 */
	 setStartDateGreaterThanOrEqual(startDateGreaterThanOrEqual) {
	 	this.startDateGreaterThanOrEqual = startDateGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStartDateLessThanOrEqual() {
	 	return this.startDateLessThanOrEqual;
	 }
	
	/**
	 * @param startDateLessThanOrEqual int 
	 */
	 setStartDateLessThanOrEqual(startDateLessThanOrEqual) {
	 	this.startDateLessThanOrEqual = startDateLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDateGreaterThanOrEqual() {
	 	return this.endDateGreaterThanOrEqual;
	 }
	
	/**
	 * @param endDateGreaterThanOrEqual int 
	 */
	 setEndDateGreaterThanOrEqual(endDateGreaterThanOrEqual) {
	 	this.endDateGreaterThanOrEqual = endDateGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndDateLessThanOrEqual() {
	 	return this.endDateLessThanOrEqual;
	 }
	
	/**
	 * @param endDateLessThanOrEqual int 
	 */
	 setEndDateLessThanOrEqual(endDateLessThanOrEqual) {
	 	this.endDateLessThanOrEqual = endDateLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceIdEqual() {
	 	return this.referenceIdEqual;
	 }
	
	/**
	 * @param referenceIdEqual string 
	 */
	 setReferenceIdEqual(referenceIdEqual) {
	 	this.referenceIdEqual = referenceIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getReferenceIdIn() {
	 	return this.referenceIdIn;
	 }
	
	/**
	 * @param referenceIdIn string 
	 */
	 setReferenceIdIn(referenceIdIn) {
	 	this.referenceIdIn = referenceIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOwnerIdEqual() {
	 	return this.ownerIdEqual;
	 }
	
	/**
	 * @param ownerIdEqual string 
	 */
	 setOwnerIdEqual(ownerIdEqual) {
	 	this.ownerIdEqual = ownerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getOwnerIdIn() {
	 	return this.ownerIdIn;
	 }
	
	/**
	 * @param ownerIdIn string 
	 */
	 setOwnerIdIn(ownerIdIn) {
	 	this.ownerIdIn = ownerIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriorityEqual() {
	 	return this.priorityEqual;
	 }
	
	/**
	 * @param priorityEqual int 
	 */
	 setPriorityEqual(priorityEqual) {
	 	this.priorityEqual = priorityEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPriorityIn() {
	 	return this.priorityIn;
	 }
	
	/**
	 * @param priorityIn string 
	 */
	 setPriorityIn(priorityIn) {
	 	this.priorityIn = priorityIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriorityGreaterThanOrEqual() {
	 	return this.priorityGreaterThanOrEqual;
	 }
	
	/**
	 * @param priorityGreaterThanOrEqual int 
	 */
	 setPriorityGreaterThanOrEqual(priorityGreaterThanOrEqual) {
	 	this.priorityGreaterThanOrEqual = priorityGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPriorityLessThanOrEqual() {
	 	return this.priorityLessThanOrEqual;
	 }
	
	/**
	 * @param priorityLessThanOrEqual int 
	 */
	 setPriorityLessThanOrEqual(priorityLessThanOrEqual) {
	 	this.priorityLessThanOrEqual = priorityLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getRecurrenceTypeEqual() {
	 	return this.recurrenceTypeEqual;
	 }
	
	/**
	 * @param recurrenceTypeEqual int 
	 */
	 setRecurrenceTypeEqual(recurrenceTypeEqual) {
	 	this.recurrenceTypeEqual = recurrenceTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getRecurrenceTypeIn() {
	 	return this.recurrenceTypeIn;
	 }
	
	/**
	 * @param recurrenceTypeIn string 
	 */
	 setRecurrenceTypeIn(recurrenceTypeIn) {
	 	this.recurrenceTypeIn = recurrenceTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.ScheduleEventBaseFilter = ScheduleEventBaseFilter;

/**
 *
 */
class ScheduleEventResourceBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventResourceBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getEventIdEqual() {
	 	return this.eventIdEqual;
	 }
	
	/**
	 * @param eventIdEqual int 
	 */
	 setEventIdEqual(eventIdEqual) {
	 	this.eventIdEqual = eventIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEventIdIn() {
	 	return this.eventIdIn;
	 }
	
	/**
	 * @param eventIdIn string 
	 */
	 setEventIdIn(eventIdIn) {
	 	this.eventIdIn = eventIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getResourceIdEqual() {
	 	return this.resourceIdEqual;
	 }
	
	/**
	 * @param resourceIdEqual int 
	 */
	 setResourceIdEqual(resourceIdEqual) {
	 	this.resourceIdEqual = resourceIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResourceIdIn() {
	 	return this.resourceIdIn;
	 }
	
	/**
	 * @param resourceIdIn string 
	 */
	 setResourceIdIn(resourceIdIn) {
	 	this.resourceIdIn = resourceIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.ScheduleEventResourceBaseFilter = ScheduleEventResourceBaseFilter;

/**
 *
 */
class ScheduleResourceBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleResourceBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdNotIn() {
	 	return this.idNotIn;
	 }
	
	/**
	 * @param idNotIn string 
	 */
	 setIdNotIn(idNotIn) {
	 	this.idNotIn = idNotIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getParentIdEqual() {
	 	return this.parentIdEqual;
	 }
	
	/**
	 * @param parentIdEqual int 
	 */
	 setParentIdEqual(parentIdEqual) {
	 	this.parentIdEqual = parentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdIn() {
	 	return this.parentIdIn;
	 }
	
	/**
	 * @param parentIdIn string 
	 */
	 setParentIdIn(parentIdIn) {
	 	this.parentIdIn = parentIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsLike() {
	 	return this.tagsLike;
	 }
	
	/**
	 * @param tagsLike string 
	 */
	 setTagsLike(tagsLike) {
	 	this.tagsLike = tagsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.ScheduleResourceBaseFilter = ScheduleResourceBaseFilter;

/**
 *
 */
class ScheduledTaskProfileFilter extends ScheduledTaskProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduledTaskProfileFilter';
	}
}
module.exports.ScheduledTaskProfileFilter = ScheduledTaskProfileFilter;

/**
 *
 */
class SearchComparableAttributeCondition extends AttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchComparableAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getComparison() {
	 	return this.comparison;
	 }
	
	/**
	 * @param comparison string 
	 */
	 setComparison(comparison) {
	 	this.comparison = comparison;
	 }
}
module.exports.SearchComparableAttributeCondition = SearchComparableAttributeCondition;

/**
 *
 */
class SearchComparableCondition extends SearchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchComparableCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getComparison() {
	 	return this.comparison;
	 }
	
	/**
	 * @param comparison string 
	 */
	 setComparison(comparison) {
	 	this.comparison = comparison;
	 }
}
module.exports.SearchComparableCondition = SearchComparableCondition;

/**
 *
 */
class SearchMatchAttributeCondition extends AttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getNot() {
	 	return this.not;
	 }
	
	/**
	 * @param not bool 
	 */
	 setNot(not) {
	 	this.not = not;
	 }
}
module.exports.SearchMatchAttributeCondition = SearchMatchAttributeCondition;

/**
 *
 */
class SearchMatchCondition extends SearchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSearchMatchCondition';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getNot() {
	 	return this.not;
	 }
	
	/**
	 * @param not bool 
	 */
	 setNot(not) {
	 	this.not = not;
	 }
}
module.exports.SearchMatchCondition = SearchMatchCondition;

/**
 *
 */
class ServerNodeFilter extends ServerNodeBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaServerNodeFilter';
	}
}
module.exports.ServerNodeFilter = ServerNodeFilter;

/**
 *
 */
class ShortLinkFilter extends ShortLinkBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaShortLinkFilter';
	}
}
module.exports.ShortLinkFilter = ShortLinkFilter;

/**
 *
 */
class SiteCondition extends MatchCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSiteCondition';
	}
}
module.exports.SiteCondition = SiteCondition;

/**
 *
 */
class SshDropFolder extends RemoteDropFolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSshDropFolder';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getHost() {
	 	return this.host;
	 }
	
	/**
	 * @param host string 
	 */
	 setHost(host) {
	 	this.host = host;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPort() {
	 	return this.port;
	 }
	
	/**
	 * @param port int 
	 */
	 setPort(port) {
	 	this.port = port;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string 
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrivateKey() {
	 	return this.privateKey;
	 }
	
	/**
	 * @param privateKey string 
	 */
	 setPrivateKey(privateKey) {
	 	this.privateKey = privateKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPublicKey() {
	 	return this.publicKey;
	 }
	
	/**
	 * @param publicKey string 
	 */
	 setPublicKey(publicKey) {
	 	this.publicKey = publicKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassPhrase() {
	 	return this.passPhrase;
	 }
	
	/**
	 * @param passPhrase string 
	 */
	 setPassPhrase(passPhrase) {
	 	this.passPhrase = passPhrase;
	 }
}
module.exports.SshDropFolder = SshDropFolder;

/**
 *
 */
class SshImportJobData extends ImportJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSshImportJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPrivateKey() {
	 	return this.privateKey;
	 }
	
	/**
	 * @param privateKey string 
	 */
	 setPrivateKey(privateKey) {
	 	this.privateKey = privateKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPublicKey() {
	 	return this.publicKey;
	 }
	
	/**
	 * @param publicKey string 
	 */
	 setPublicKey(publicKey) {
	 	this.publicKey = publicKey;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassPhrase() {
	 	return this.passPhrase;
	 }
	
	/**
	 * @param passPhrase string 
	 */
	 setPassPhrase(passPhrase) {
	 	this.passPhrase = passPhrase;
	 }
}
module.exports.SshImportJobData = SshImportJobData;

/**
 *
 */
class StorageDeleteJobData extends StorageJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageDeleteJobData';
	}
}
module.exports.StorageDeleteJobData = StorageDeleteJobData;

/**
 *
 */
class StorageExportJobData extends StorageJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageExportJobData';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getForce() {
	 	return this.force;
	 }
	
	/**
	 * @param force bool 
	 */
	 setForce(force) {
	 	this.force = force;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getCreateLink() {
	 	return this.createLink;
	 }
	
	/**
	 * @param createLink bool 
	 */
	 setCreateLink(createLink) {
	 	this.createLink = createLink;
	 }
}
module.exports.StorageExportJobData = StorageExportJobData;

/**
 *
 */
class StorageProfileFilter extends StorageProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStorageProfileFilter';
	}
}
module.exports.StorageProfileFilter = StorageProfileFilter;

/**
 *
 */
class StringResource extends ContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaStringResource';
	}
	
	/**
	 * Textual content
	 * @return string
	 */
	 getContent() {
	 	return this.content;
	 }
	
	/**
	 * @param content string Textual content
	 */
	 setContent(content) {
	 	this.content = content;
	 }
}
module.exports.StringResource = StringResource;

/**
 *
 */
class SwfFlavorParams extends FlavorParams{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSwfFlavorParams';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getFlashVersion() {
	 	return this.flashVersion;
	 }
	
	/**
	 * @param flashVersion int 
	 */
	 setFlashVersion(flashVersion) {
	 	this.flashVersion = flashVersion;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getPoly2Bitmap() {
	 	return this.poly2Bitmap;
	 }
	
	/**
	 * @param poly2Bitmap bool 
	 */
	 setPoly2Bitmap(poly2Bitmap) {
	 	this.poly2Bitmap = poly2Bitmap;
	 }
}
module.exports.SwfFlavorParams = SwfFlavorParams;

/**
 *
 */
class TimedThumbAsset extends ThumbAsset{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTimedThumbAsset';
	}
	
	/**
	 * Associated thumb cue point ID
	 * @return string
	 */
	 getCuePointId() {
	 	return this.cuePointId;
	 }
	
	/**
	 * @param cuePointId string Associated thumb cue point ID
	 */
	 setCuePointId(cuePointId) {
	 	this.cuePointId = cuePointId;
	 }
}
module.exports.TimedThumbAsset = TimedThumbAsset;

/**
 *
 */
class UiConfFilter extends UiConfBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfFilter';
	}
}
module.exports.UiConfFilter = UiConfFilter;

/**
 *
 */
class UploadTokenFilter extends UploadTokenBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadTokenFilter';
	}
}
module.exports.UploadTokenFilter = UploadTokenFilter;

/**
 *
 */
class UserEntryBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserEntryBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdNotIn() {
	 	return this.idNotIn;
	 }
	
	/**
	 * @param idNotIn string 
	 */
	 setIdNotIn(idNotIn) {
	 	this.idNotIn = idNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdEqual() {
	 	return this.entryIdEqual;
	 }
	
	/**
	 * @param entryIdEqual string 
	 */
	 setEntryIdEqual(entryIdEqual) {
	 	this.entryIdEqual = entryIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdIn() {
	 	return this.entryIdIn;
	 }
	
	/**
	 * @param entryIdIn string 
	 */
	 setEntryIdIn(entryIdIn) {
	 	this.entryIdIn = entryIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEntryIdNotIn() {
	 	return this.entryIdNotIn;
	 }
	
	/**
	 * @param entryIdNotIn string 
	 */
	 setEntryIdNotIn(entryIdNotIn) {
	 	this.entryIdNotIn = entryIdNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdEqual() {
	 	return this.userIdEqual;
	 }
	
	/**
	 * @param userIdEqual string 
	 */
	 setUserIdEqual(userIdEqual) {
	 	this.userIdEqual = userIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdIn() {
	 	return this.userIdIn;
	 }
	
	/**
	 * @param userIdIn string 
	 */
	 setUserIdIn(userIdIn) {
	 	this.userIdIn = userIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserIdNotIn() {
	 	return this.userIdNotIn;
	 }
	
	/**
	 * @param userIdNotIn string 
	 */
	 setUserIdNotIn(userIdNotIn) {
	 	this.userIdNotIn = userIdNotIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual string 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTypeEqual() {
	 	return this.typeEqual;
	 }
	
	/**
	 * @param typeEqual string 
	 */
	 setTypeEqual(typeEqual) {
	 	this.typeEqual = typeEqual;
	 }
}
module.exports.UserEntryBaseFilter = UserEntryBaseFilter;

/**
 *
 */
class UserLoginDataBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserLoginDataBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getLoginEmailEqual() {
	 	return this.loginEmailEqual;
	 }
	
	/**
	 * @param loginEmailEqual string 
	 */
	 setLoginEmailEqual(loginEmailEqual) {
	 	this.loginEmailEqual = loginEmailEqual;
	 }
}
module.exports.UserLoginDataBaseFilter = UserLoginDataBaseFilter;

/**
 *
 */
class UserRoleBaseFilter extends RelatedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameEqual() {
	 	return this.nameEqual;
	 }
	
	/**
	 * @param nameEqual string 
	 */
	 setNameEqual(nameEqual) {
	 	this.nameEqual = nameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameIn() {
	 	return this.nameIn;
	 }
	
	/**
	 * @param nameIn string 
	 */
	 setNameIn(nameIn) {
	 	this.nameIn = nameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameEqual() {
	 	return this.systemNameEqual;
	 }
	
	/**
	 * @param systemNameEqual string 
	 */
	 setSystemNameEqual(systemNameEqual) {
	 	this.systemNameEqual = systemNameEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSystemNameIn() {
	 	return this.systemNameIn;
	 }
	
	/**
	 * @param systemNameIn string 
	 */
	 setSystemNameIn(systemNameIn) {
	 	this.systemNameIn = systemNameIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getDescriptionLike() {
	 	return this.descriptionLike;
	 }
	
	/**
	 * @param descriptionLike string 
	 */
	 setDescriptionLike(descriptionLike) {
	 	this.descriptionLike = descriptionLike;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeOr() {
	 	return this.tagsMultiLikeOr;
	 }
	
	/**
	 * @param tagsMultiLikeOr string 
	 */
	 setTagsMultiLikeOr(tagsMultiLikeOr) {
	 	this.tagsMultiLikeOr = tagsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTagsMultiLikeAnd() {
	 	return this.tagsMultiLikeAnd;
	 }
	
	/**
	 * @param tagsMultiLikeAnd string 
	 */
	 setTagsMultiLikeAnd(tagsMultiLikeAnd) {
	 	this.tagsMultiLikeAnd = tagsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
}
module.exports.UserRoleBaseFilter = UserRoleBaseFilter;

/**
 *
 */
class VelocixProvisionJobData extends ProvisionJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVelocixProvisionJobData';
	}
	
	/**
	 * 
	 * @return array
	 */
	 getProvisioningParams() {
	 	return this.provisioningParams;
	 }
	
	/**
	 * @param provisioningParams array 
	 */
	 setProvisioningParams(provisioningParams) {
	 	this.provisioningParams = provisioningParams;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getUserName() {
	 	return this.userName;
	 }
	
	/**
	 * @param userName string 
	 */
	 setUserName(userName) {
	 	this.userName = userName;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPassword() {
	 	return this.password;
	 }
	
	/**
	 * @param password string 
	 */
	 setPassword(password) {
	 	this.password = password;
	 }
}
module.exports.VelocixProvisionJobData = VelocixProvisionJobData;

/**
 *
 */
class VirusScanProfileFilter extends VirusScanProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaVirusScanProfileFilter';
	}
}
module.exports.VirusScanProfileFilter = VirusScanProfileFilter;

/**
 *
 */
class WidgetFilter extends WidgetBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaWidgetFilter';
	}
}
module.exports.WidgetFilter = WidgetFilter;

/**
 *
 */
class YoutubeApiDistributionJobProviderData extends ConfigurableDistributionJobProviderData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYoutubeApiDistributionJobProviderData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getVideoAssetFilePath() {
	 	return this.videoAssetFilePath;
	 }
	
	/**
	 * @param videoAssetFilePath string 
	 */
	 setVideoAssetFilePath(videoAssetFilePath) {
	 	this.videoAssetFilePath = videoAssetFilePath;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getThumbAssetFilePath() {
	 	return this.thumbAssetFilePath;
	 }
	
	/**
	 * @param thumbAssetFilePath string 
	 */
	 setThumbAssetFilePath(thumbAssetFilePath) {
	 	this.thumbAssetFilePath = thumbAssetFilePath;
	 }
	
	/**
	 * 
	 * @return array
	 */
	 getCaptionsInfo() {
	 	return this.captionsInfo;
	 }
	
	/**
	 * @param captionsInfo array 
	 */
	 setCaptionsInfo(captionsInfo) {
	 	this.captionsInfo = captionsInfo;
	 }
}
module.exports.YoutubeApiDistributionJobProviderData = YoutubeApiDistributionJobProviderData;

/**
 *
 */
class YoutubeApiDistributionProfile extends ConfigurableDistributionProfile{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYoutubeApiDistributionProfile';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getUsername() {
	 	return this.username;
	 }
	
	/**
	 * @param username string 
	 */
	 setUsername(username) {
	 	this.username = username;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDefaultCategory() {
	 	return this.defaultCategory;
	 }
	
	/**
	 * @param defaultCategory int 
	 */
	 setDefaultCategory(defaultCategory) {
	 	this.defaultCategory = defaultCategory;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAllowComments() {
	 	return this.allowComments;
	 }
	
	/**
	 * @param allowComments string 
	 */
	 setAllowComments(allowComments) {
	 	this.allowComments = allowComments;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAllowEmbedding() {
	 	return this.allowEmbedding;
	 }
	
	/**
	 * @param allowEmbedding string 
	 */
	 setAllowEmbedding(allowEmbedding) {
	 	this.allowEmbedding = allowEmbedding;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAllowRatings() {
	 	return this.allowRatings;
	 }
	
	/**
	 * @param allowRatings string 
	 */
	 setAllowRatings(allowRatings) {
	 	this.allowRatings = allowRatings;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getAllowResponses() {
	 	return this.allowResponses;
	 }
	
	/**
	 * @param allowResponses string 
	 */
	 setAllowResponses(allowResponses) {
	 	this.allowResponses = allowResponses;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getApiAuthorizeUrl() {
	 	return this.apiAuthorizeUrl;
	 }
	
	/**
	 * @param apiAuthorizeUrl string 
	 */
	 setApiAuthorizeUrl(apiAuthorizeUrl) {
	 	this.apiAuthorizeUrl = apiAuthorizeUrl;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGoogleClientId() {
	 	return this.googleClientId;
	 }
	
	/**
	 * @param googleClientId string 
	 */
	 setGoogleClientId(googleClientId) {
	 	this.googleClientId = googleClientId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGoogleClientSecret() {
	 	return this.googleClientSecret;
	 }
	
	/**
	 * @param googleClientSecret string 
	 */
	 setGoogleClientSecret(googleClientSecret) {
	 	this.googleClientSecret = googleClientSecret;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getGoogleTokenData() {
	 	return this.googleTokenData;
	 }
	
	/**
	 * @param googleTokenData string 
	 */
	 setGoogleTokenData(googleTokenData) {
	 	this.googleTokenData = googleTokenData;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getAssumeSuccess() {
	 	return this.assumeSuccess;
	 }
	
	/**
	 * @param assumeSuccess bool 
	 */
	 setAssumeSuccess(assumeSuccess) {
	 	this.assumeSuccess = assumeSuccess;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPrivacyStatus() {
	 	return this.privacyStatus;
	 }
	
	/**
	 * @param privacyStatus string 
	 */
	 setPrivacyStatus(privacyStatus) {
	 	this.privacyStatus = privacyStatus;
	 }
}
module.exports.YoutubeApiDistributionProfile = YoutubeApiDistributionProfile;

/**
 *
 */
class AccessControlFilter extends AccessControlBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlFilter';
	}
}
module.exports.AccessControlFilter = AccessControlFilter;

/**
 *
 */
class AccessControlProfileFilter extends AccessControlProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAccessControlProfileFilter';
	}
}
module.exports.AccessControlProfileFilter = AccessControlProfileFilter;

/**
 *
 */
class AmazonS3StorageExportJobData extends StorageExportJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAmazonS3StorageExportJobData';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFilesPermissionInS3() {
	 	return this.filesPermissionInS3;
	 }
	
	/**
	 * @param filesPermissionInS3 string 
	 */
	 setFilesPermissionInS3(filesPermissionInS3) {
	 	this.filesPermissionInS3 = filesPermissionInS3;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getS3Region() {
	 	return this.s3Region;
	 }
	
	/**
	 * @param s3Region string 
	 */
	 setS3Region(s3Region) {
	 	this.s3Region = s3Region;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSseType() {
	 	return this.sseType;
	 }
	
	/**
	 * @param sseType string 
	 */
	 setSseType(sseType) {
	 	this.sseType = sseType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSseKmsKeyId() {
	 	return this.sseKmsKeyId;
	 }
	
	/**
	 * @param sseKmsKeyId string 
	 */
	 setSseKmsKeyId(sseKmsKeyId) {
	 	this.sseKmsKeyId = sseKmsKeyId;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getSignatureType() {
	 	return this.signatureType;
	 }
	
	/**
	 * @param signatureType string 
	 */
	 setSignatureType(signatureType) {
	 	this.signatureType = signatureType;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getEndPoint() {
	 	return this.endPoint;
	 }
	
	/**
	 * @param endPoint string 
	 */
	 setEndPoint(endPoint) {
	 	this.endPoint = endPoint;
	 }
}
module.exports.AmazonS3StorageExportJobData = AmazonS3StorageExportJobData;

/**
 *
 */
class AmazonS3StorageProfileBaseFilter extends StorageProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAmazonS3StorageProfileBaseFilter';
	}
}
module.exports.AmazonS3StorageProfileBaseFilter = AmazonS3StorageProfileBaseFilter;

/**
 *
 */
class AssetParamsFilter extends AssetParamsBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAssetParamsFilter';
	}
}
module.exports.AssetParamsFilter = AssetParamsFilter;

/**
 *
 */
class BaseEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.BaseEntryCompareAttributeCondition = BaseEntryCompareAttributeCondition;

/**
 *
 */
class BaseEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBaseEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.BaseEntryMatchAttributeCondition = BaseEntryMatchAttributeCondition;

/**
 *
 */
class BatchJobFilterExt extends BatchJobFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaBatchJobFilterExt';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getJobTypeAndSubTypeIn() {
	 	return this.jobTypeAndSubTypeIn;
	 }
	
	/**
	 * @param jobTypeAndSubTypeIn string 
	 */
	 setJobTypeAndSubTypeIn(jobTypeAndSubTypeIn) {
	 	this.jobTypeAndSubTypeIn = jobTypeAndSubTypeIn;
	 }
}
module.exports.BatchJobFilterExt = BatchJobFilterExt;

/**
 *
 */
class CategoryEntryFilter extends CategoryEntryBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryEntryFilter';
	}
}
module.exports.CategoryEntryFilter = CategoryEntryFilter;

/**
 *
 */
class CategoryFilter extends CategoryBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCategoryFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string 
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMembersIn() {
	 	return this.membersIn;
	 }
	
	/**
	 * @param membersIn string 
	 */
	 setMembersIn(membersIn) {
	 	this.membersIn = membersIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getNameOrReferenceIdStartsWith() {
	 	return this.nameOrReferenceIdStartsWith;
	 }
	
	/**
	 * @param nameOrReferenceIdStartsWith string 
	 */
	 setNameOrReferenceIdStartsWith(nameOrReferenceIdStartsWith) {
	 	this.nameOrReferenceIdStartsWith = nameOrReferenceIdStartsWith;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getManagerEqual() {
	 	return this.managerEqual;
	 }
	
	/**
	 * @param managerEqual string 
	 */
	 setManagerEqual(managerEqual) {
	 	this.managerEqual = managerEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getMemberEqual() {
	 	return this.memberEqual;
	 }
	
	/**
	 * @param memberEqual string 
	 */
	 setMemberEqual(memberEqual) {
	 	this.memberEqual = memberEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getFullNameStartsWithIn() {
	 	return this.fullNameStartsWithIn;
	 }
	
	/**
	 * @param fullNameStartsWithIn string 
	 */
	 setFullNameStartsWithIn(fullNameStartsWithIn) {
	 	this.fullNameStartsWithIn = fullNameStartsWithIn;
	 }
	
	/**
	 * not includes the category itself (only sub categories)
	 * @return string
	 */
	 getAncestorIdIn() {
	 	return this.ancestorIdIn;
	 }
	
	/**
	 * @param ancestorIdIn string not includes the category itself (only sub categories)
	 */
	 setAncestorIdIn(ancestorIdIn) {
	 	this.ancestorIdIn = ancestorIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdOrInheritedParentIdIn() {
	 	return this.idOrInheritedParentIdIn;
	 }
	
	/**
	 * @param idOrInheritedParentIdIn string 
	 */
	 setIdOrInheritedParentIdIn(idOrInheritedParentIdIn) {
	 	this.idOrInheritedParentIdIn = idOrInheritedParentIdIn;
	 }
}
module.exports.CategoryFilter = CategoryFilter;

/**
 *
 */
class ConfigurableDistributionProfileBaseFilter extends DistributionProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConfigurableDistributionProfileBaseFilter';
	}
}
module.exports.ConfigurableDistributionProfileBaseFilter = ConfigurableDistributionProfileBaseFilter;

/**
 *
 */
class ConversionProfileFilter extends ConversionProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileFilter';
	}
}
module.exports.ConversionProfileFilter = ConversionProfileFilter;

/**
 *
 */
class ConversionProfileAssetParamsFilter extends ConversionProfileAssetParamsBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaConversionProfileAssetParamsFilter';
	}
	
	/**
	 * 
	 * @return ConversionProfileFilter
	 */
	 getConversionProfileIdFilter() {
	 	return this.conversionProfileIdFilter;
	 }
	
	/**
	 * @param conversionProfileIdFilter ConversionProfileFilter 
	 */
	 setConversionProfileIdFilter(conversionProfileIdFilter) {
	 	this.conversionProfileIdFilter = conversionProfileIdFilter;
	 }
	
	/**
	 * 
	 * @return AssetParamsFilter
	 */
	 getAssetParamsIdFilter() {
	 	return this.assetParamsIdFilter;
	 }
	
	/**
	 * @param assetParamsIdFilter AssetParamsFilter 
	 */
	 setAssetParamsIdFilter(assetParamsIdFilter) {
	 	this.assetParamsIdFilter = assetParamsIdFilter;
	 }
}
module.exports.ConversionProfileAssetParamsFilter = ConversionProfileAssetParamsFilter;

/**
 *
 */
class CoordinatesContextField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCoordinatesContextField';
	}
	
	/**
	 * The ip geo coder engine to be used
	 * @return string
	 */
	 getGeoCoderType() {
	 	return this.geoCoderType;
	 }
	
	/**
	 * @param geoCoderType string The ip geo coder engine to be used
	 */
	 setGeoCoderType(geoCoderType) {
	 	this.geoCoderType = geoCoderType;
	 }
}
module.exports.CoordinatesContextField = CoordinatesContextField;

/**
 *
 */
class CountryContextField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCountryContextField';
	}
	
	/**
	 * The ip geo coder engine to be used
	 * @return string
	 */
	 getGeoCoderType() {
	 	return this.geoCoderType;
	 }
	
	/**
	 * @param geoCoderType string The ip geo coder engine to be used
	 */
	 setGeoCoderType(geoCoderType) {
	 	this.geoCoderType = geoCoderType;
	 }
}
module.exports.CountryContextField = CountryContextField;

/**
 *
 */
class CuePointFilter extends CuePointBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaCuePointFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getFreeText() {
	 	return this.freeText;
	 }
	
	/**
	 * @param freeText string 
	 */
	 setFreeText(freeText) {
	 	this.freeText = freeText;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUserIdEqualCurrent() {
	 	return this.userIdEqualCurrent;
	 }
	
	/**
	 * @param userIdEqualCurrent int 
	 */
	 setUserIdEqualCurrent(userIdEqualCurrent) {
	 	this.userIdEqualCurrent = userIdEqualCurrent;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUserIdCurrent() {
	 	return this.userIdCurrent;
	 }
	
	/**
	 * @param userIdCurrent int 
	 */
	 setUserIdCurrent(userIdCurrent) {
	 	this.userIdCurrent = userIdCurrent;
	 }
}
module.exports.CuePointFilter = CuePointFilter;

/**
 *
 */
class DataEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDataEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.DataEntryCompareAttributeCondition = DataEntryCompareAttributeCondition;

/**
 *
 */
class DataEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDataEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.DataEntryMatchAttributeCondition = DataEntryMatchAttributeCondition;

/**
 *
 */
class DeliveryProfileAkamaiAppleHttpManifestBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileAkamaiAppleHttpManifestBaseFilter';
	}
}
module.exports.DeliveryProfileAkamaiAppleHttpManifestBaseFilter = DeliveryProfileAkamaiAppleHttpManifestBaseFilter;

/**
 *
 */
class DeliveryProfileAkamaiHdsBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileAkamaiHdsBaseFilter';
	}
}
module.exports.DeliveryProfileAkamaiHdsBaseFilter = DeliveryProfileAkamaiHdsBaseFilter;

/**
 *
 */
class DeliveryProfileAkamaiHttpBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileAkamaiHttpBaseFilter';
	}
}
module.exports.DeliveryProfileAkamaiHttpBaseFilter = DeliveryProfileAkamaiHttpBaseFilter;

/**
 *
 */
class DeliveryProfileGenericAppleHttpBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericAppleHttpBaseFilter';
	}
}
module.exports.DeliveryProfileGenericAppleHttpBaseFilter = DeliveryProfileGenericAppleHttpBaseFilter;

/**
 *
 */
class DeliveryProfileGenericHdsBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericHdsBaseFilter';
	}
}
module.exports.DeliveryProfileGenericHdsBaseFilter = DeliveryProfileGenericHdsBaseFilter;

/**
 *
 */
class DeliveryProfileGenericHttpBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericHttpBaseFilter';
	}
}
module.exports.DeliveryProfileGenericHttpBaseFilter = DeliveryProfileGenericHttpBaseFilter;

/**
 *
 */
class DeliveryProfileGenericSilverLightBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileGenericSilverLightBaseFilter';
	}
}
module.exports.DeliveryProfileGenericSilverLightBaseFilter = DeliveryProfileGenericSilverLightBaseFilter;

/**
 *
 */
class DeliveryProfileLiveAppleHttpBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileLiveAppleHttpBaseFilter';
	}
}
module.exports.DeliveryProfileLiveAppleHttpBaseFilter = DeliveryProfileLiveAppleHttpBaseFilter;

/**
 *
 */
class DeliveryProfileRtmpBaseFilter extends DeliveryProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryProfileRtmpBaseFilter';
	}
}
module.exports.DeliveryProfileRtmpBaseFilter = DeliveryProfileRtmpBaseFilter;

/**
 *
 */
class DeliveryServerNodeBaseFilter extends ServerNodeFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDeliveryServerNodeBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getPlaybackDomainLike() {
	 	return this.playbackDomainLike;
	 }
	
	/**
	 * @param playbackDomainLike string 
	 */
	 setPlaybackDomainLike(playbackDomainLike) {
	 	this.playbackDomainLike = playbackDomainLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPlaybackDomainMultiLikeOr() {
	 	return this.playbackDomainMultiLikeOr;
	 }
	
	/**
	 * @param playbackDomainMultiLikeOr string 
	 */
	 setPlaybackDomainMultiLikeOr(playbackDomainMultiLikeOr) {
	 	this.playbackDomainMultiLikeOr = playbackDomainMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPlaybackDomainMultiLikeAnd() {
	 	return this.playbackDomainMultiLikeAnd;
	 }
	
	/**
	 * @param playbackDomainMultiLikeAnd string 
	 */
	 setPlaybackDomainMultiLikeAnd(playbackDomainMultiLikeAnd) {
	 	this.playbackDomainMultiLikeAnd = playbackDomainMultiLikeAnd;
	 }
}
module.exports.DeliveryServerNodeBaseFilter = DeliveryServerNodeBaseFilter;

/**
 *
 */
class DistributionDisableJobData extends DistributionUpdateJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionDisableJobData';
	}
}
module.exports.DistributionDisableJobData = DistributionDisableJobData;

/**
 *
 */
class DistributionEnableJobData extends DistributionUpdateJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDistributionEnableJobData';
	}
}
module.exports.DistributionEnableJobData = DistributionEnableJobData;

/**
 *
 */
class DocumentEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDocumentEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.DocumentEntryCompareAttributeCondition = DocumentEntryCompareAttributeCondition;

/**
 *
 */
class DocumentEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDocumentEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.DocumentEntryMatchAttributeCondition = DocumentEntryMatchAttributeCondition;

/**
 *
 */
class DocumentFlavorParamsOutput extends FlavorParamsOutput{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDocumentFlavorParamsOutput';
	}
}
module.exports.DocumentFlavorParamsOutput = DocumentFlavorParamsOutput;

/**
 *
 */
class DropFolderFileResource extends DataCenterContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderFileResource';
	}
	
	/**
	 * Id of the drop folder file object
	 * @return int
	 */
	 getDropFolderFileId() {
	 	return this.dropFolderFileId;
	 }
	
	/**
	 * @param dropFolderFileId int Id of the drop folder file object
	 */
	 setDropFolderFileId(dropFolderFileId) {
	 	this.dropFolderFileId = dropFolderFileId;
	 }
}
module.exports.DropFolderFileResource = DropFolderFileResource;

/**
 *
 */
class DropFolderImportJobData extends SshImportJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaDropFolderImportJobData';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getDropFolderFileId() {
	 	return this.dropFolderFileId;
	 }
	
	/**
	 * @param dropFolderFileId int 
	 */
	 setDropFolderFileId(dropFolderFileId) {
	 	this.dropFolderFileId = dropFolderFileId;
	 }
}
module.exports.DropFolderImportJobData = DropFolderImportJobData;

/**
 *
 */
class EmailNotificationTemplateBaseFilter extends EventNotificationTemplateFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEmailNotificationTemplateBaseFilter';
	}
}
module.exports.EmailNotificationTemplateBaseFilter = EmailNotificationTemplateBaseFilter;

/**
 *
 */
class EntryDistributionFilter extends EntryDistributionBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryDistributionFilter';
	}
}
module.exports.EntryDistributionFilter = EntryDistributionFilter;

/**
 *
 */
class EntryServerNodeFilter extends EntryServerNodeBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEntryServerNodeFilter';
	}
}
module.exports.EntryServerNodeFilter = EntryServerNodeFilter;

/**
 *
 */
class EvalBooleanField extends BooleanField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEvalBooleanField';
	}
	
	/**
	 * PHP code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string PHP code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.EvalBooleanField = EvalBooleanField;

/**
 *
 */
class EvalStringField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaEvalStringField';
	}
	
	/**
	 * PHP code
	 * @return string
	 */
	 getCode() {
	 	return this.code;
	 }
	
	/**
	 * @param code string PHP code
	 */
	 setCode(code) {
	 	this.code = code;
	 }
}
module.exports.EvalStringField = EvalStringField;

/**
 *
 */
class ExternalMediaEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalMediaEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.ExternalMediaEntryCompareAttributeCondition = ExternalMediaEntryCompareAttributeCondition;

/**
 *
 */
class ExternalMediaEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaExternalMediaEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.ExternalMediaEntryMatchAttributeCondition = ExternalMediaEntryMatchAttributeCondition;

/**
 *
 */
class FacebookDistributionProviderBaseFilter extends DistributionProviderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFacebookDistributionProviderBaseFilter';
	}
}
module.exports.FacebookDistributionProviderBaseFilter = FacebookDistributionProviderBaseFilter;

/**
 *
 */
class FeedDropFolderBaseFilter extends DropFolderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeedDropFolderBaseFilter';
	}
}
module.exports.FeedDropFolderBaseFilter = FeedDropFolderBaseFilter;

/**
 *
 */
class FeedDropFolderFileBaseFilter extends DropFolderFileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFeedDropFolderFileBaseFilter';
	}
}
module.exports.FeedDropFolderFileBaseFilter = FeedDropFolderFileBaseFilter;

/**
 *
 */
class FileAssetFilter extends FileAssetBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaFileAssetFilter';
	}
}
module.exports.FileAssetFilter = FileAssetFilter;

/**
 *
 */
class GenericDistributionProfileBaseFilter extends DistributionProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProfileBaseFilter';
	}
}
module.exports.GenericDistributionProfileBaseFilter = GenericDistributionProfileBaseFilter;

/**
 *
 */
class GenericDistributionProviderBaseFilter extends DistributionProviderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericDistributionProviderBaseFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getIdEqual() {
	 	return this.idEqual;
	 }
	
	/**
	 * @param idEqual int 
	 */
	 setIdEqual(idEqual) {
	 	this.idEqual = idEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIdIn() {
	 	return this.idIn;
	 }
	
	/**
	 * @param idIn string 
	 */
	 setIdIn(idIn) {
	 	this.idIn = idIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtGreaterThanOrEqual() {
	 	return this.createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param createdAtGreaterThanOrEqual int 
	 */
	 setCreatedAtGreaterThanOrEqual(createdAtGreaterThanOrEqual) {
	 	this.createdAtGreaterThanOrEqual = createdAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getCreatedAtLessThanOrEqual() {
	 	return this.createdAtLessThanOrEqual;
	 }
	
	/**
	 * @param createdAtLessThanOrEqual int 
	 */
	 setCreatedAtLessThanOrEqual(createdAtLessThanOrEqual) {
	 	this.createdAtLessThanOrEqual = createdAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtGreaterThanOrEqual() {
	 	return this.updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * @param updatedAtGreaterThanOrEqual int 
	 */
	 setUpdatedAtGreaterThanOrEqual(updatedAtGreaterThanOrEqual) {
	 	this.updatedAtGreaterThanOrEqual = updatedAtGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getUpdatedAtLessThanOrEqual() {
	 	return this.updatedAtLessThanOrEqual;
	 }
	
	/**
	 * @param updatedAtLessThanOrEqual int 
	 */
	 setUpdatedAtLessThanOrEqual(updatedAtLessThanOrEqual) {
	 	this.updatedAtLessThanOrEqual = updatedAtLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerIdEqual() {
	 	return this.partnerIdEqual;
	 }
	
	/**
	 * @param partnerIdEqual int 
	 */
	 setPartnerIdEqual(partnerIdEqual) {
	 	this.partnerIdEqual = partnerIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerIdIn() {
	 	return this.partnerIdIn;
	 }
	
	/**
	 * @param partnerIdIn string 
	 */
	 setPartnerIdIn(partnerIdIn) {
	 	this.partnerIdIn = partnerIdIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsDefaultEqual() {
	 	return this.isDefaultEqual;
	 }
	
	/**
	 * @param isDefaultEqual int 
	 */
	 setIsDefaultEqual(isDefaultEqual) {
	 	this.isDefaultEqual = isDefaultEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getIsDefaultIn() {
	 	return this.isDefaultIn;
	 }
	
	/**
	 * @param isDefaultIn string 
	 */
	 setIsDefaultIn(isDefaultIn) {
	 	this.isDefaultIn = isDefaultIn;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getStatusEqual() {
	 	return this.statusEqual;
	 }
	
	/**
	 * @param statusEqual int 
	 */
	 setStatusEqual(statusEqual) {
	 	this.statusEqual = statusEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getStatusIn() {
	 	return this.statusIn;
	 }
	
	/**
	 * @param statusIn string 
	 */
	 setStatusIn(statusIn) {
	 	this.statusIn = statusIn;
	 }
}
module.exports.GenericDistributionProviderBaseFilter = GenericDistributionProviderBaseFilter;

/**
 *
 */
class GenericSyndicationFeedBaseFilter extends BaseSyndicationFeedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGenericSyndicationFeedBaseFilter';
	}
}
module.exports.GenericSyndicationFeedBaseFilter = GenericSyndicationFeedBaseFilter;

/**
 *
 */
class GoogleVideoSyndicationFeedBaseFilter extends BaseSyndicationFeedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGoogleVideoSyndicationFeedBaseFilter';
	}
}
module.exports.GoogleVideoSyndicationFeedBaseFilter = GoogleVideoSyndicationFeedBaseFilter;

/**
 *
 */
class GroupUserFilter extends GroupUserBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaGroupUserFilter';
	}
}
module.exports.GroupUserFilter = GroupUserFilter;

/**
 *
 */
class HttpNotificationTemplateBaseFilter extends EventNotificationTemplateFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaHttpNotificationTemplateBaseFilter';
	}
}
module.exports.HttpNotificationTemplateBaseFilter = HttpNotificationTemplateBaseFilter;

/**
 *
 */
class ITunesSyndicationFeedBaseFilter extends BaseSyndicationFeedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaITunesSyndicationFeedBaseFilter';
	}
}
module.exports.ITunesSyndicationFeedBaseFilter = ITunesSyndicationFeedBaseFilter;

/**
 *
 */
class IdeticDistributionProviderBaseFilter extends DistributionProviderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIdeticDistributionProviderBaseFilter';
	}
}
module.exports.IdeticDistributionProviderBaseFilter = IdeticDistributionProviderBaseFilter;

/**
 *
 */
class ImageFlavorParamsOutput extends FlavorParamsOutput{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaImageFlavorParamsOutput';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getDensityWidth() {
	 	return this.densityWidth;
	 }
	
	/**
	 * @param densityWidth int 
	 */
	 setDensityWidth(densityWidth) {
	 	this.densityWidth = densityWidth;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDensityHeight() {
	 	return this.densityHeight;
	 }
	
	/**
	 * @param densityHeight int 
	 */
	 setDensityHeight(densityHeight) {
	 	this.densityHeight = densityHeight;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSizeWidth() {
	 	return this.sizeWidth;
	 }
	
	/**
	 * @param sizeWidth int 
	 */
	 setSizeWidth(sizeWidth) {
	 	this.sizeWidth = sizeWidth;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getSizeHeight() {
	 	return this.sizeHeight;
	 }
	
	/**
	 * @param sizeHeight int 
	 */
	 setSizeHeight(sizeHeight) {
	 	this.sizeHeight = sizeHeight;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDepth() {
	 	return this.depth;
	 }
	
	/**
	 * @param depth int 
	 */
	 setDepth(depth) {
	 	this.depth = depth;
	 }
}
module.exports.ImageFlavorParamsOutput = ImageFlavorParamsOutput;

/**
 *
 */
class IpAddressContextField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaIpAddressContextField';
	}
}
module.exports.IpAddressContextField = IpAddressContextField;

/**
 *
 */
class KontikiStorageDeleteJobData extends StorageDeleteJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKontikiStorageDeleteJobData';
	}
	
	/**
	 * Unique Kontiki MOID for the content uploaded to Kontiki
	 * @return string
	 */
	 getContentMoid() {
	 	return this.contentMoid;
	 }
	
	/**
	 * @param contentMoid string Unique Kontiki MOID for the content uploaded to Kontiki
	 */
	 setContentMoid(contentMoid) {
	 	this.contentMoid = contentMoid;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServiceToken() {
	 	return this.serviceToken;
	 }
	
	/**
	 * @param serviceToken string 
	 */
	 setServiceToken(serviceToken) {
	 	this.serviceToken = serviceToken;
	 }
}
module.exports.KontikiStorageDeleteJobData = KontikiStorageDeleteJobData;

/**
 *
 */
class KontikiStorageExportJobData extends StorageExportJobData{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKontikiStorageExportJobData';
	}
	
	/**
	 * Holds the id of the exported asset
	 * @return string
	 */
	 getFlavorAssetId() {
	 	return this.flavorAssetId;
	 }
	
	/**
	 * @param flavorAssetId string Holds the id of the exported asset
	 */
	 setFlavorAssetId(flavorAssetId) {
	 	this.flavorAssetId = flavorAssetId;
	 }
	
	/**
	 * Unique Kontiki MOID for the content uploaded to Kontiki
	 * @return string
	 */
	 getContentMoid() {
	 	return this.contentMoid;
	 }
	
	/**
	 * @param contentMoid string Unique Kontiki MOID for the content uploaded to Kontiki
	 */
	 setContentMoid(contentMoid) {
	 	this.contentMoid = contentMoid;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getServiceToken() {
	 	return this.serviceToken;
	 }
	
	/**
	 * @param serviceToken string 
	 */
	 setServiceToken(serviceToken) {
	 	this.serviceToken = serviceToken;
	 }
}
module.exports.KontikiStorageExportJobData = KontikiStorageExportJobData;

/**
 *
 */
class KontikiStorageProfileBaseFilter extends StorageProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaKontikiStorageProfileBaseFilter';
	}
}
module.exports.KontikiStorageProfileBaseFilter = KontikiStorageProfileBaseFilter;

/**
 *
 */
class LikeFilter extends LikeBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLikeFilter';
	}
}
module.exports.LikeFilter = LikeFilter;

/**
 *
 */
class LiveChannelCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveChannelCompareAttributeCondition = LiveChannelCompareAttributeCondition;

/**
 *
 */
class LiveChannelMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveChannelMatchAttributeCondition = LiveChannelMatchAttributeCondition;

/**
 *
 */
class LiveChannelSegmentFilter extends LiveChannelSegmentBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveChannelSegmentFilter';
	}
}
module.exports.LiveChannelSegmentFilter = LiveChannelSegmentFilter;

/**
 *
 */
class LiveEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveEntryCompareAttributeCondition = LiveEntryCompareAttributeCondition;

/**
 *
 */
class LiveEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveEntryMatchAttributeCondition = LiveEntryMatchAttributeCondition;

/**
 *
 */
class LiveStreamAdminEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamAdminEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveStreamAdminEntryCompareAttributeCondition = LiveStreamAdminEntryCompareAttributeCondition;

/**
 *
 */
class LiveStreamAdminEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamAdminEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveStreamAdminEntryMatchAttributeCondition = LiveStreamAdminEntryMatchAttributeCondition;

/**
 *
 */
class LiveStreamEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveStreamEntryCompareAttributeCondition = LiveStreamEntryCompareAttributeCondition;

/**
 *
 */
class LiveStreamEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaLiveStreamEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.LiveStreamEntryMatchAttributeCondition = LiveStreamEntryMatchAttributeCondition;

/**
 *
 */
class MediaEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.MediaEntryCompareAttributeCondition = MediaEntryCompareAttributeCondition;

/**
 *
 */
class MediaEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.MediaEntryMatchAttributeCondition = MediaEntryMatchAttributeCondition;

/**
 *
 */
class MediaFlavorParamsOutput extends FlavorParamsOutput{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMediaFlavorParamsOutput';
	}
}
module.exports.MediaFlavorParamsOutput = MediaFlavorParamsOutput;

/**
 *
 */
class MetadataField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataField';
	}
	
	/**
	 * May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 * @return string
	 */
	 getXPath() {
	 	return this.xPath;
	 }
	
	/**
	 * @param xPath string May contain the full xpath to the field in three formats
 * 1. Slashed xPath, e.g. /metadata/myElementName
 * 2. Using local-name function, e.g. /[local-name()='metadata']/[local-name()='myElementName']
 * 3. Using only the field name, e.g. myElementName, it will be searched as //myElementName
	 */
	 setXPath(xPath) {
	 	this.xPath = xPath;
	 }
	
	/**
	 * Metadata profile id
	 * @return int
	 */
	 getProfileId() {
	 	return this.profileId;
	 }
	
	/**
	 * @param profileId int Metadata profile id
	 */
	 setProfileId(profileId) {
	 	this.profileId = profileId;
	 }
	
	/**
	 * Metadata profile system name
	 * @return string
	 */
	 getProfileSystemName() {
	 	return this.profileSystemName;
	 }
	
	/**
	 * @param profileSystemName string Metadata profile system name
	 */
	 setProfileSystemName(profileSystemName) {
	 	this.profileSystemName = profileSystemName;
	 }
}
module.exports.MetadataField = MetadataField;

/**
 *
 */
class MetadataFilter extends MetadataBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMetadataFilter';
	}
}
module.exports.MetadataFilter = MetadataFilter;

/**
 *
 */
class MixEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMixEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.MixEntryCompareAttributeCondition = MixEntryCompareAttributeCondition;

/**
 *
 */
class MixEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaMixEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.MixEntryMatchAttributeCondition = MixEntryMatchAttributeCondition;

/**
 *
 */
class ObjectIdField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaObjectIdField';
	}
}
module.exports.ObjectIdField = ObjectIdField;

/**
 *
 */
class PdfFlavorParamsOutput extends FlavorParamsOutput{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPdfFlavorParamsOutput';
	}
	
	/**
	 * 
	 * @return bool
	 */
	 getReadonly() {
	 	return this.readonly;
	 }
	
	/**
	 * @param readonly bool 
	 */
	 setReadonly(readonly) {
	 	this.readonly = readonly;
	 }
}
module.exports.PdfFlavorParamsOutput = PdfFlavorParamsOutput;

/**
 *
 */
class PermissionFilter extends PermissionBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionFilter';
	}
}
module.exports.PermissionFilter = PermissionFilter;

/**
 *
 */
class PermissionItemFilter extends PermissionItemBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPermissionItemFilter';
	}
}
module.exports.PermissionItemFilter = PermissionItemFilter;

/**
 *
 */
class PlayableEntryCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayableEntryCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.PlayableEntryCompareAttributeCondition = PlayableEntryCompareAttributeCondition;

/**
 *
 */
class PlayableEntryMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlayableEntryMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.PlayableEntryMatchAttributeCondition = PlayableEntryMatchAttributeCondition;

/**
 *
 */
class PlaylistCompareAttributeCondition extends SearchComparableAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaylistCompareAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.PlaylistCompareAttributeCondition = PlaylistCompareAttributeCondition;

/**
 *
 */
class PlaylistMatchAttributeCondition extends SearchMatchAttributeCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaPlaylistMatchAttributeCondition';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getAttribute() {
	 	return this.attribute;
	 }
	
	/**
	 * @param attribute string 
	 */
	 setAttribute(attribute) {
	 	this.attribute = attribute;
	 }
}
module.exports.PlaylistMatchAttributeCondition = PlaylistMatchAttributeCondition;

/**
 *
 */
class RemoteDropFolderBaseFilter extends DropFolderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaRemoteDropFolderBaseFilter';
	}
}
module.exports.RemoteDropFolderBaseFilter = RemoteDropFolderBaseFilter;

/**
 *
 */
class ScheduleEventFilter extends ScheduleEventBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getResourceIdsLike() {
	 	return this.resourceIdsLike;
	 }
	
	/**
	 * @param resourceIdsLike string 
	 */
	 setResourceIdsLike(resourceIdsLike) {
	 	this.resourceIdsLike = resourceIdsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResourceIdsMultiLikeOr() {
	 	return this.resourceIdsMultiLikeOr;
	 }
	
	/**
	 * @param resourceIdsMultiLikeOr string 
	 */
	 setResourceIdsMultiLikeOr(resourceIdsMultiLikeOr) {
	 	this.resourceIdsMultiLikeOr = resourceIdsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResourceIdsMultiLikeAnd() {
	 	return this.resourceIdsMultiLikeAnd;
	 }
	
	/**
	 * @param resourceIdsMultiLikeAnd string 
	 */
	 setResourceIdsMultiLikeAnd(resourceIdsMultiLikeAnd) {
	 	this.resourceIdsMultiLikeAnd = resourceIdsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentResourceIdsLike() {
	 	return this.parentResourceIdsLike;
	 }
	
	/**
	 * @param parentResourceIdsLike string 
	 */
	 setParentResourceIdsLike(parentResourceIdsLike) {
	 	this.parentResourceIdsLike = parentResourceIdsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentResourceIdsMultiLikeOr() {
	 	return this.parentResourceIdsMultiLikeOr;
	 }
	
	/**
	 * @param parentResourceIdsMultiLikeOr string 
	 */
	 setParentResourceIdsMultiLikeOr(parentResourceIdsMultiLikeOr) {
	 	this.parentResourceIdsMultiLikeOr = parentResourceIdsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentResourceIdsMultiLikeAnd() {
	 	return this.parentResourceIdsMultiLikeAnd;
	 }
	
	/**
	 * @param parentResourceIdsMultiLikeAnd string 
	 */
	 setParentResourceIdsMultiLikeAnd(parentResourceIdsMultiLikeAnd) {
	 	this.parentResourceIdsMultiLikeAnd = parentResourceIdsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTemplateEntryCategoriesIdsMultiLikeAnd() {
	 	return this.templateEntryCategoriesIdsMultiLikeAnd;
	 }
	
	/**
	 * @param templateEntryCategoriesIdsMultiLikeAnd string 
	 */
	 setTemplateEntryCategoriesIdsMultiLikeAnd(templateEntryCategoriesIdsMultiLikeAnd) {
	 	this.templateEntryCategoriesIdsMultiLikeAnd = templateEntryCategoriesIdsMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTemplateEntryCategoriesIdsMultiLikeOr() {
	 	return this.templateEntryCategoriesIdsMultiLikeOr;
	 }
	
	/**
	 * @param templateEntryCategoriesIdsMultiLikeOr string 
	 */
	 setTemplateEntryCategoriesIdsMultiLikeOr(templateEntryCategoriesIdsMultiLikeOr) {
	 	this.templateEntryCategoriesIdsMultiLikeOr = templateEntryCategoriesIdsMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResourceSystemNamesMultiLikeOr() {
	 	return this.resourceSystemNamesMultiLikeOr;
	 }
	
	/**
	 * @param resourceSystemNamesMultiLikeOr string 
	 */
	 setResourceSystemNamesMultiLikeOr(resourceSystemNamesMultiLikeOr) {
	 	this.resourceSystemNamesMultiLikeOr = resourceSystemNamesMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTemplateEntryCategoriesIdsLike() {
	 	return this.templateEntryCategoriesIdsLike;
	 }
	
	/**
	 * @param templateEntryCategoriesIdsLike string 
	 */
	 setTemplateEntryCategoriesIdsLike(templateEntryCategoriesIdsLike) {
	 	this.templateEntryCategoriesIdsLike = templateEntryCategoriesIdsLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResourceSystemNamesMultiLikeAnd() {
	 	return this.resourceSystemNamesMultiLikeAnd;
	 }
	
	/**
	 * @param resourceSystemNamesMultiLikeAnd string 
	 */
	 setResourceSystemNamesMultiLikeAnd(resourceSystemNamesMultiLikeAnd) {
	 	this.resourceSystemNamesMultiLikeAnd = resourceSystemNamesMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getResourceSystemNamesLike() {
	 	return this.resourceSystemNamesLike;
	 }
	
	/**
	 * @param resourceSystemNamesLike string 
	 */
	 setResourceSystemNamesLike(resourceSystemNamesLike) {
	 	this.resourceSystemNamesLike = resourceSystemNamesLike;
	 }
}
module.exports.ScheduleEventFilter = ScheduleEventFilter;

/**
 *
 */
class ScheduleEventResourceFilter extends ScheduleEventResourceBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleEventResourceFilter';
	}
	
	/**
	 * Find event-resource objects that associated with the event, if none found, find by its parent event
	 * @return int
	 */
	 getEventIdOrItsParentIdEqual() {
	 	return this.eventIdOrItsParentIdEqual;
	 }
	
	/**
	 * @param eventIdOrItsParentIdEqual int Find event-resource objects that associated with the event, if none found, find by its parent event
	 */
	 setEventIdOrItsParentIdEqual(eventIdOrItsParentIdEqual) {
	 	this.eventIdOrItsParentIdEqual = eventIdOrItsParentIdEqual;
	 }
}
module.exports.ScheduleEventResourceFilter = ScheduleEventResourceFilter;

/**
 *
 */
class ScheduleResourceFilter extends ScheduleResourceBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScheduleResourceFilter';
	}
}
module.exports.ScheduleResourceFilter = ScheduleResourceFilter;

/**
 *
 */
class ScpDropFolder extends SshDropFolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaScpDropFolder';
	}
}
module.exports.ScpDropFolder = ScpDropFolder;

/**
 *
 */
class ServerFileResource extends DataCenterContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaServerFileResource';
	}
	
	/**
	 * Full path to the local file
	 * @return string
	 */
	 getLocalFilePath() {
	 	return this.localFilePath;
	 }
	
	/**
	 * @param localFilePath string Full path to the local file
	 */
	 setLocalFilePath(localFilePath) {
	 	this.localFilePath = localFilePath;
	 }
}
module.exports.ServerFileResource = ServerFileResource;

/**
 *
 */
class SftpDropFolder extends SshDropFolder{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSftpDropFolder';
	}
}
module.exports.SftpDropFolder = SftpDropFolder;

/**
 *
 */
class SshUrlResource extends UrlResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSshUrlResource';
	}
	
	/**
	 * SSH private key
	 * @return string
	 */
	 getPrivateKey() {
	 	return this.privateKey;
	 }
	
	/**
	 * @param privateKey string SSH private key
	 */
	 setPrivateKey(privateKey) {
	 	this.privateKey = privateKey;
	 }
	
	/**
	 * SSH public key
	 * @return string
	 */
	 getPublicKey() {
	 	return this.publicKey;
	 }
	
	/**
	 * @param publicKey string SSH public key
	 */
	 setPublicKey(publicKey) {
	 	this.publicKey = publicKey;
	 }
	
	/**
	 * Passphrase for SSH keys
	 * @return string
	 */
	 getKeyPassphrase() {
	 	return this.keyPassphrase;
	 }
	
	/**
	 * @param keyPassphrase string Passphrase for SSH keys
	 */
	 setKeyPassphrase(keyPassphrase) {
	 	this.keyPassphrase = keyPassphrase;
	 }
}
module.exports.SshUrlResource = SshUrlResource;

/**
 *
 */
class SwfFlavorParamsOutput extends FlavorParamsOutput{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSwfFlavorParamsOutput';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getFlashVersion() {
	 	return this.flashVersion;
	 }
	
	/**
	 * @param flashVersion int 
	 */
	 setFlashVersion(flashVersion) {
	 	this.flashVersion = flashVersion;
	 }
	
	/**
	 * 
	 * @return bool
	 */
	 getPoly2Bitmap() {
	 	return this.poly2Bitmap;
	 }
	
	/**
	 * @param poly2Bitmap bool 
	 */
	 setPoly2Bitmap(poly2Bitmap) {
	 	this.poly2Bitmap = poly2Bitmap;
	 }
}
module.exports.SwfFlavorParamsOutput = SwfFlavorParamsOutput;

/**
 *
 */
class SyndicationDistributionProfileBaseFilter extends DistributionProfileFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSyndicationDistributionProfileBaseFilter';
	}
}
module.exports.SyndicationDistributionProfileBaseFilter = SyndicationDistributionProfileBaseFilter;

/**
 *
 */
class SyndicationDistributionProviderBaseFilter extends DistributionProviderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSyndicationDistributionProviderBaseFilter';
	}
}
module.exports.SyndicationDistributionProviderBaseFilter = SyndicationDistributionProviderBaseFilter;

/**
 *
 */
class SystemPartnerFilter extends PartnerFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaSystemPartnerFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getPartnerParentIdEqual() {
	 	return this.partnerParentIdEqual;
	 }
	
	/**
	 * @param partnerParentIdEqual int 
	 */
	 setPartnerParentIdEqual(partnerParentIdEqual) {
	 	this.partnerParentIdEqual = partnerParentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getPartnerParentIdIn() {
	 	return this.partnerParentIdIn;
	 }
	
	/**
	 * @param partnerParentIdIn string 
	 */
	 setPartnerParentIdIn(partnerParentIdIn) {
	 	this.partnerParentIdIn = partnerParentIdIn;
	 }
}
module.exports.SystemPartnerFilter = SystemPartnerFilter;

/**
 *
 */
class TimeContextField extends IntegerField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTimeContextField';
	}
	
	/**
	 * Time offset in seconds since current time
	 * @return int
	 */
	 getOffset() {
	 	return this.offset;
	 }
	
	/**
	 * @param offset int Time offset in seconds since current time
	 */
	 setOffset(offset) {
	 	this.offset = offset;
	 }
}
module.exports.TimeContextField = TimeContextField;

/**
 *
 */
class TubeMogulSyndicationFeedBaseFilter extends BaseSyndicationFeedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaTubeMogulSyndicationFeedBaseFilter';
	}
}
module.exports.TubeMogulSyndicationFeedBaseFilter = TubeMogulSyndicationFeedBaseFilter;

/**
 *
 */
class UiConfAdminBaseFilter extends UiConfFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUiConfAdminBaseFilter';
	}
}
module.exports.UiConfAdminBaseFilter = UiConfAdminBaseFilter;

/**
 *
 */
class UploadedFileTokenResource extends DataCenterContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUploadedFileTokenResource';
	}
	
	/**
	 * Token that returned from upload.upload action or uploadToken.add action
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * @param token string Token that returned from upload.upload action or uploadToken.add action
	 */
	 setToken(token) {
	 	this.token = token;
	 }
}
module.exports.UploadedFileTokenResource = UploadedFileTokenResource;

/**
 *
 */
class UserAgentCondition extends RegexCondition{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAgentCondition';
	}
}
module.exports.UserAgentCondition = UserAgentCondition;

/**
 *
 */
class UserAgentContextField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserAgentContextField';
	}
}
module.exports.UserAgentContextField = UserAgentContextField;

/**
 *
 */
class UserEmailContextField extends StringField{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserEmailContextField';
	}
}
module.exports.UserEmailContextField = UserEmailContextField;

/**
 *
 */
class UserEntryFilter extends UserEntryBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserEntryFilter';
	}
	
	/**
	 * 
	 * @return int
	 */
	 getUserIdEqualCurrent() {
	 	return this.userIdEqualCurrent;
	 }
	
	/**
	 * @param userIdEqualCurrent int 
	 */
	 setUserIdEqualCurrent(userIdEqualCurrent) {
	 	this.userIdEqualCurrent = userIdEqualCurrent;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getIsAnonymous() {
	 	return this.isAnonymous;
	 }
	
	/**
	 * @param isAnonymous int 
	 */
	 setIsAnonymous(isAnonymous) {
	 	this.isAnonymous = isAnonymous;
	 }
}
module.exports.UserEntryFilter = UserEntryFilter;

/**
 *
 */
class UserLoginDataFilter extends UserLoginDataBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserLoginDataFilter';
	}
}
module.exports.UserLoginDataFilter = UserLoginDataFilter;

/**
 *
 */
class UserRoleFilter extends UserRoleBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaUserRoleFilter';
	}
}
module.exports.UserRoleFilter = UserRoleFilter;

/**
 *
 */
class WebcamTokenResource extends DataCenterContentResource{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaWebcamTokenResource';
	}
	
	/**
	 * Token that returned from media server such as FMS or red5
	 * @return string
	 */
	 getToken() {
	 	return this.token;
	 }
	
	/**
	 * @param token string Token that returned from media server such as FMS or red5
	 */
	 setToken(token) {
	 	this.token = token;
	 }
}
module.exports.WebcamTokenResource = WebcamTokenResource;

/**
 *
 */
class WowzaMediaServerNode extends MediaServerNode{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaWowzaMediaServerNode';
	}
	
	/**
	 * Wowza Media server app prefix
	 * @return string
	 */
	 getAppPrefix() {
	 	return this.appPrefix;
	 }
	
	/**
	 * @param appPrefix string Wowza Media server app prefix
	 */
	 setAppPrefix(appPrefix) {
	 	this.appPrefix = appPrefix;
	 }
	
	/**
	 * Wowza Media server transcoder configuration overide
	 * @return string
	 */
	 getTranscoder() {
	 	return this.transcoder;
	 }
	
	/**
	 * @param transcoder string Wowza Media server transcoder configuration overide
	 */
	 setTranscoder(transcoder) {
	 	this.transcoder = transcoder;
	 }
	
	/**
	 * Wowza Media server GPU index id
	 * @return int
	 */
	 getGPUID() {
	 	return this.GPUID;
	 }
	
	/**
	 * @param GPUID int Wowza Media server GPU index id
	 */
	 setGPUID(GPUID) {
	 	this.GPUID = GPUID;
	 }
	
	/**
	 * Live service port
	 * @return int
	 */
	 getLiveServicePort() {
	 	return this.liveServicePort;
	 }
	
	/**
	 * @param liveServicePort int Live service port
	 */
	 setLiveServicePort(liveServicePort) {
	 	this.liveServicePort = liveServicePort;
	 }
	
	/**
	 * Live service protocol
	 * @return string
	 */
	 getLiveServiceProtocol() {
	 	return this.liveServiceProtocol;
	 }
	
	/**
	 * @param liveServiceProtocol string Live service protocol
	 */
	 setLiveServiceProtocol(liveServiceProtocol) {
	 	this.liveServiceProtocol = liveServiceProtocol;
	 }
	
	/**
	 * Wowza media server live service internal domain
	 * @return string
	 */
	 getLiveServiceInternalDomain() {
	 	return this.liveServiceInternalDomain;
	 }
	
	/**
	 * @param liveServiceInternalDomain string Wowza media server live service internal domain
	 */
	 setLiveServiceInternalDomain(liveServiceInternalDomain) {
	 	this.liveServiceInternalDomain = liveServiceInternalDomain;
	 }
}
module.exports.WowzaMediaServerNode = WowzaMediaServerNode;

/**
 *
 */
class YahooSyndicationFeedBaseFilter extends BaseSyndicationFeedFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYahooSyndicationFeedBaseFilter';
	}
}
module.exports.YahooSyndicationFeedBaseFilter = YahooSyndicationFeedBaseFilter;

/**
 *
 */
class YoutubeApiDistributionProviderBaseFilter extends DistributionProviderFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaYoutubeApiDistributionProviderBaseFilter';
	}
}
module.exports.YoutubeApiDistributionProviderBaseFilter = YoutubeApiDistributionProviderBaseFilter;

/**
 *
 */
class AdCuePointBaseFilter extends CuePointFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAdCuePointBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getProtocolTypeEqual() {
	 	return this.protocolTypeEqual;
	 }
	
	/**
	 * @param protocolTypeEqual string 
	 */
	 setProtocolTypeEqual(protocolTypeEqual) {
	 	this.protocolTypeEqual = protocolTypeEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getProtocolTypeIn() {
	 	return this.protocolTypeIn;
	 }
	
	/**
	 * @param protocolTypeIn string 
	 */
	 setProtocolTypeIn(protocolTypeIn) {
	 	this.protocolTypeIn = protocolTypeIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitleLike() {
	 	return this.titleLike;
	 }
	
	/**
	 * @param titleLike string 
	 */
	 setTitleLike(titleLike) {
	 	this.titleLike = titleLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitleMultiLikeOr() {
	 	return this.titleMultiLikeOr;
	 }
	
	/**
	 * @param titleMultiLikeOr string 
	 */
	 setTitleMultiLikeOr(titleMultiLikeOr) {
	 	this.titleMultiLikeOr = titleMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTitleMultiLikeAnd() {
	 	return this.titleMultiLikeAnd;
	 }
	
	/**
	 * @param titleMultiLikeAnd string 
	 */
	 setTitleMultiLikeAnd(titleMultiLikeAnd) {
	 	this.titleMultiLikeAnd = titleMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndTimeGreaterThanOrEqual() {
	 	return this.endTimeGreaterThanOrEqual;
	 }
	
	/**
	 * @param endTimeGreaterThanOrEqual int 
	 */
	 setEndTimeGreaterThanOrEqual(endTimeGreaterThanOrEqual) {
	 	this.endTimeGreaterThanOrEqual = endTimeGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndTimeLessThanOrEqual() {
	 	return this.endTimeLessThanOrEqual;
	 }
	
	/**
	 * @param endTimeLessThanOrEqual int 
	 */
	 setEndTimeLessThanOrEqual(endTimeLessThanOrEqual) {
	 	this.endTimeLessThanOrEqual = endTimeLessThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDurationGreaterThanOrEqual() {
	 	return this.durationGreaterThanOrEqual;
	 }
	
	/**
	 * @param durationGreaterThanOrEqual int 
	 */
	 setDurationGreaterThanOrEqual(durationGreaterThanOrEqual) {
	 	this.durationGreaterThanOrEqual = durationGreaterThanOrEqual;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getDurationLessThanOrEqual() {
	 	return this.durationLessThanOrEqual;
	 }
	
	/**
	 * @param durationLessThanOrEqual int 
	 */
	 setDurationLessThanOrEqual(durationLessThanOrEqual) {
	 	this.durationLessThanOrEqual = durationLessThanOrEqual;
	 }
}
module.exports.AdCuePointBaseFilter = AdCuePointBaseFilter;

/**
 *
 */
class AdminUserBaseFilter extends UserFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAdminUserBaseFilter';
	}
}
module.exports.AdminUserBaseFilter = AdminUserBaseFilter;

/**
 *
 */
class AmazonS3StorageProfileFilter extends AmazonS3StorageProfileBaseFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAmazonS3StorageProfileFilter';
	}
}
module.exports.AmazonS3StorageProfileFilter = AmazonS3StorageProfileFilter;

/**
 *
 */
class AnnotationBaseFilter extends CuePointFilter{
	
	constructor(object = null) {
		super(object);
		this.objectType = 'KalturaAnnotationBaseFilter';
	}
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdEqual() {
	 	return this.parentIdEqual;
	 }
	
	/**
	 * @param parentIdEqual string 
	 */
	 setParentIdEqual(parentIdEqual) {
	 	this.parentIdEqual = parentIdEqual;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getParentIdIn() {
	 	return this.parentIdIn;
	 }
	
	/**
	 * @param parentIdIn string 
	 */
	 setParentIdIn(parentIdIn) {
	 	this.parentIdIn = parentIdIn;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTextLike() {
	 	return this.textLike;
	 }
	
	/**
	 * @param textLike string 
	 */
	 setTextLike(textLike) {
	 	this.textLike = textLike;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTextMultiLikeOr() {
	 	return this.textMultiLikeOr;
	 }
	
	/**
	 * @param textMultiLikeOr string 
	 */
	 setTextMultiLikeOr(textMultiLikeOr) {
	 	this.textMultiLikeOr = textMultiLikeOr;
	 }
	
	/**
	 * 
	 * @return string
	 */
	 getTextMultiLikeAnd() {
	 	return this.textMultiLikeAnd;
	 }
	
	/**
	 * @param textMultiLikeAnd string 
	 */
	 setTextMultiLikeAnd(textMultiLikeAnd) {
	 	this.textMultiLikeAnd = textMultiLikeAnd;
	 }
	
	/**
	 * 
	 * @return int
	 */
	 getEndTimeGreaterThanOrEqual() {
	 	return this.endTimeGreaterThanOrEqual;
	 }
	
	/**
	 */
	 }