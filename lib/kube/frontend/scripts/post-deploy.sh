#!/bin/bash

kubectl wait deployment -n "$KUBE_NS" "$KUBE_APP"-deployment --for condition=Available=True --timeout=120s
