from __future__ import unicode_literals

import logging

from globus_sdk.authorizers import (
    AccessTokenAuthorizer,
    ClientCredentialsAuthorizer,
    RefreshTokenAuthorizer,
)
from globus_sdk.base import BaseClient, merge_params, safe_stringify
from globus_sdk.response import GlobusHTTPResponse

logger = logging.getLogger(__name__)


class QueuesClient(BaseClient):
    r"""
    Client for the Globus Queues API

    [description]

    :param authorizer: An authorizer instance used for all calls to
                       Globus Queues
    :type authorizer: :class: `GlobusAuthorizer \
                      <globus_sdk.authorizers.base.GlobusAuthorizer>`

    **Methods**

    * :py:meth:`.create_queue`
    * :py:meth:`.get_queue`
    * :py:meth:`.get_queues`
    * :py:meth:`.update_queue`
    * :py:meth:`.delete_queue`
    * :py:meth:`.send_message`
    * :py:meth:`.receive_message`
    """
    # disallow basic auth
    allowed_authorizer_types = [
        AccessTokenAuthorizer,
        RefreshTokenAuthorizer,
        ClientCredentialsAuthorizer,
    ]

    default_response_class = GlobusHTTPResponse

    def __init__(self, authorizer=None, **kwargs):
        super(QueuesClient, self).__init__("queues", authorizer=authorizer, **kwargs)

    #
    # Queue Management
    #

    def create_queue(
        self,
        label,
        delivery_timeout,
        admins,
        senders,
        receivers,
        receiver_url=None,
        receiver_scope=None,
        **params
    ):
        """
        ``POST /v1/queues``

        **Examples**

        >>> queues_client = globus_sdk.QueuesClient(...)
        >>> queue = queues_client.create_queue(
        >>>     label='my queue',
        >>>     delivery_timeout=3600,
        >>>     admins=['urn:globus:auth:identity:84c5d77c-4061-485a-85b7-e0920acb288d'],
        >>>     senders=['urn:globus:auth:identity:84c5d77c-4061-485a-85b7-e0920acb288d'],
        >>>     receivers=['urn:globus:auth:identity:84c5d77c-4061-485a-85b7-e0920acb288d']
        >>> )
        """  # noqa
        self.logger.info("QueuesClient.create_queue({}, ...)".format(label))

        payload = {
            "data": {
                "label": label,
                "delivery_timeout": delivery_timeout,
                "admins": admins,
                "senders": senders,
                "receivers": receivers,
                "receiver_url": receiver_url,
                "receiver_scope": receiver_scope,
            }
        }

        return self.post("v1/queues", payload, params=params)

    def get_queue(self, queue_id, **params):
        """
        ``GET /v1/queues/<queue_id>``

        **Examples**

        >>> queues_client = globus_sdk.QueuesClient(...)
        >>> queue = queues_client.get_queue(queue_id)
        """
        queue_id = safe_stringify(queue_id)

        self.logger.info("QueuesClient.get_queue({}, ...)".format(queue_id))

        path = self.qjoin_path("v1/queues", queue_id)

        return self.get(path, params=params)

    def get_queues(self, queue_ids=None, roles=None, **params):
        """
        ``GET /v1/queues?queue_ids=<queue_ids>&roles=<roles>``

        **Examples**

        >>> queues_client = globus_sdk.QueuesClient(...)
        >>> queues = queues_client.get_queues(queue_ids=[<queue_id_1>, <queue_id_2>])
        >>> queues = queues_client.get_queues(roles=["sender"])
        """
        self.logger("QueuesClient.get_queues() with params {}".format(params))

        if queue_ids is None:
            queue_ids = []

        if roles is None:
            roles = []

        queue_ids = ",".join([safe_stringify(i) for i in queue_ids])
        roles = ",".join([safe_stringify(i) for i in roles])

        merge_params(params, queue_ids=queue_ids, roles=roles)

        return self.get("v1/queues", params=params)
